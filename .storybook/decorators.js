import React from 'react'
import addonBackgrounds from "@storybook/addon-backgrounds"

// background decorator
export const backgrounds = addonBackgrounds([
  { name: 'black', value: '#000', default: true },
  { name: 'white', value: '#fff' },
])

// wrapper decorator
export const StoryWrapper = (storyFn) => (
  <div style={{ margin: '30px' }}>
    {storyFn()}
  </div>
)
