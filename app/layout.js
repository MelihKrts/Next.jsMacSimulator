import { Inter } from "next/font/google";
import "./globals.css";



const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "macOS in Next",
  description: "macOS Simulator by created Next.js",
  keywords: ["macOS", "Apple", "Simulator", "Next.js", "React", "Keywords"],
  authors: {
    name: "Melih Karatas"
  },
  icons: {
    icon: "/favicon.ico",
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
