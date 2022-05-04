import { Story, Meta } from '@storybook/react'
import Work from '.'

export default {
  title: 'Work',
  component: Work
} as Meta

export const Default: Story = (args) => <Work {...args} />
