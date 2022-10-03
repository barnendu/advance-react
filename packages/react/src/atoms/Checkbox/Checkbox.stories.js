import React from 'react'
import Checkbox from './Checkbox'
import { withA11Y } from '@storybook/addon-a11y'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    children: 'Checkbox'
  },
  decorators: [withA11Y]
}

export const CustomCheckbox = () => <Checkbox label='Subscribe to newsletter?' id="subscribeNews"/>


