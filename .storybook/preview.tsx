import type { Decorator } from "@storybook/react"
import { type Preview } from "@storybook/react"
import React from "react"
import "../src/styles/tailwind.css"

const withCustomFont: Decorator = (Story) => (
  <div className="font-adelia">
    <Story />
  </div>
)

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [withCustomFont],
}

export default preview
function localFont(arg0: {
  src: { path: string; weight: string }[]
  variable: string
  display: string
  fallback: string[]
}) {
  throw new Error("Function not implemented.")
}
