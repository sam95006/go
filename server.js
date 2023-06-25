var cors = require('cors')
const express = require('express')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/sam', (req, res) => {
    res.send('Hell')
})

app.get('/login', (req, res) => {
    res.send('login')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})