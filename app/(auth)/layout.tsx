import { AuthProvider } from "@context/AuthContext"

import "@styles/global.scss"
import "@styles/auth.scss"

export const metadata = {
  title: 'Tasteful Auth',
  description: 'Tasteful app',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <main className="app auth">
          <AuthProvider>
            {children}
          </AuthProvider>
        </main>
      </body>
    </html>
  )
}