export const countDiscount = (price, discountPercentage) => {
    return Math.floor(price - ((price/100) * Math.round(discountPercentage)))
}