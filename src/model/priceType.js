export const PriceTypeSlug = {
    Subscription: 'subscription',
    OneTimePurchase: 'one-time-purchase',
    Trial: 'trial'
}

export const PriceType = {
    Subscription: 'Subscription',
    OneTimePurchase: 'OneTimePurchase',
    Trial: 'Trial'
}

export const convertPriceTypeToSlug = (priceType) => {
    switch (priceType) {
        case PriceType.Subscription:
            return PriceTypeSlug.Subscription;
        case PriceType.OneTimePurchase:
            return PriceTypeSlug.OneTimePurchase;
        case PriceType.Trial:
            return PriceTypeSlug.Trial;
    }
}

export const convertSlugToPriceType = (slug) => {
    switch (slug) {
        case PriceTypeSlug.Subscription:
            return PriceType.Subscription;
        case PriceTypeSlug.OneTimePurchase:
            return PriceType.OneTimePurchase;
        case PriceTypeSlug.Trial:
            return PriceType.Trial;
    }
}
