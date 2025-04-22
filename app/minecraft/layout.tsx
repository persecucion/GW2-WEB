import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Minecraft',
  description: 'Servidor de Minecraft de la comunidad GW2 - Únete a nuestra experiencia de juego única',
}

export default function MinecraftLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
} 
