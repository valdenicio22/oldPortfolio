import { Story, Meta } from '@storybook/react'
import Welcome, { WelcomeProps } from '.'

export default {
  title: 'Welcome',
  component: Welcome
} as Meta

export const Default: Story<WelcomeProps> = (args) => <Welcome {...args} />
