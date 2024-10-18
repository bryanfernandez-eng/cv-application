import React from 'react'

function FormButtonGroup({
    cancelButtonTitle="Cancel",
    addButtonTitle="Save",
    onCancel,
    onAdd }
) {
  return (
    <div className='form-button-group'>
        <button onClick={onCancel}>{cancelButtonTitle}</button>
        <button onClick={onAdd}>{addButtonTitle}</button>
    </div>
  )
}

export default FormButtonGroup