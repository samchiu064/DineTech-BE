import { Router } from 'express'
import {
  getGuests,
  createGuest,
  updateGuest,
  deleteGuest,
  deleteAllGuests,
} from '../controllers/GuestController'
import { handleRouteError } from '../services'

const router = Router()

router.get('/:id?', handleRouteError(getGuests))
router.post('/', handleRouteError(createGuest))
router.put('/:id', handleRouteError(updateGuest))
router.delete('/:id', handleRouteError(deleteGuest))
router.delete('/', handleRouteError(deleteAllGuests))

export default router
