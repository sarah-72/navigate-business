import { NextResponse } from 'next/server'
import { getNavigationData } from '@/lib/sanity'

export async function GET() {
  try {
    const navigation = await getNavigationData()

    if (!navigation) {
      return NextResponse.json({ menuItems: [] })
    }

    return NextResponse.json(navigation)
  } catch (error) {
    console.error('Error fetching navigation:', error)
    return NextResponse.json({ error: 'Failed to fetch navigation' }, { status: 500 })
  }
}