import moment from 'moment'
import 'moment-timezone'

const getDateTime = () =>
  moment().tz('Asia/Taipei').format('YYYY-MM-DD HH:mm:ss')

class AppError extends Error {
  statusCode: number
  isOperational: boolean

  constructor(httpStatus: number, message: string) {
    super(message)
    this.statusCode = httpStatus
    this.isOperational = true

    // This line is needed to correctly set up the prototype chain in TypeScript.
    Object.setPrototypeOf(this, AppError.prototype)
  }
}

export { getDateTime, AppError }
