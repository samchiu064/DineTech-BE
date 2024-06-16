import { Request, Response, NextFunction } from 'express'

const handleRouteError = (
  callback: (req: Request, res: Response, next: NextFunction) => Promise<void>
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    callback(req, res, next).catch((err: unknown) => next(err))
  }
}

export { handleRouteError }
