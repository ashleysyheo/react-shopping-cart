import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { useState } from 'react';

import StepperButton from '../../components/common/StepperButton/StepperButton';

const meta = {
  title: 'ShoppingCart/common/StepperButton',
  component: StepperButton,
  argTypes: {
    count: {
      table: { disable: true },
    },
    minCount: {
      control: { type: 'number' },
    },
    maxCount: {
      control: { type: 'number' },
    },
    setCount: {
      control: false,
    },
  },
  args: {
    minCount: 0,
    maxCount: 100,
  },
} satisfies Meta<typeof StepperButton>;

export default meta;
type Story = StoryObj<typeof StepperButton>;

export const Default: Story = {
  render: ({ ...args }) => {
    const [count, setCount] = useState(0);

    return (
      <StepperButton
        count={count}
        setCount={setCount}
        minCount={args.minCount}
        maxCount={args.maxCount}
      />
    );
  },
};

export const Interaction: Story = {
  render: ({ ...args }) => {
    const [count, setCount] = useState(0);

    return (
      <StepperButton
        count={count}
        setCount={setCount}
        minCount={args.minCount}
        maxCount={args.maxCount}
      />
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const decreaseButton = canvas.getByRole('button', { name: 'decrease' });
    const increaseButton = canvas.getByRole('button', { name: 'increase' });
    const countInput = canvas.getByLabelText('count input');

    await userEvent.click(increaseButton);
    await userEvent.click(increaseButton);
    await userEvent.click(increaseButton);
    expect(countInput).toHaveValue('3');

    await new Promise((resolve) => setTimeout(resolve, 300));

    await userEvent.type(countInput, '4', { delay: 200 });
    expect(countInput).toHaveValue('34');

    await new Promise((resolve) => setTimeout(resolve, 300));

    await userEvent.click(decreaseButton);
    expect(countInput).toHaveValue('33');
  },
};
