import { Story, Meta } from '@storybook/react'
import AboutMe, { AboutMeProps } from '.'

export default {
  title: 'AboutMe',
  component: AboutMe
} as Meta

export const Default: Story<AboutMeProps> = (args) => <AboutMe {...args} />
