import FormButtonGroup from './FormButtonGroup';
import Form from './Form';

function EditSectionData({
    form,
    setForm,
    editDataID,
    setEditDataID,
    clearForm,
    setIsEditing,
    setSectionData }) {

    function handleCancelClick() {
        clearForm();
        setIsEditing(false);
        setEditDataID(null);
    }

    function handleSetClick() {
        setSectionData(prevData =>
        (prevData.map(data => data._id === editDataID ?
            { ...form, _id: editDataID } : data)));

        setEditDataID(null);
        setIsEditing(false);
        clearForm();
    }

    return (
        <Form form={form} setForm={setForm}>
            <FormButtonGroup
                cancelButtonTitle="Cancel"
                addButtonTitle="Save"
                onCancel={handleCancelClick}
                onAdd={handleSetClick} />
        </Form>
    )
}

export default EditSectionData