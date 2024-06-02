import express, { Express, Request, Response, NextFunction } from 'express'
import path from 'path'
import cors from 'cors'
import './connections'

const port = process.env.port || 3000
const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  res.type('text/plain')
  res.status(404)
  res.send('404 - Not Found')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

module.exports = app
