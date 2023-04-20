const common = require('./common')

module.exports.calculatePnlByYear = (balanceSheet) => {
    const groupByYear = {}
    for (bs of balanceSheet) {
        if (bs.year in groupByYear) {
            groupByYear[bs.year].push(bs)
        } else {
            groupByYear[bs.year] = [bs]
        }
    }
    for (year in groupByYear) {
        groupByYear[year] = groupByYear[year].reduceRight((sum, bs) => sum += bs.profitOrLoss)
    }
    return groupByYear
}

module.exports.calculatePnl12m = (balanceSheet) => {
    const date = new Date()
    const currentMonth = date.getMonth()
    const currentYear = date.getFullYear()
    return balanceSheet
        .filter(bs => common.isDateWithinPast12m(bs.month, bs.year, currentMonth, currentYear))
        .reduceRight((sum, bs) => sum += bs.profitOrLoss, 0)
}