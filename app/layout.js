import { Analytics } from "@vercel/analytics/react"
import localFont from "next/font/local";
import NavbarComponent from "@/components/header/NavbarComponent";
import "./globals.css";

const anconeDisplay = localFont({
  src: "./fonts/AnconeDisplay.ttf",
  variable: "--font-ancone-display",
  weight: "100 900",
});
const anconeText = localFont({
  src: "./fonts/ancone.ttf",
  variable: "--font-ancone-regular",
  weight: "100 900",
});
export const metadata = {
  title: "anco one",
  description: "las verdades ocultas tras pantallas bien pulidas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX">
      <body
        className={`${anconeDisplay.variable} ${anconeText.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
