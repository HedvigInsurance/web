const express = require('express')

const PORT = process.env.NODE_ENV === 'production' ? 80 : 3001

const app = express()
const router = express.Router()

router.use('^/$', () => {})

app.use(router)
app.listen(PORT, error => {
  if (error) {
    return console.error('ERROR:', error)
  }

  console.log(`Listening on port ${PORT}...`)
})
