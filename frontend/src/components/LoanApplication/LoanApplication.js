import React, { useState } from 'react'
import LoanForm from '../LoanForm/LoanForm'
import LoanReview from '../LoanReview/LoanReview'

const LoanApplication = () => {
    const [loanFormResult, setLoanFormResult] = useState({
        businessName: '',
        businessEstablishmentYear: '',
        loanAmount: '',
        account: '',
        balanceSheet: []
    })

    return (
        <div>
            <h1>Demyst Loan Application</h1>
            {!loanFormResult.businessName ? (
                <LoanForm setLoanFormResult={setLoanFormResult} />
            ) : (
                <LoanReview loanData={loanFormResult} />
            )}
        </div>
    )
}

export default LoanApplication