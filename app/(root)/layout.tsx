import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      {/* Navbar */}
      <nav className="w-full px-20 md:px-10 py-4 bg-dark-800 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Logo" width={38} height={32} />
            <h2 className="text-xl font-bold text-primary-100">PrepareIT</h2>
          </Link>
        </div>
      </nav>

      {/* Page Content */}
      <main className="w-full px-4 md:px-10 mt-6">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  )
}

export default RootLayout
