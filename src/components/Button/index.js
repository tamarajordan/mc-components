import React from 'react'
import classNames from 'classnames'

import { string, func, bool } from 'prop-types'

const Button = ({
  children,
  className,
  onClick,
  primary,
  secondary,
  tertiary,
  ...props
}) => {
  const styles = classNames(
    'c-button',
    { className: Boolean(className) },
    {
      'c-button--primary': primary,
      'c-button--secondary': secondary,
      'c-button--tertiary': tertiary,
    },
  )
  return (
    <button
      className={styles}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: string.isRequired,
  className: string,
  onClick: func,
  primary: bool,
  secondary: bool,
  tertiary: bool,
}

Button.defaultProps = {
  className: '',
  onClick: () => {},
  primary: false,
  secondary: false,
  tertiary: false,
}


export default Button
