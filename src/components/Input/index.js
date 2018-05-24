import React, { PureComponent } from 'react'
import { string, func, object, bool } from 'prop-types'
import classNames from 'classnames'

export default class Input extends PureComponent {
  static propTypes = {
    value: string.isRequired,
    onChange: func.isRequired,
    placeholder: string,
    type: string,
    label: string,
    fullWidth: bool,
    style: object,
  }

  static defaultProps = {
    type: 'text',
    fullWidth: true,
  }

  onChange = ({ target: { value } }) => {
    const { onChange } = this.props
    onChange(value)
  }

  render() {
    const {
      value,
      type,
      placeholder,
      label,
      style,
      fullWidth,
      error,
      onChange
    } = this.props
    const showLabel = label && placeholder && value
    const inputClassNames = classNames(
      'input-field__input',
      { 'input-field__input--placeholder': !showLabel },
      { 'input-field__input--full-width': fullWidth },
      { 'input-field__input--error': error },
    )
    const labelClassNames = classNames(
      'input-field__label',
      {  'input-field__label--hide': !showLabel }
    )

    return (
      <div style={style} className='input-field'>
        {label &&
          <label className={labelClassNames}>{label}</label>
        }
        {error &&
          <span className='input-field__error'>{error}</span>
        }
        <input
          className={inputClassNames}
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={this.onChange}
        />
      </div>
    )
  }
}
