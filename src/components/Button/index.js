import React from 'react'
import classNames from 'classnames'

import { string, func, bool, node, oneOfType, arrayOf } from 'prop-types'

const Button = ({
  children,
  className,
  onClick,
  primary,
  secondary,
  tertiary,
  withIcon,
  fullWidth,
  ...props
}) => {
  const styles = classNames(
    'c-button',
    { [className]: Boolean(className) },
    {
      'c-button--primary': primary,
      'c-button--secondary': secondary,
      'c-button--tertiary': tertiary,
      'c-button--with-icon': withIcon,
      'c-button--full-width': fullWidth,
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
  children: oneOfType([
    arrayOf(node),
    node,
    string,
  ]),
  className: string,
  onClick: func,
  primary: bool,
  secondary: bool,
  tertiary: bool,
  withIcon: bool,
  fullWidth: bool,
}

Button.defaultProps = {
  className: '',
  onClick: () => {},
  primary: false,
  secondary: false,
  tertiary: false,
  withIcon: false,
  fullWidth: false,
}

export default Button
