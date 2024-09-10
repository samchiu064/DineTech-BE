import { Request, Response } from 'express'
import { handleSuccess } from '../services/index.js'
import { createCipheriv, createHash, createDecipheriv } from 'node:crypto'

const {
  MerchantID = '',
  HASHKEY = '',
  HASHIV = '',
  Version = '',
  ReturnURL = '',
  NotifyURL = '',
} = process.env

export const generateTradeInfo = async (req: Request, res: Response) => {
  const { guestId, total } = req.body

  const TradeInfo = createQueryString({
    MerchantID,
    RespondType: 'JSON',
    TimeStamp: Math.round(new Date().getTime() / 1000),
    Version,
    LangType: 'zh-tw',
    MerchantOrderNo: guestId,
    Amt: total,
    ItemDesc: '餐點',
    TradeLimit: 300,
    ReturnURL,
    NotifyURL,
  })
  const TradeInfoAES = createAesEncrypt(TradeInfo, HASHKEY, HASHIV)
  const TradeSha = createSha256Encrypt(TradeInfoAES, HASHKEY)

  handleSuccess(req, res, {
    MerchantID,
    TradeInfo: TradeInfoAES,
    TradeSha,
    Version,
  })
}

export const handleTradeInfo = async (req: Request, res: Response) => {
  const { TradeInfo } = req.body
  const data = createAesDecrypt(TradeInfo, HASHKEY, HASHIV)

  // 暫時不處理解密後資料

  handleSuccess(req, res, 'success')
}

// 建立參數字串
function createQueryString(data: Record<string, unknown>) {
  const obj: Record<string, string> = {}

  for (const key in data) {
    const value = data[key]
    if (value !== undefined && value !== null) {
      obj[key] = value.toString()
    }
  }

  return new URLSearchParams(obj).toString()
}

// AES 加密
function createAesEncrypt(data: string, key: string, iv: string) {
  const cipher = createCipheriv('aes-256-cbc', key, iv)
  return cipher.update(data, 'utf8', 'hex') + cipher.final('hex')
}

// SHA256 加密
function createSha256Encrypt(data: string, key: string) {
  const hash = createHash('sha256')
  const text = `HashKey=${key}&${data}&HashIV=${HASHIV}`
  return hash.update(text).digest('hex').toUpperCase()
}

// AES 解密
function createAesDecrypt(data: string, key: string, iv: string) {
  const decipher = createDecipheriv('aes-256-cbc', key, iv)
  decipher.setAutoPadding(false)
  const text = decipher.update(data, 'hex', 'utf8') + decipher.final('utf8')
  const result = text.replace(/[\x00-\x20]+/g, '')
  return JSON.parse(result)
}
