import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '900'], style: ['normal'], variable: '--font-inter' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '900'], style: ['italic', 'normal'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: "Favour Idoko",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}