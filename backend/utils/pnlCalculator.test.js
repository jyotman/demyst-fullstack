const pnlCalcualtor = require('./pnlCalculator')

test('calculatePnl12m should return last 12 months pnl', () => {
    const balanceSheet = [
        {
            "year": 2023,
            "month": 2,
            "profitOrLoss": -50,
            "assetsValue": 1234
        },
        {
            "year": 2023,
            "month": 1,
            "profitOrLoss": 200,
            "assetsValue": 1234
        },
        {
            "year": 2022,
            "month": 10,
            "profitOrLoss": 100,
            "assetsValue": 1234
        }
    ]
    expect(pnlCalcualtor.calculatePnl12m(balanceSheet)).toBe(250)
})

test('calculatePnl12m should return 0 if no data for last 12 months', () => {
    const balanceSheet = [
        {
            "year": 2022,
            "month": 2,
            "profitOrLoss": -50,
            "assetsValue": 1234
        },
        {
            "year": 2022,
            "month": 1,
            "profitOrLoss": 200,
            "assetsValue": 1234
        },
        {
            "year": 2022,
            "month": 0,
            "profitOrLoss": 100,
            "assetsValue": 1234
        }
    ]
    expect(pnlCalcualtor.calculatePnl12m(balanceSheet)).toBe(0)
})