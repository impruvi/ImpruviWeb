import apiClientFactory from 'aws-api-gateway-client';
import axios from 'axios';

class HttpClient {

    #authToken = null;
    #client = apiClientFactory.newClient({
        invokeUrl: 'https://a70qx1uv76.execute-api.us-west-2.amazonaws.com/prod',
        region: 'us-west-2',
        accessKey: 'AKIAXTDBP63P4IWBNXM6',
        secretKey: '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',
    });

    constructor(authToken) {
        this.#authToken = authToken;
    }

    initiateSignUp = async ({email, password, firstName, lastName}) => {
        const result = await this.#client.invokeApi({}, '/player/sign-up/initiate', 'POST', {}, {
            email,
            password,
            firstName,
            lastName
        });
        return result.data;
    }

    completeSignUp = async ({playerId, code}) => {
        const result = await this.#client.invokeApi({}, '/player/sign-up/complete', 'POST', {}, {
            playerId,
            code
        });
        return result.data;
    }

    signIn = async ({email, password}) => {
        const result = await this.#client.invokeApi({}, '/player/sign-in', 'POST', {}, {
            email,
            password
        });
        return result.data;
    }

    initiatePasswordReset = async ({email}) => {
        const result = await this.#client.invokeApi({}, '/player/password-reset/initiate', 'POST', {}, {
            email,
        });
        return result.data;
    }

    // throws an exception if code is not valid
    validatePasswordResetCode = async ({email, code}) => {
        await this.#client.invokeApi({}, '/player/password-reset/validate-code', 'POST', {}, {
            email,
            code
        });
    }

    resetPassword = async ({email, password, code}) => {
        const result = await this.#client.invokeApi({}, '/player/password-reset/complete', 'POST', {}, {
            email,
            password,
            code
        });
        return result.data;
    }

    createSubscription = async ({paymentMethodId, coachId, stripeProductId, stripePriceId}) => {
        await this.#client.invokeApi({}, '/player/subscription/create', 'POST', {}, {
            token: this.#authToken,
            paymentMethodId,
            subscriptionPlanRef: {
                coachId: coachId,
                stripeProductId: stripeProductId,
                stripePriceId: stripePriceId
            }
        });
    }

    getPlayer = async (playerId) => {
        const response = await this.#client.invokeApi({}, '/player/get', 'POST', {}, {
            playerId,
        });
        return response.data.player;
    }

    getSubscription = async (playerId) => {
        try {
            const response = await this.#client.invokeApi({}, '/player/subscription/get', 'POST', {}, {
                playerId: playerId,
            });
            return response.data.subscription;
        } catch(err) {
            if (err.response.status === 404) {
                return null;
            }

            throw err
        }
    }

    cancelSubscription = async () => {
        await this.#client.invokeApi({}, '/player/subscription/cancel', 'POST', {}, {
            token: this.#authToken,
        });
    }

    reactivateSubscription = async () => {
        await this.#client.invokeApi({}, '/player/subscription/re-activate', 'POST', {}, {
            token: this.#authToken,
        });
    }

    getPaymentMethods = async () => {
        const result = await this.#client.invokeApi({}, '/player/payment-methods/get', 'POST', {}, {
            token: this.#authToken,
        });

        return result.data.paymentMethods;
    }

    getSubscriptionPlan = async ({stripeProductId, stripePriceId}) => {
        const result = await this.#client.invokeApi({}, '/subscription-plan/get', 'POST', {}, {
            stripeProductId,
            stripePriceId
        });

        return result.data.subscriptionPlan;
    }

    updatePlayer = async ({playerId, coachId, firstName, lastName, email, position, availableEquipment, availableTrainingLocations, shortTermGoal, longTermGoal, headshot}) => {
        const player = {
            playerId,
            coachId,
            firstName,
            lastName,
            email,
            position,
            availableEquipment,
            availableTrainingLocations,
            shortTermGoal,
            longTermGoal
        }

        if (!!headshot) {
            if (headshot.isUploadedLocally) {
                const mediaUploadUrl = await this.getMediaUploadUrl('player/headshot');
                await this.uploadFile(headshot.file, mediaUploadUrl.uploadUrl);
                player.headshot = {
                    fileLocation: mediaUploadUrl.fileLocation,
                    uploadDateEpochMillis: new Date().getTime() // TODO: move updating of this to BE
                }
            } else {
                player.headshot = {
                    fileLocation: headshot.src,
                    uploadDateEpochMillis: headshot.timestamp
                }
            }
        }

        await this.#client.invokeApi({}, '/player/update', 'POST', {},{
            player: player
        });
        return player;
    }

    listCoaches = async () => {
        const response = await this.#client.invokeApi({}, '/coaches/list', 'POST', {}, {
            limit: -1
        });
        return response.data.coaches;
    }

    getCoach = async (coachId) => {
        const response = await this.#client.invokeApi({}, '/coach/get', 'POST', {},{
            coachId: coachId
        });
        return response.data.coach;
    }

    getMediaUploadUrl = async (pathPrefix) => {
        const response = await this.#client.invokeApi({}, '/media-upload-url/generate', 'POST', {}, {
            pathPrefix,
        });
        return response.data;
    }

    uploadFile = (file, url) => {
        const config = {
            headers: {
                'Content-Type': 'application/octet-stream',
            }
        };
        console.log(file);

        return axios.put(url, file, config);
    };


    stall = async (stallTime = 2000) => {
        await new Promise(resolve => setTimeout(resolve, stallTime));
    }
}

export default HttpClient;
