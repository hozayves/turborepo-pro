import './globals.css'
import '@repo/ui/styles.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/(navigation)/Header'
import Footer from '../components/(footer)/Footer'
import Subscription from '../components/subscription/subscription'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Chafetz',
    description: 'Chafetz',
}

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <main className='select-none outline-none 2xl:w-[1400px] 2xl:mx-auto'>
                    <Header />
                    <div className='bg-background text-gray-900 min-h-screen max-h-auto'>
                        {children}
                    </div>
                    <Subscription />
                    <Footer />
                </main>
            </body>
        </html>
    )
}
