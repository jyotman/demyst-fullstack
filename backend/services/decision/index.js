module.exports.isLoanFeasible = async(businessName, businessEstablishmentYear, pnlPerYear, preAssessment) => {
    // Return random true or false
    // In Prod we'd be calling an actual service to get this result hence an aync method
    return Promise.resolve(Math.random() > 0.5)
}