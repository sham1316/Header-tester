import express from 'express'

const app = express()

app.get('/', (req, res) => {
	res.end(JSON.stringify({ headers: req.headers, remoteAddress: req.connection.remoteAddress }))
})

app.listen(5002)