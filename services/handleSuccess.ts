import { Request, Response } from 'express'

const handleSuccess = (
  req: Request,
  res: Response,
  data: any,
  httpStatus = 200
) => {
  res.status(httpStatus).send({
    data,
  })
}

export { handleSuccess }
