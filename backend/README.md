# Demyst Loan App BE

## Run the app (Without docker)

In the project directory, you can run:
1. `npm install`
2. `npm start`

## Run the app (With docker) 
1. `docker build -t demyst-backend .`
2. `docker run -p 5000:5000 -d demyst-backend`

The server is started at [http://localhost:5000](http://localhost:5000)

## APIs
`1. GET /api/v1/balance-sheet?businessName&businessEstablishmentYear&account`

Response -
```json
{
    "businessName": "Jyot",
    "businessEstablishmentYear": "2020",
    "account": "xero",
    "balanceSheet": [
        {
            "year": 2020,
            "month": 12,
            "profitOrLoss": 250000,
            "assetsValue": 1234
        },
        {
            "year": 2020,
            "month": 11,
            "profitOrLoss": 1150,
            "assetsValue": 5789
        }
    ]
}
```
`2. POST /api/v1/load`

Request - 
```json
{
    "businessName": "Jyot Pvt Ltd",
    "businessEstablishmentYear": "2020",
    "loanAmount": "1000",
    "balanceSheet": [
        {
            "year": 2020,
            "month": 12,
            "profitOrLoss": 250000,
            "assetsValue": 1234
        },
        {
            "year": 2020,
            "month": 11,
            "profitOrLoss": 1150,
            "assetsValue": 5789
        }
    ]
}
```
Response - 
```json
{
    "loanApproved": true
}
```