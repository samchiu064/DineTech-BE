import { Router } from 'express'
import {
  getToppings,
  createTopping,
  updateTopping,
  deleteTopping,
  deleteAllToppings,
} from '../controllers/ToppingController.js'
import { handleRouteError } from '../services/index.js'

const router = Router()

router.get('/', handleRouteError(getToppings))
router.post('', handleRouteError(createTopping))
router.put('/:id', handleRouteError(updateTopping))
router.delete('/:id', handleRouteError(deleteTopping))
router.delete('', handleRouteError(deleteAllToppings))

export default router
