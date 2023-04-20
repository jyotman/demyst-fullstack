const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const loanRoutes = require('./routes/loan')

const app = express()
app.use(cors())
app.use(express.json())
// Change this to more appropriate logging mode as 'dev' mode prints coloured logs which should not be used in prod as it will print colors as characters
app.use(morgan('dev'))

app.get('/', (req, res) => res.send('Server is running!'))

// Routing
app.use('/api', loanRoutes)

// Start the server
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Backend Server running on port ${port}`)
})
