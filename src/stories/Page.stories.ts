import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { expect, userEvent, within } from 'storybook/test';

import { StoriesPage } from './StoriesPage';  // 👈 yahan sahi component import

const meta = {
  title: 'Example/StoriesPage',   // 👈 naam bhi consistent rakho
  component: StoriesPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof StoriesPage>;   // 👈 yahan bhi update

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};

export const LoggedIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole('button', { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};
