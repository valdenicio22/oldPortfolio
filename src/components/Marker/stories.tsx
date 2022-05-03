import { Story, Meta } from '@storybook/react'
import Marker, { MarkerProps } from '.'

export default {
  title: 'Marker',
  component: Marker
} as Meta

export const Default: Story<MarkerProps> = (args) => <Marker {...args} />
