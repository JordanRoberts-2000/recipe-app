import Button from "@components/ui/Button";
import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import SunIcon from "@svgs/sun.svg?react";

type StoryProps = ComponentProps<typeof Button> & {
  buttonText: string;
};

const meta: Meta<StoryProps> = {
  component: Button,
  argTypes: {
    size: {
      options: ["default", "icon"] as ComponentProps<typeof Button>["size"][],
      control: {
        type: "select",
      },
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    buttonText: "default",
    size: "default",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

export const Icon: Story = {
  args: {
    buttonText: "default",
    size: "icon",
  },
  render: ({ buttonText, ...args }) => (
    <Button {...args}>
      <SunIcon />
    </Button>
  ),
};
