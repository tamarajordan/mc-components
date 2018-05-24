import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Button from '../Button'

storiesOf('Button', module)
  .add('primary', 
    withInfo()(() =>
      <Button
        onClick={action('clicked')}
        primary
      >
        Button
      </Button>
    )
  )
  .add('secondary',
    withInfo()(() =>
      <Button
        onClick={action('clicked')}
        secondary
      >
        Button
      </Button>
    )
  )
