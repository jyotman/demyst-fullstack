import React from 'react'
import './LoanReview.css'
import { BE_API_URL } from '../../config'
import axios from 'axios'

const LoanReview = ({ loanData }) => {
    const handleSubmit = async() => {
        const result = await axios.post(`${BE_API_URL}/api/v1/loan`, loanData)
        if(result.data.loanApproved === true) {
            alert('Congratulations! Your loan is approved')
        } else {
            alert('Sorry your loan was denied')
        }
    }

    return (
        <div className="loan-review">
            <h2>Review Loan Request</h2>
            <div className="loan-review-item">
                <strong>Business Name:</strong> {loanData.businessName}
            </div>
            <div className="loan-review-item">
                <strong>Year Established:</strong> {loanData.businessEstablishmentYear}
            </div>
            <div className="loan-review-item">
                <strong>Loan Amount:</strong> {loanData.loanAmount}
            </div>
            <div className="loan-review-item">
                <strong>Account Provider:</strong> {loanData.account}
            </div>
            <div className="loan-review-item">
                <strong>Balance Sheet:</strong>
                <div className="balance-sheet">
                    <table>
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Month</th>
                                <th>Profit/Loss</th>
                                <th>Assets Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loanData.balanceSheet.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.year}</td>
                                    <td>{item.month}</td>
                                    <td>{item.profitOrLoss}</td>
                                    <td>{item.assetsValue}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <button type="submit" className="form-button" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default LoanReview
