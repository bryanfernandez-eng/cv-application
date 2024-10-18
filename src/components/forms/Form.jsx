import React from 'react'
import FormRenderer from './FormRenderer'

function Form({ form, setForm, children }) {
  return (
    <div className='form-section-data-container'>
      <FormRenderer
        form={form}
        setForm={setForm} />
      {children}
    </div>
  )
}

export default Form