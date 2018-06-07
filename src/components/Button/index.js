import React from 'react'
import cn from 'classnames'

import { string, func, bool, node, oneOfType, arrayOf } from 'prop-types'

const getLoader = () => (
  <div className='loader'>
    <svg
      width='120'
      height='30'
      viewBox='0 0 120 30'
      xmlns='http://www.w3.org/2000/svg'
      fill='#fff'
    >
      <circle cx='15' cy='15' r='15'>
        <animate
          attributeName='r'
          from='15'
          to='15'
          begin='0s'
          dur='0.8s'
          values='15;9;15'
          calcMode='linear'
          repeatCount='indefinite'
        />
        <animate
          attributeName='fill-opacity'
          from='1'
          to='1'
          begin='0s'
          dur='0.8s'
          values='1;.5;1'
          calcMode='linear'
          repeatCount='indefinite'
        />
      </circle>
      <circle cx='60' cy='15' r='9' fillOpacity='0.3'>
        <animate
          attributeName='r'
          from='9'
          to='9'
          begin='0s'
          dur='0.8s'
          values='9;15;9'
          calcMode='linear'
          repeatCount='indefinite'
        />
        <animate
          attributeName='fill-opacity'
          from='0.5'
          to='0.5'
          begin='0s'
          dur='0.8s'
          values='.5;1;.5'
          calcMode='linear'
          repeatCount='indefinite'
        />
      </circle>
      <circle cx='105' cy='15' r='15'>
        <animate
          attributeName='r'
          from='15'
          to='15'
          begin='0s'
          dur='0.8s'
          values='15;9;15'
          calcMode='linear'
          repeatCount='indefinite'
        />
        <animate
          attributeName='fill-opacity'
          from='1'
          to='1'
          begin='0s'
          dur='0.8s'
          values='1;.5;1'
          calcMode='linear'
          repeatCount='indefinite'
        />
      </circle>
    </svg>
  </div>
)

const Button = ({
  children,
  className,
  onClick,
  primary,
  secondary,
  tertiary,
  withIcon,
  fullWidth,
  text,
  loading,
  ...props
}) => {
  const classNames = cn(
    'c-button',
    { [className]: Boolean(className) },
    {
      'c-button--primary': primary,
      'c-button--secondary': secondary,
      'c-button--tertiary': tertiary,
      'c-button--with-icon': withIcon,
      'c-button--full-width': fullWidth,
      'c-button--text': text,
      'c-button--loading': loading,
    },
  )

  const loader = loading && getLoader()

  return (
    <button
      className={classNames}
      onClick={onClick}
      {...props}
    >
      <span>
        {children}
      </span>
      {loader}
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
  text: bool,
  loading: bool,
}

Button.defaultProps = {
  className: '',
  onClick: () => {},
  primary: false,
  secondary: false,
  tertiary: false,
  withIcon: false,
  fullWidth: false,
  text: false,
  loading: false,
}

export default Button
