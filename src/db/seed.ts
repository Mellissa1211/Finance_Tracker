import { db } from './database'

export async function seedIfEmpty() {
  if ((await db.accounts.count()) > 0) return

  await db.accounts.bulkAdd([
    { name: 'Cash', startingBalance: 0, color: '#60a5fa' },
    { name: 'Checking Account', startingBalance: 0, color: '#34d399' },
    { name: 'Savings Account', startingBalance: 0, color: '#fbbf24' },
  ])

  await db.categories.bulkAdd([
    { name: 'Food', kind: 'expense', icon: 'Utensils', color: '#fb923c' },
    { name: 'Restaurants', kind: 'expense', icon: 'UtensilsCrossed', color: '#f87171' },
    { name: 'Coffee', kind: 'expense', icon: 'Coffee', color: '#a16207' },
    { name: 'Transport', kind: 'expense', icon: 'Bus', color: '#38bdf8' },
    { name: 'Fuel', kind: 'expense', icon: 'Fuel', color: '#facc15' },
    { name: 'Housing', kind: 'expense', icon: 'Home', color: '#4ade80' },
    { name: 'Shopping', kind: 'expense', icon: 'ShoppingBag', color: '#f472b6' },
    { name: 'Health', kind: 'expense', icon: 'HeartPulse', color: '#fb7185' },
    { name: 'Other', kind: 'expense', icon: 'MoreHorizontal', color: '#94a3b8' },
    { name: 'Salary', kind: 'income', icon: 'Wallet', color: '#34d399' },
    { name: 'Other income', kind: 'income', icon: 'PlusCircle', color: '#a3e635' },
  ])
}