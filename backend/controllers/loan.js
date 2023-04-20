const accountService = require('../services/account')
const decisionService = require('../services/decision')
const pnlCalculator = require('../utils/pnlCalculator')
const assetValueCalculator = require('../utils/assetValueCalculator')

exports.getBalanceSheet = async (req, res, next) => {
    try {
        const { businessName, businessEstablishmentYear, account } = req.query

        const balanceSheet = await accountService.fetchBalanceSheetForBusiness(businessName, businessEstablishmentYear, account)
        res.json({
            businessName,
            businessEstablishmentYear,
            account,
            balanceSheet
        })
    } catch (error) {
        next(error)
    }
}

exports.createLoan = async (req, res, next) => {
    try {
        const { businessName, businessEstablishmentYear, balanceSheet } = req.body

        if (balanceSheet !== undefined && balanceSheet.length === 0) {
            return res.status(400).json({error: 'Balance sheet is empty!'})
        }

        const pnl12m = pnlCalculator.calculatePnl12m(balanceSheet)
        const avgAssetValue12m = assetValueCalculator.calculateAvgAssetValue12m(balanceSheet)
        const preAssesment = findLoanPreAssementScore(pnl12m, avgAssetValue12m)
        const pnlPerYear = pnlCalculator.calculatePnlByYear(balanceSheet)
        const decision = await decisionService.isLoanFeasible(businessName, businessEstablishmentYear, pnlPerYear, preAssesment)

        res.json({ loanApproved: decision })
    } catch (error) {
        next(error)
    }
}

// This is business logic so I'm keeping it here and not in utils
function findLoanPreAssementScore(pnl12m, avgAssetValue12m, loanAmount) {
    if (avgAssetValue12m > loanAmount) {
        return 100
    } else if (pnl12m > 0) {
        return 60
    } else {
        return 20
    }
}