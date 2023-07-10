import { Providers } from '@/app/providers'

export const metadata = {
  title: 'Questrade Empréstimos',
  description: 'Empréstimos rápido, fácil e transparente é na Questrade Empréstimos!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
