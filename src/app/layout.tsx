
import Link from 'next/link'
import '../styles/globals.css'

export const metadata = {
  title: '나무 아래, 바다 너머',
  description: '글, 음악, 감성의 공간',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-neutral-50 text-gray-800 font-sans">
	    <header className="p-4 border-b border-gray-300 flex gap-4 text-lg">
	      <Link href="/">Home</Link>
	      <Link href="/about">About</Link>
	      <Link href="/portfolio">Portfolio</Link>
	      <Link href="/blog">Blog</Link>
	    </header>
	    <main className="p-6">{children}</main>
	    <footer className="p-4 border-t border-gray-300 text-sm text-center text-gray-500">
	      © 2025 greenwood
	    </footer>
	  </body>

    </html>
  )
}

