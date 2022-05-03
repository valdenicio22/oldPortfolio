import { Story, Meta } from '@storybook/react'
import BtnLink, { BtnLinkProps } from '.'

export default {
  title: 'BtnLink',
  component: BtnLink
} as Meta

export const Default: Story<BtnLinkProps> = (args) => <BtnLink {...args} />
