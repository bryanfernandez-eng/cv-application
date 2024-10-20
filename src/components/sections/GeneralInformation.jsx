import React, { useState } from 'react'
import CollapseSection from '../common/CollapseSection'
import InputForm from '../common/InputForm'
import FormRenderer from '../forms/FormRenderer'
import Form from '../forms/Form'

function GeneralInformation({ generalInformation, setGeneralInformation }) {
    
    const [isOpen, setIsOpen] = useState(false)
    
    return (
    <div className='section'>
        <CollapseSection 
          sectionTitle={"General Information"}
          isOpen={isOpen}
          setIsOpen={setIsOpen}/>
        
        {
          isOpen && 
          ( <Form
             setForm={setGeneralInformation}
             form={generalInformation}/>)
        }
    </div>
  )
}

export default GeneralInformation