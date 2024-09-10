import { Router } from 'express'
import {
  getGuests,
  createGuest,
  updateGuest,
  deleteGuest,
  deleteAllGuests,
} from '../controllers/GuestController.js'
import { handleRouteError } from '../services/index.js'

const router = Router()

router.get('/', handleRouteError(getGuests))
router.post('', handleRouteError(createGuest))
router.put('/:id', handleRouteError(updateGuest))
router.delete('/:id', handleRouteError(deleteGuest))
router.delete('', handleRouteError(deleteAllGuests))

export default router
