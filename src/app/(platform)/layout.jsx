import { Providers } from '@/app/providers'
import GridLayout from './UI/Atoms/GridLayout'

export const metadata = {
  title: 'Questrade Empréstimos',
  description: 'Empréstimos rápido, fácil e transparente é na Questrade Empréstimos!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <GridLayout>
            {children}
          </GridLayout>
        </Providers>
      </body>
    </html>
  )
}
