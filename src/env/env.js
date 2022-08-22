const Domain = {
    Beta: 'beta',
    Prod: 'prod'
}

export const getApiGatewayEndpoint = () => {
    switch (process.env.REACT_APP_DOMAIN) {
        case Domain.Beta:
            return 'https://pmpq5sqn7f.execute-api.us-west-2.amazonaws.com/prod';
        default:
            return 'https://a70qx1uv76.execute-api.us-west-2.amazonaws.com/prod'
    }
}

export const getStripePublishableKey = () => {
    switch (process.env.REACT_APP_DOMAIN) {
        case Domain.Beta:
            return 'pk_test_51LIhrlKA3EgJIYsfVJurg7PFSoPWLJFvBENrldRRY0PsNt5qzl6ehLOIJnxvjFrWiuioKmJpWHh2q4n8xt6GSbcD00vlDDHGn3';
        default:
            return 'pk_live_51LIhrlKA3EgJIYsfCYMcP85k1N7yb1tEm6l72j4XVWIFV1sclcx9scM6UBkQIgXyjGWlD1PHHdUlSQZ659ij1c4b00xrbJv9iO'
    }
}

export const shouldReportUserSessions = () => {
    return process.env.REACT_APP_DOMAIN === Domain.Prod;
}
