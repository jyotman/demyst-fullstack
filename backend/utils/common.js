module.exports.isDateWithinPast12m = (month, year, currentMonth, currentYear) => {
    if (year === currentYear || (year === (currentYear - 1) && month >= currentMonth)) {
        return true
    }
    return false
}