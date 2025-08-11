import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/components/providers/ReduxProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vortex Ascent - Premium Fitness & Training",
  description: "Transform your fitness journey with Vortex Ascent. Premium gym equipment, expert training programs, and personalized workout plans to help you achieve your fitness goals.",
  keywords: "gym, fitness, training, workout, exercise, health, Vortex Ascent",
  authors: [{ name: "Vortex Ascent Team" }],
  icons: {
    icon: [
      { url: "/images/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo.png", sizes: "16x16", type: "image/png" }
    ],
    apple: "/images/logo.png",
    shortcut: "/images/logo.png"
  },
  openGraph: {
    title: "Vortex Ascent - Premium Fitness & Training",
    description: "Transform your fitness journey with Vortex Ascent. Premium gym equipment, expert training programs, and personalized workout plans.",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vortex Ascent - Premium Fitness & Training",
    description: "Transform your fitness journey with Vortex Ascent. Premium gym equipment, expert training programs, and personalized workout plans."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ffffff" />
        <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
