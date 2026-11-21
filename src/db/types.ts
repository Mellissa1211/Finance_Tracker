export type TxType = 'expense' | 'income' | 'transfer'

export interface Account {
  id?: number
  name: string
  startingBalance: number // cents
  color: string
}

export interface Category {
  id?: number
  name: string
  kind: 'expense' | 'income'
  icon: string // lucide icon name
  color: string
}

export interface Transaction {
  id?: number
  type: TxType
  amount: number // cents, always positive
  date: string // 'YYYY-MM-DD'
  note: string
  accountId: number
  categoryId?: number // not used for transfers
  toAccountId?: number // only for transfers
  createdAt: number
}

export interface Budget {
  id?: number
  categoryId: number | null // null = overall monthly budget
  amount: number // cents
  period: 'weekly' | 'monthly'
}