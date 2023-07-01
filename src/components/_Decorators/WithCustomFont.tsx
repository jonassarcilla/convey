import { Decorator } from "@storybook/react"

export const WithCustomFont: Decorator = (Story) => (
  <>
    <style jsx global>
      {`
        @font-face {
          font-family: "InputMono";
          src: url("/fonts/InputMono-Regular.ttf");
        }
      `}
    </style>
    <div className="font-storybook">
      <Story />
    </div>
  </>
)
