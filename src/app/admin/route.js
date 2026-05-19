import { NextResponse } from 'next/server'

export function GET(request) {
  return NextResponse.rewrite(new URL('/admin/index.html', request.url))
}
