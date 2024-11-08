import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-select/dist/react-select.css";
import { Button } from '../button/Button';

const meta = {
  title: 'Table/RowsCell',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryRowsCell: Story = {
  args: {
    primary: true,
    label: 'RowsCell Button',
  },
};