import { Request, Response } from 'express'
import { handleSuccess } from '../services'
import Feedback from '../models/Feedback'

export const getFeedbacks = async (req: Request, res: Response) => {
  const feedbacks = await Feedback.find()
  handleSuccess(req, res, feedbacks)
}

export const createFeedback = async (req: Request, res: Response) => {
  const feedback = req.body
  const newFeedback = new Feedback(feedback)
  await newFeedback.save()
  handleSuccess(req, res, newFeedback, 201)
}

export const updateFeedback = async (req: Request, res: Response) => {
  const { id } = req.params
  const feedback = req.body
  const updatedFeedback = await Feedback.findByIdAndUpdate(id, feedback, {
    new: true,
  })
  handleSuccess(req, res, updatedFeedback)
}

export const deleteFeedback = async (req: Request, res: Response) => {
  const { id } = req.params
  await Feedback.findByIdAndDelete(id)
  handleSuccess(req, res, { message: '已清除該筆資料' })
}

export const deleteAllFeedbacks = async (req: Request, res: Response) => {
  await Feedback.deleteMany()
  handleSuccess(req, res, { message: '已成功清除所有資料' })
}
