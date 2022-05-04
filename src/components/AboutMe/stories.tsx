import { Story, Meta } from '@storybook/react'
import AboutMe from '.'

export default {
  title: 'AboutMe',
  component: AboutMe
} as Meta

export const Default: Story = (args) => <AboutMe {...args} />
