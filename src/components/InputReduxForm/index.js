import React from 'react'
import PropTypes from 'prop-types'
import Input from '../Input'

// Redux Form handler for the Input Component
const InputReduxForm = ({
  input,
  label,
  placeholder,
  meta: { touched, error },
  type = 'text',
}) => {
  const showError = touched && error

  return (
    <Input
      label={label}
      type={type}
      placeholder={placeholder}
      error={showError ? error : ''}
      {...input}
    />
  )
}

InputReduxForm.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
  placeholder: PropTypes.string,
}

export default InputReduxForm
