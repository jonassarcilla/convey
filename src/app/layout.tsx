import { Metadata } from "next"
import localFont from "next/font/local"
// eslint-disable-next-line
import "@vscode/codicons/dist/codicon.css"
import React from "react"
import "../styles/globals.css"
import "../styles/seti-icon.css"

// Font files can be colocated inside of `app`
// https://tailwindcss.com/docs/font-weight
const sfProText = localFont({
  src: [
    {
      path: "./fonts/SFProText-Regular.ttf",
      weight: "100 400",
    },
    {
      path: "./fonts/SFProText-Medium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/SFProText-Semibold.ttf",
      weight: "600",
    },
    {
      path: "./fonts/SFProText-Bold.ttf",
      weight: "700",
    },
    {
      path: "./fonts/SFProText-Heavy.ttf",
      weight: "800 900",
    },
  ],
  variable: "--font-sfprotext",
  display: "swap",
  fallback: [
    "Inter",
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "system-ui",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "Noto Sans",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
  ],
})

const menlo = localFont({
  src: [
    {
      path: "./fonts/Menlo-Regular.ttf",
      weight: "100 400",
    },
    {
      path: "./fonts/Menlo-Bold.ttf",
      weight: "700 900",
    },
  ],
  variable: "--font-menlo",
  display: "swap",
  fallback: [
    "Inter",
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "system-ui",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "Noto Sans",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
  ],
})

const inputMono = localFont({
  src: [
    {
      path: "./fonts/InputMono-Regular.ttf",
    },
  ],
  variable: "--font-inputmono",
  display: "swap",
  fallback: [
    "Inter",
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "system-ui",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "Noto Sans",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
  ],
})

const seti = localFont({
  src: [
    {
      path: "./fonts/seti.ttf",
    },
  ],
  variable: "--font-seti",
  display: "swap",
  fallback: [
    "Inter",
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "system-ui",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "Noto Sans",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
  ],
})

export const metadata: Metadata = {
  title: "Convey",
  description: "BPMN 2.0",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${sfProText.variable} ${menlo.variable} ${inputMono.variable} ${seti.variable} font-body`}>
        {children}
      </body>
    </html>
  )
}
