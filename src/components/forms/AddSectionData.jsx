
import Form from './Form';
import FormButtonGroup from './FormButtonGroup';

function AddSectionData({
    setSectionData,
    setForm,
    form,
    setIsAdding,
    clearForm }) {

    function handleAddSectionData() {
        const _id = `${Date.now()}-${Math.floor(Math.random() * 100)}`;
        console.log(_id)
        const newData = { _id, ...form }
        console.log(newData)
        setSectionData(sectionData => [...sectionData, newData])
        setIsAdding(false)
        clearForm();
    }

    return (
        <Form form={form} setForm={setForm}>
            <FormButtonGroup
                cancelButtonTitle="Cancel"
                addButtonTitle="Add"
                onCancel={() => setIsAdding(false)}
                onAdd={handleAddSectionData} />
        </Form>
    )
}

export default AddSectionData