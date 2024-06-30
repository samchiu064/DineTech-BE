import express, { Express, Request, Response, NextFunction } from 'express'
import serverless from 'serverless-http'
import path from 'path'
import cors from 'cors'
import './connections'
import feedbackRouter from './routes/feedbacks'
import guestRouter from './routes/guests'
import menuRouter from './routes/menus'
import toppingRouter from './routes/toppings'
import orderRouter from './routes/orders'
import { handleErrorDev, handleErrorProd } from './services'
import { AppError } from './utils'

const port = process.env.PORT || 3000
const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())

app.use('/feedbacks', feedbackRouter)
app.use('/guests', guestRouter)
app.use('/menus', menuRouter)
app.use('/toppings', toppingRouter)
app.use('/orders', orderRouter)

// Express Application-level middleware
app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
  if (process.env.NODE_ENV === 'dev') return handleErrorDev(res, err)
  if (process.env.NODE_ENV === 'prod') return handleErrorProd(res, err)
  res.status(err.statusCode || res.statusCode || 500).send({
    errors: err.message,
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

if (process.env.NODE_ENV === 'dev') {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
}

export default app

// AWS Lambda
export const handler = serverless(app)
