import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { WithCustomFont } from "../_Decorators/WithCustomFont"
// eslint-disable-next-line import/order
import Color from "./Color"

const meta: Meta<typeof Color> = {
  title: "Color",
  component: Color,
  //   args: {
  //     intent: "primary",
  //     underline: false,
  //     children: "Button",
  //     size: "lg",
  //   },
  //   argTypes: {
  //     intent: {
  //       options: ["primary", "secondary"],
  //       control: { type: "select" },
  //     },
  //     size: {
  //       options: ["sm", "lg"],
  //       control: { type: "select" },
  //     },
  //   },
  decorators: [WithCustomFont],
}

type Story = StoryObj<typeof Color>

export const Base: Story = {
  render: (_args) => <Color />,
}

export default meta
