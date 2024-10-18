import React from 'react'

function InputForm({ item, form, setForm }) {

    const formatKey = (key) => {
        return key
          .replace(/([A-Z])/g, ' $1') // Add a space before uppercase letters
          .replace(/^./, (str) => str.toUpperCase()) // Capitalize the first letter
          .trim(); // Remove leading/trailing spaces
      };


  return (
    <div className='input-form-items'>
            <label htmlFor={item}>{formatKey(item)}: </label>
            <input type="text" 
                id={item}
                value={form[item]} 
                onChange={(e)=>
                    setForm({...form, [item]: e.target.value})}/>
    </div>
  )
}

export default InputForm