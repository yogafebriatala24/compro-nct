import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nusa Cita Teknologi | Software House",
  description:
    "Nusa Cita Teknologi adalah Perusahaan Software House terbaik di Indonesia",
  icons: {
    icon: "/icon/favicon.ico",
    apple: "/icon/fav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white`}>{children}</body>
    </html>
  );
}
