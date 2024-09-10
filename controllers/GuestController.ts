import { Request, Response } from 'express'
import { handleSuccess } from '../services/index.js'
import Guest from '../models/Guest.js'

export const getGuests = async (req: Request, res: Response) => {
  const guests = await Guest.find()
  handleSuccess(req, res, guests)
}

export const createGuest = async (req: Request, res: Response) => {
  const { table, people } = req.body
  const newGuest = new Guest({ table, people })
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
  const { table, people } = req.body
  const updatedGuest = await Guest.findByIdAndUpdate(
    id,
    { table, people },
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
