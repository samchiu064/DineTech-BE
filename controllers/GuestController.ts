import { Request, Response, NextFunction } from 'express'
import { handleSuccess, createAppError } from '../services'
import Guest from '../models/Guest'

export const getGuests = async (req: Request, res: Response) => {
  let guests
  if (req.query.id) {
    guests = await Guest.findById(req.query.id)
  } else {
    guests = await Guest.find()
  }
  handleSuccess(req, res, guests)
}

export const createGuest = async (req: Request, res: Response) => {
  const { table, guest } = req.body
  const newGuest = new Guest({ table, guest })
  await newGuest.save()
  handleSuccess(
    req,
    res,
    {
      id: newGuest._id,
    },
    201
  )
}

export const updateGuest = async (req: Request, res: Response) => {
  const { id } = req.params
  const { table, guest } = req.body
  const updatedGuest = await Guest.findByIdAndUpdate(
    id,
    { table, guest },
    {
      new: true,
    }
  )
  handleSuccess(req, res, updatedGuest)
}

export const deleteGuest = async (req: Request, res: Response) => {
  const { id } = req.params
  await Guest.findByIdAndDelete(id)
  handleSuccess(req, res, { message: '已清除該筆資料' })
}

export const deleteAllGuests = async (req: Request, res: Response) => {
  await Guest.deleteMany()
  handleSuccess(req, res, { message: '已成功清除所有資料' })
}
