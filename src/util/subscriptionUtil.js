export const getTrialPlan = (pricingPlans) => {
    return pricingPlans.find(plan => plan.type === 'Trial');
}

export const getSubscriptionPlans = (pricingPlans) => {
    return pricingPlans.filter(plan => plan.type === 'Subscription');
}

export const getOneTimePurchasePlans = (pricingPlans) => {
    return pricingPlans.filter(plan => plan.type === 'OneTimePurchase');
}

export const hasUsedTrialPlan = (trialPlan, subscriptionHistory) => {
    return !!subscriptionHistory && !!subscriptionHistory.find(sub => isSameSubscriptionPlan(sub.plan, trialPlan));
}

export const isSameSubscriptionPlan = (plan1, plan2) => {
    return plan1.stripeProductId === plan2.stripeProductId && plan1.stripePriceId === plan2.stripePriceId;
}
