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

export const metadata = {
  title: "Rakshak Cam — AI security that stops intruders before they enter",
  description:
    "Rakshak Cam is an AI security camera by AllTimeAI. It detects intruders, sounds a warning on the spot, and alerts your phone — while a traditional camera is still just recording.",
  openGraph: {
    title: "Rakshak Cam — AI security that acts",
    description: "On-device AI that detects, warns and alerts in under two seconds.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#05070d",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
