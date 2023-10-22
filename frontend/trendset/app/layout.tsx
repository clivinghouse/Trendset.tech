import { AuthContextProvider } from '@/app/_components/AuthProvider'
import QueryProvider from './_components/QueryClientProvider'
import type { Metadata } from 'next'
import './global.css'

export const metadata: Metadata = {
  title: 'TrendSet',
  description: 'The bestest app in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='m-8'>
        <QueryProvider>
          <AuthContextProvider>
            {children}
          </AuthContextProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
