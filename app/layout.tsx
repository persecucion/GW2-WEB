import './globals.css'; // Importa los estilos globales de Tailwind
import './styles.css';
import './animations.css';
import { Inter, Montserrat, Poppins, Fira_Code } from 'next/font/google'
import Script from 'next/script'
import { Metadata } from 'next';
import RedirectHandler from '@/app/components/RedirectHandler';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fira',
})

const siteConfig = {
  name: 'GW2 Community',
  description: 'La mejor comunidad hispanohablante de Discord. Eventos exclusivos, sorteos, guías y mucho más.',
  url: 'https://gatitos2.vercel.app/',
  ogImage: 'https://www.gw2community.com/og-image.jpg',
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Guild Wars 2',
    'GW2',
    'Community',
    'Gaming',
    'MMO',
    'MMORPG',
    'Discord',
    'Eventos',
    'Comunidad hispanohablante',
    'Sorteos',
    'Guías'
  ],
  authors: [
    {
      name: 'GW2 Team',
      url: siteConfig.url,
    },
  ],
  creator: 'GW2 Team',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#4f46e5' },
    { media: '(prefers-color-scheme: dark)', color: '#1e1b4b' },
  ],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: '@gw2community',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport = {
  colorScheme: 'dark',
  themeColor: '#0A0C1B',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${montserrat.variable} ${poppins.variable} ${firaCode.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-sans bg-dark-900 text-white">
        <RedirectHandler />
        <main className="flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  )
}
