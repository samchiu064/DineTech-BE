import { Response } from 'express'
import { NextFunction } from 'express'
import { AppError } from '../utils/index.js'

const createAppError = (
  httpStatus: number,
  errMessage: string,
  next: NextFunction
) => {
  return next(new AppError(httpStatus, errMessage))
}

const handleErrorDev = (res: Response, err: AppError) => {
  res.status(err.statusCode || res.statusCode || 500).send({
    status: 'error',
    message: err.message,
  })
}

const handleErrorProd = (res: Response, err: AppError) => {
  if (err.isOperational) {
    res.status(err.statusCode).send({
      message: err.message,
    })
  } else {
    res.status(500).send({
      status: 'error',
      message: '系統錯誤，請恰系統管理員',
    })
  }
}

export { createAppError, handleErrorDev, handleErrorProd }
