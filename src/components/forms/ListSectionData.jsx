
function ListSectionData({ sectionData, setSectionData, highlightKey, setForm, setIsEditing, setEditDataID }) {
    
    function handleDelete(id){
        setSectionData(prevData => prevData.filter((data) => data._id !== id))
    }

    function handleEditClick(id){

        const dataToEdit = sectionData.find(data => data._id === id); 
        const { _id, ...dataWithoutID } = dataToEdit;  
        
        setIsEditing(true);
        setEditDataID(()=>id) 
        setForm(() => dataWithoutID); 
    }

    return (
    <div className='list-items-display'>
        {
            sectionData.map((item, index) => (
                <div key={index} className='item-display'>
                    <button onClick={()=>
                        handleEditClick(sectionData[index]._id)}>
                            {item[highlightKey]}
                    </button>
                    <button onClick={() => 
                        handleDelete(sectionData[index]._id)}>
                        X
                    </button>
                </div> 
            ))
        }
    </div>
  )
}

export default ListSectionData