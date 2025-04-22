import { Space_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-space-mono",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Yuvika Kathaith",
  description: "Portfolio",
  icons: {
    icon: "/logo-blue-bg.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
