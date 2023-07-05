export const USDFormatter = (value: string) => {
    return parseFloat(value).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    })
}

export const PercentageFormatter = (value: string) => {
    return `${parseFloat(value).toFixed(2)} %`;
}