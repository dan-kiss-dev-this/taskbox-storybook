import React from 'react'
import Button from './Button'
import Center from '../Center/Center'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Button'
  },
  argTypes: {
    variantColor: { control: 'text' },
    children: { control: 'text' }
  },
  decorators: [story => <Center>{story()}</Center>]
}

export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>

export const Success = () => <Button variant='success'>Success</Button>

export const Danger = () => <Button variant='danger'>Danger</Button>

const Template = args => <Button {...args} />

export const PrimaryA = Template.bind({})
//args show state of stories
PrimaryA.args = {
  variant: 'primary',
}

// here we extend the props and this allows reuse by using the args mechanism
export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
  ...PrimaryA.args,
  children: 'Long Primary Args'
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
  variant: 'secondary',
}