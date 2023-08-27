import type { Meta, StoryObj } from "@storybook/react"
import { WithCustomFont } from "../_Decorators/WithCustomFont"
// eslint-disable-next-line import/order
import Typography from "./Typography"

const meta: Meta<typeof Typography> = {
  title: "Style Guides/Typography",
  component: Typography,
  decorators: [WithCustomFont],
}

type Story = StoryObj<typeof Typography>

export const Base: Story = {
  render: (_args) => <Typography />,
}

export default meta
