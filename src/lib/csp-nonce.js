import { headers } from 'next/headers'

/**
 * Get the nonce from request headers in Server Components
 * The nonce is generated per-request by middleware
 */
export async function getNonce() {
  const headersList = await headers()
  return headersList.get('X-Nonce') || ''
}

export function useNonce() {
  if (typeof window === 'undefined') {
    return ''
  }
  return (window?.__NONCE__) || ''
}
