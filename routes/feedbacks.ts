import { Router } from 'express'
import {
  getFeedbacks,
  createFeedback,
  updateFeedback,
  deleteFeedback,
  deleteAllFeedbacks,
} from '../controllers/FeedbackController.js'
import { handleRouteError } from '../services/index.js'

const router = Router()

router.get('/', handleRouteError(getFeedbacks))
router.post('', handleRouteError(createFeedback))
router.put('/:id', handleRouteError(updateFeedback))
router.delete('/:id', handleRouteError(deleteFeedback))
router.delete('', handleRouteError(deleteAllFeedbacks))

export default router
