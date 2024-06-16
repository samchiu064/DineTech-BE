import express, { Express, Request, Response, NextFunction } from 'express'
import path from 'path'
import cors from 'cors'
import './connections'
import feedbackRouter from './routes/feedback'
import guestRouter from './routes/guest'
import menuRouter from './routes/menu'
import orderRouter from './routes/order'
import { handleErrorDev, handleErrorProd } from './services'
import { AppError } from './utils'

const port = process.env.port || 3000
const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())

app.use('/feedback', feedbackRouter)
app.use('/guest', guestRouter)
app.use('/menu', menuRouter)
app.use('/order', orderRouter)

// Express Application-level middleware
app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
  if (process.env.NODE_ENV === 'dev') return handleErrorDev(res, err)
  if (process.env.NODE_ENV === 'prod') return handleErrorProd(res, err)
  res.status(err.statusCode || res.statusCode || 500).send({
    status: 'error',
    message: err.message,
  })
})

// Node.js Error: uncaughtException
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception: ', err)
  // 1 means exit with failure
  process.exit(1)
})

// Node.js Error: unhandledRejection
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled rejection: ', promise, 'Reason: ', reason)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

export default app
