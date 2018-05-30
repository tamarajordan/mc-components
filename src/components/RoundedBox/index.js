import React from 'react'
import { node, oneOfType, arrayOf, string } from 'prop-types'

const RoundedBox = ({ children, header, subheader }) => (
  <div className='rounded-box'>
    {subheader &&
      <h4 className='rounded-box__subheader'>{subheader}</h4>
    }
    {header &&
      <h2 className='rounded-box__header'>{header}</h2>
    }
    {children}
  </div>
)

RoundedBox.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node,
  ]),
  header: string,
  subheader: string,
}

export default RoundedBox
