import { Decorator } from "@storybook/react"
import localFont from "next/font/local"

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

export const WithCustomFont: Decorator = (Story) => (
  <>
    <style jsx global>
      {`
        :root {
          --font-inputmono: ${inputMono.style.fontFamily};
        }
      `}
    </style>
    <div className={`${sfProText.variable} ${menlo.variable} ${inputMono.className}`}>
      <Story />
    </div>
  </>
)
