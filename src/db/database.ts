import Dexie, { type Table } from 'dexie'
import type { Account, Budget, Category, Transaction } from './types'

class FinanceDB extends Dexie {
  accounts!: Table<Account, number>
  categories!: Table<Category, number>
  transactions!: Table<Transaction, number>
  budgets!: Table<Budget, number>

  constructor() {
    super('finance-tracker')
    this.version(1).stores({
      accounts: '++id, name',
      categories: '++id, kind, name',
      transactions: '++id, date, type, accountId, categoryId',
      budgets: '++id, categoryId',
    })
  }
}

export const db = new FinanceDB()