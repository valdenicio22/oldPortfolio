import { Story, Meta } from '@storybook/react'
import Header, { HeaderProps } from '.'

export default {
  title: 'Header',
  component: Header
} as Meta

export const Default: Story<HeaderProps> = (args) => <Header {...args} />
