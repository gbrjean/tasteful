
import Header from "@components/Header"
import { AuthProvider } from "@context/AuthContext"

import "@styles/global.scss"

export const metadata = {
  title: 'Tasteful',
  description: 'Tasteful app',
  referrer: 'no-referrer',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header />
          <main className="app container">
              {children}
          </main>
        </AuthProvider>

      </body>
    </html>
  )
}
