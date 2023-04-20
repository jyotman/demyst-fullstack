const express = require('express')
const router = express.Router()
const loanController = require('../controllers/loan')

router.get('/v1/balance-sheet', loanController.getBalanceSheet)
router.post('/v1/loan', loanController.createLoan)

module.exports = router