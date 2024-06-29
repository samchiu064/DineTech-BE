import { Router } from 'express'
import {
  getFeedbacks,
  createFeedback,
  updateFeedback,
  deleteFeedback,
  deleteAllFeedbacks,
} from '../controllers/FeedbackController'
import { handleRouteError } from '../services'

const router = Router()

router.get('/', handleRouteError(getFeedbacks))
router.post('', handleRouteError(createFeedback))
router.put('/:id', handleRouteError(updateFeedback))
router.delete('/:id', handleRouteError(deleteFeedback))
router.delete('', handleRouteError(deleteAllFeedbacks))

export default router
