import { Manrope, Roboto } from 'next/font/google'

export const manrope = Manrope({
    subsets: ["latin"],
    display: 'swap',
    weight: ['400', '500', '600', '700', '800'],
    variable: '--font-manrope'
})

export const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-roboto',
    display: 'swap'
})