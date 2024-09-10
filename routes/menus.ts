import { Router } from 'express'
import {
  getMenus,
  getMenuById,
  createMenu,
  updateMenu,
  deleteMenu,
  deleteAllMenus,
} from '../controllers/MenuController.js'
import { handleRouteError } from '../services/index.js'

const router = Router()

router.get('/', handleRouteError(getMenus))
router.get('/:id', handleRouteError(getMenuById))
router.post('', handleRouteError(createMenu))
router.put('/:id', handleRouteError(updateMenu))
router.delete('/:id', handleRouteError(deleteMenu))
router.delete('', handleRouteError(deleteAllMenus))

export default router
