import { useLiveQuery } from 'dexie-react-hooks'
import { db } from './db/database'
import { formatMoney, parseAmount } from './lib/money'

export default function App() {
  const accounts = useLiveQuery(() => db.accounts.toArray())
  const categories = useLiveQuery(() => db.categories.toArray())

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <h1 className="text-3xl font-bold text-emerald-400 mb-4">Finance Tracker</h1>
      <p className="mb-2">Accounts: {accounts?.map((a) => a.name).join(', ')}</p>
      <p className="mb-2">Categories: {categories?.length}</p>
      <p>12+3.5 = {formatMoney(parseAmount('12+3.5') ?? 0)}</p>
    </div>
  )
}