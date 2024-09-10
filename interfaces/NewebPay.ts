interface TradeInfo {
  MerchantID: string
  RespondType: string
  TimeStamp: string
  Version: string
  MerchantOrderNo: string
  Amt: string
  ItemDesc: string
  LangType?: string
  TradeLimit?: number
  ExpireDate?: string
  ReturnURL?: string
  NotifyURL?: string
  CustomerURL?: string
  ClientBackURL?: string
  Email?: string
  EmailModify?: number
  LoginType?: number
  OrderComment?: string
  CREDIT?: number
  InstFlag?: number
  UNIONPAY?: number
  WEBATM?: number
  VACC?: number
  CVS?: number
  BARCODE?: number
  CUSTOM?: number
  TokenTerm?: string
  PayerAccount?: string
  PaymentMethod?: string
  UnionPay?: number
}

export { TradeInfo }