import { type Preview } from "@storybook/react"
import "../src/styles/globals.css"

const DEFAULT_VIEWPORTS = {
  "2xs": {
    name: "Extra extra small",
    styles: {
      height: "320px",
      width: "240px",
    },
    type: "mobile",
  },
  xs: {
    name: "Extra Small",
    styles: {
      height: "568px",
      width: "320px",
    },
    type: "mobile",
  },
  sm: {
    name: "Small",
    styles: {
      height: "70vh",
      width: "576px",
    },
    type: "mobile",
  },
  medium: {
    name: "Medium",
    styles: {
      height: "1024px",
      width: "768px",
    },
    type: "tablet",
  },
  large: {
    name: "Large",
    styles: {
      height: "800px",
      width: "1024px",
    },
    type: "desktop",
  },
  xl: {
    name: "Extra Large",
    styles: {
      height: "800px",
      width: "1280px",
    },
    type: "desktop",
  },
  "2xl": {
    name: "Extra extra Large",
    styles: {
      height: "2048px",
      width: "1536px",
    },
    type: "desktop",
  },
}

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    viewport: {
      viewports: { ...DEFAULT_VIEWPORTS },
      defaultViewport: "xs",
    },
    layout: "fullscreen",
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
