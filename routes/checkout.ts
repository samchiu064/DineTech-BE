import { Router } from 'express'
import { generateTradeInfo, handleTradeInfo } from '../controllers/CheckoutController.js'
import { handleRouteError } from '../services/index.js'

const router = Router()

router.post('/', handleRouteError(generateTradeInfo))
router.post('/notify', handleRouteError(handleTradeInfo))

export default router
