import Header from "@components/Header"
import { AuthProvider } from "@context/AuthContext"

import "@styles/global.scss"

export const metadata = {
  title: 'Tasteful',
  description: 'Tasteful app',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="app container">
          <AuthProvider>
            {children}
          </AuthProvider>
        </main>

      </body>
    </html>
  )
}
