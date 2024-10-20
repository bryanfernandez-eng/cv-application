import InputForm from '../common/InputForm'

function FormRenderer({ setForm, form }) {
  return (
    <div className='input-form'>
      {Object.keys(form).map(key => (
        <InputForm
          key={form["_id"]}
          item={key}
          form={form}
          setForm={setForm} />
      ))}
    </div>


  )
}

export default FormRenderer