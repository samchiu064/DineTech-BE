import { Request, Response } from 'express'
import { handleSuccess } from '../services/index.js'
import Menu from '../models/Menu.js'

export const getMenus = async (req: Request, res: Response) => {
  let menus
  if (req.query.category) {
    menus = await Menu.find({ category: req.query.category })
  } else {
    menus = await Menu.find()
  }

  handleSuccess(req, res, menus)
}

export const getMenuById = async (req: Request, res: Response) => {
  const { id } = req.params
  const menu = await Menu.findById(id)
  handleSuccess(req, res, menu)
}

export const createMenu = async (req: Request, res: Response) => {
  const { name, category, price } = req.body
  const newMenu = new Menu({ name, category, price })
  await newMenu.save()
  handleSuccess(req, res, newMenu, 201)
}

export const updateMenu = async (req: Request, res: Response) => {
  const { id } = req.params
  const { name, category, price } = req.body
  const updatedMenu = await Menu.findByIdAndUpdate(
    id,
    { name, category, price },
    {
      new: true,
    }
  )
  handleSuccess(req, res, updatedMenu)
}

export const deleteMenu = async (req: Request, res: Response) => {
  const { id } = req.params
  await Menu.findByIdAndDelete(id)
  handleSuccess(req, res, { message: '已清除該筆資料' })
}

export const deleteAllMenus = async (req: Request, res: Response) => {
  await Menu.deleteMany()
  handleSuccess(req, res, { message: '已成功清除所有資料' })
}
