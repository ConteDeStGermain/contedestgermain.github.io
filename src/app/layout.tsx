import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TimeFix',
  description: 'Your fix, in time!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer className="bg-[#494949] text-white p-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">TimeFix</h2>
              <p>75 Laurier Ave E, Ottawa, Canada</p>
            </div>
            <div className="text-center mb-4 md:mb-0">
              <h3 className="font-semibold">Contactez-nous</h3>
              <p>Téléphone: (123) 456-7890</p>
            </div>
            <div>
              <h3 className="font-semibold">Heures d'ouverture</h3>
              <p>Lun - Ven: 9:00 - 17:00</p>
              <p>Sam - Dim: Closed</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
