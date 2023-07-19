const formatCurrencyNumber = (number, style = 'long', decimals = 2) => {
    if (style === 'compact' && Number(number) >= 1000000) {
        const isFractionary =
            Intl.NumberFormat('pt-BR', { notation: 'compact', maximumFractionDigits: 3 })
            .format(Number(number))
            .includes(',')

        const numberFormatted =
            Intl.NumberFormat('pt-BR', { notation: 'compact', minimumFractionDigits: isFractionary ? 3 : 0, maximumFractionDigits: 3 })
            .format(Number(number))

        if (isFractionary) {
            return (
                numberFormatted.split(',')[0] + ',' +
                numberFormatted.split(',')[1]?.slice(0, 3) + ' ' +
                numberFormatted.slice(numberFormatted.length - 2)
            )
        } else {
            return numberFormatted
        }
        
    } else {
        const numberFormatted =
            Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: decimals })
            .format(Number(number))
            // Remove symbol
            .slice(3, 10000)

        if (numberFormatted.includes(',')) {
            return (
                numberFormatted.split(',')[0] + ',' +
                numberFormatted.split(',')[1]?.slice(0, 2)
            )
        } else {
            return numberFormatted
        }
    }
}

const formatDecimalNumber = (number, style = 'long') => {
    if (style === 'long') {
        return Intl.NumberFormat('pt-BR').format(Number(number))
    } else if (style === 'compact' && Number(number) >= 1000000) {
        return Intl.NumberFormat('pt-BR', { notation: 'compact', minimumFractionDigits: 0 }).format(Number(number))
    } else {
        return Intl.NumberFormat('pt-BR').format(Number(number))
    }
}

export { formatCurrencyNumber, formatDecimalNumber };