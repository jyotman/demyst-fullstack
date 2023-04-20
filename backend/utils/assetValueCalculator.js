const common = require('./common')

module.exports.calculateAvgAssetValue12m = (balanceSheet) => {
    const date = new Date()
    const currentMonth = date.getMonth()
    const currentYear = date.getFullYear()
    const balanceSheetLast12m = balanceSheet
        .filter(bs => common.isDateWithinPast12m(bs.month, bs.year, currentMonth, currentYear))
    return balanceSheetLast12m.reduceRight((sum, bs) => sum += bs.assetsValue, 0) / balanceSheetLast12m.length
}