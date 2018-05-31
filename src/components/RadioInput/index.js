import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

export default class RadioInput extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool,
  }

  static defaultProps = {
    checked: false,
  }

  handleInputChange (e) {
    const { onChange } = this.props
    onChange(e.target.value)
  }

  render () {
    const { checked, label } = this.props
    const classNames = cn(
      'radio-input__mock',
      { 'radio-input__mock--checked': checked },
    )

    return (
      <div className='radio-input'>
        <input
          className='radio-input__input'
          checked={checked}
          type='radio'
          onChange={this.handleInputChange}
        />
        <div
          onClick={this.handleInputChange}
          className={classNames}
        />
        <label className='radio-input__label'>
          {label}
        </label>
      </div>
    )
  }
}
