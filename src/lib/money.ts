import { evaluate } from 'mathjs'

const CURRENCY = 'USD' // change to your currency code, e.g. 'LKR' or 'EUR'

export const toCents = (amount: number) => Math.round(amount * 100)

export function formatMoney(cents: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: CURRENCY,
  }).format(cents / 100)
}

// Turns "12+3.5" into 1550 (cents). Returns null if invalid.
export function parseAmount(input: string): number | null {
  const text = input.trim()
  if (!text || !/^[\d+\-*/().\s]+$/.test(text)) return null
  try {
    const result = evaluate(text)
    if (typeof result !== 'number' || !isFinite(result) || result < 0) return null
    return toCents(result)
  } catch {
    return null
  }
}