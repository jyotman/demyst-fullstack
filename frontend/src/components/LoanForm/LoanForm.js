import React, { useState } from 'react'
import './LoanForm.css';
import { ACCOUNTING_PROVIDERS, BE_API_URL } from '../../config'
import axios from 'axios'

const LoanForm = ({ setLoanFormResult }) => {
  const [formValues, setFormValues] = useState({
    businessName: '',
    businessEstablishmentYear: '',
    loanAmount: '',
    account: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }))
  }

  const handleSubmit = async(event) => {
    event.preventDefault()
    const response = await axios.get(`${BE_API_URL}/api/v1/balance-sheet`, {params: formValues})
    setLoanFormResult({...response.data, loanAmount: formValues.loanAmount})
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="businessName" className="form-label">Business Name:</label>
          <input
            id="businessName"
            name="businessName"
            className="form-input"
            value={formValues.businessName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="businessEstablishmentYear" className="form-label">Year Established:</label>
          <input
            id="businessEstablishmentYear"
            name="businessEstablishmentYear"
            type="number"
            className="form-input"
            value={formValues.businessEstablishmentYear}
            onChange={handleChange}
            min="1800"
            max={new Date().getFullYear()}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="loanAmount" className="form-label">Loan Amount:</label>
          <input
            id="loanAmount"
            name="loanAmount"
            type="number"
            className="form-input"
            value={formValues.loanAmount}
            onChange={handleChange}
            min="1"
            max="999999999"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="account" className="form-label">Account Provider:</label>
          <select
            id="account"
            name="account"
            className="form-select"
            value={formValues.account}
            onChange={handleChange}
            required>
            <option value="">Select an account</option>
            {Object.keys(ACCOUNTING_PROVIDERS).map((accountProvider) => (
              <option key={accountProvider} value={ACCOUNTING_PROVIDERS[accountProvider]}>
                {accountProvider}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="form-button">Request Balance Sheet</button>
      </form>
    </div>
  )
}

export default LoanForm