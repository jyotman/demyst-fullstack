const config = require('../../config')
const xero = require('./providers/xero')
const myob = require('./providers/myob')

exports.fetchBalanceSheetForBusiness = async (businessName, yearEstablished, accountProvider) => {
    switch (accountProvider) {
        case config.ACCOUNTING_PROVIDERS.XERO:
            return xero.fetchBalanceSheet(businessName, accountProvider)
        case config.ACCOUNTING_PROVIDERS.MYOB:
            return myob.fetchBalanceSheet(businessName, accountProvider)
        default:
            throw new Error(`Unsupported account provider ${accountProvider} for businessName ${businessName}`)
    }
}