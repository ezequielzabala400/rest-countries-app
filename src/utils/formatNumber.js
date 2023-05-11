

export const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number)
}

export const formatLanguages = (languages) => {
    const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
    return formatter.format(languages)
}