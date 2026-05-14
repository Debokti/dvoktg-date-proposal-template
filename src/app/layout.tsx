import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "A Question for You",
  description: "A digital proposal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} h-full antialiased`}>
      <body className="min-h-screen overflow-y-auto font-serif">
        <main className="min-h-screen flex items-center justify-center p-4 py-10">
          {children}
        </main>
        <footer className="w-full text-center py-4 text-[#8b7568] text-sm mt-auto opacity-80 pb-6">
          made with love by dvoktg using Next.js 💖
        </footer>
      </body>
    </html>
  );
}
