

export const metadata = {
  title: 'Tasteful',
  description: 'Tasteful app',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>

        <main className="app">
          {children}
        </main>

      </body>
    </html>
  )
}
