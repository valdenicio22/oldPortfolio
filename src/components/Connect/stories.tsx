import { Story, Meta } from '@storybook/react'
import Connect from '.'

export default {
  title: 'Connect',
  component: Connect
} as Meta

export const Default: Story = (args) => <Connect {...args} />
