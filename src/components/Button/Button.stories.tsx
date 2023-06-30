import type { Meta, StoryObj } from "@storybook/react"
import { WithCustomFont } from "../_Decorators/WithCustomFont"
// eslint-disable-next-line import/order
import { Button } from "./Button"

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    intent: "primary",
    underline: false,
    children: "Button",
    size: "lg",
  },
  argTypes: {
    intent: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "lg"],
      control: { type: "select" },
    },
  },
  decorators: [WithCustomFont],
}

type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: (args) => <Button {...args} />,
}

export default meta
