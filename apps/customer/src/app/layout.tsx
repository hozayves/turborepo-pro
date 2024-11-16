import './globals.css'
import '@repo/ui/styles.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/(navigation)/header'
import Footer from '../components/(footer)/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Chafetz',
    description: 'Chafetz',
}

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <main>
                    <Header />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    )
}
