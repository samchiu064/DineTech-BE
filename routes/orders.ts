import { Router } from 'express'
import {
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
  deleteAllOrders,
} from '../controllers/OrderController.js'
import { handleRouteError } from '../services/index.js'

const router = Router()

router.get('/', handleRouteError(getOrders))
router.get('/:id', handleRouteError(getOrderById))
router.post('', handleRouteError(createOrder))
router.put('/:id', handleRouteError(updateOrder))
router.delete('/:id', handleRouteError(deleteOrder))
router.delete('', handleRouteError(deleteAllOrders))

export default router
