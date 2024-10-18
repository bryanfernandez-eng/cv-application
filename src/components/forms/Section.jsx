import { useState } from "react";
import CollapseSection from "../common/CollapseSection";
import ListSectionData from "./ListSectionData";
import AddSectionData from "./AddSectionData";
import EditSectionData from "./EditSectionData";

function Section({ sectionData, setSectionData, sectionTitle = "Title", formSchema, highlightKey }) {

    const [isOpen, setIsOpen] = useState(true);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editDataID, setEditDataID] = useState(null);
    const [form, setForm] = useState(formSchema);

    function clearForm() {
        setForm(() => formSchema);
    }

    return (
        <div className="section">
            <CollapseSection
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                sectionTitle={sectionTitle} />

            {
                isOpen && !isAdding && !isEditing &&
                <>
                    {sectionData.length > 0 &&
                        <ListSectionData
                            sectionData={sectionData}
                            setSectionData={setSectionData}
                            form={form}
                            setForm={setForm}
                            setIsEditing={setIsEditing}
                            setEditDataID={setEditDataID}
                            highlightKey={highlightKey} />
                    }
                    <button className="addNew" onClick={() => setIsAdding(true)}>Add {sectionTitle}</button>
                </>
            }

            {
                isOpen && isAdding && !isEditing &&
                <AddSectionData
                    setSectionData={setSectionData}
                    setForm={setForm}
                    form={form}
                    setIsAdding={setIsAdding}
                    sectionData={sectionData}
                    clearForm={clearForm}
                />

            }

            {
                isOpen && !isAdding && isEditing &&
                <EditSectionData
                    editDataID={editDataID}
                    setEditDataID={setEditDataID}
                    form={form}
                    setForm={setForm}
                    setIsEditing={setIsEditing}
                    setSectionData={setSectionData}
                    clearForm={clearForm} />
            }


        </div>
    )
}

export default Section