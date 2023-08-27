import type { Meta, StoryObj } from "@storybook/react"
import { WithCustomFont } from "../_Decorators/WithCustomFont"
// eslint-disable-next-line import/order
import Icon from "./Icon"

const meta: Meta<typeof Icon> = {
  title: "Style Guides/Icon",
  component: Icon,
  decorators: [WithCustomFont],
}

type Story = StoryObj<typeof Icon>

export const Icons: Story = {
  render: (_args) => <Icon />,
}

export default meta
