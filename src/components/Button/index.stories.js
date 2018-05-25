import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Button from '../Button'

const infoProps = {
  inline: true,
  header: false,
}

storiesOf('Button', module)
  .add('primary', 
    withInfo({ ...infoProps })(() =>
      <Button
        onClick={action('clicked')}
        primary
      >
        Button
      </Button>
    )
  )
  .add('secondary',
    withInfo({ ...infoProps })(() =>
      <Button
        onClick={action('clicked')}
        secondary
      >
        Button
      </Button>
    )
  )
  .add('tertiary',
    withInfo({ ...infoProps })(() =>
      <Button
        onClick={action('clicked')}
        tertiary
      >
        Button
      </Button>
    )
  )
