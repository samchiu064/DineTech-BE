import { Router } from 'express'
import {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
  deleteAllOrders,
} from '../controllers/OrderController'
import { handleRouteError } from '../services'

const router = Router()

router.get('/:id?', handleRouteError(getOrders))
router.post('/', handleRouteError(createOrder))
router.put('/:id', handleRouteError(updateOrder))
router.delete('/:id', handleRouteError(deleteOrder))
router.delete('/', handleRouteError(deleteAllOrders))

export default router
