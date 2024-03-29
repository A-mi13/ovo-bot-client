import 'bootstrap/dist/css/bootstrap.css'

export const metadata = {
  title: 'Репутaция поцыков',
  description: 'Сделано от души',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-dark'>{children}</body>
    </html>
  )
}
