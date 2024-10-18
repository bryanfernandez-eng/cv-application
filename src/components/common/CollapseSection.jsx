function CollapseSection({ isOpen, setIsOpen, sectionTitle }) {
    
    function onCollapseClick(){
        setIsOpen(() => !isOpen); 
    }

    return (
        <div className='collapse-display'>
            <h1>{sectionTitle}</h1>
            <button
                onClick={onCollapseClick}>
                    {isOpen ? "-" : "+"}
            </button>
        </div>
    )
}

export default CollapseSection