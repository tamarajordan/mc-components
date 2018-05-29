import React from 'react'
import { node, oneOfType, arrayOf } from 'prop-types'

const RoundedBox = ({ children }) => (
  <div className='rounded-box'>
    {children}
  </div>
)

RoundedBox.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node,
  ]),
}

export default RoundedBox
