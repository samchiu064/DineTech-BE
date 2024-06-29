import { Router } from 'express'
import {
  getToppings,
  createTopping,
  updateTopping,
  deleteTopping,
  deleteAllToppings,
} from '../controllers/ToppingController'
import { handleRouteError } from '../services'

const router = Router()

router.get('/', handleRouteError(getToppings))
router.post('', handleRouteError(createTopping))
router.put('/:id', handleRouteError(updateTopping))
router.delete('/:id', handleRouteError(deleteTopping))
router.delete('', handleRouteError(deleteAllToppings))

export default router
