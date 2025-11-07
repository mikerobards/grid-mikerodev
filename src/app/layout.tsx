import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Grid of MikeroDev",
  description: "Portfolio and blog by mikerodev.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}> 
        <div className="min-h-dvh flex flex-col">
          <header className="sticky top-0 z-50 border-b border-cyan-500/30 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40">
            <nav className="mx-auto w-full max-w-6xl px-4 py-3 flex items-center justify-between">
              <a href="/" className="font-semibold tracking-wide text-cyan-300 hover:text-cyan-200 transition-colors">The Grid of MikeroDev</a>
              <ul className="flex items-center gap-6 text-sm">
                <li><a className="nav-link" href="/">Home</a></li>
                <li><a className="nav-link" href="/projects">Projects</a></li>
                <li><a className="nav-link" href="/blog">Blog</a></li>
                <li><a className="nav-link" href="/about">About</a></li>
                <li><a className="nav-link" href="/resume">Resume</a></li>
                <li><a className="nav-link" href="/contact">Contact</a></li>
              </ul>
            </nav>
          </header>
          <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">
            {children}
          </main>
          <footer className="border-t border-cyan-500/20 py-6 text-center text-xs text-zinc-400">
            {new Date().getFullYear()} mikerodev
          </footer>
        </div>
      </body>
    </html>
  );
}
