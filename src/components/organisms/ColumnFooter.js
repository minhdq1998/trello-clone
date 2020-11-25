import {useRef,useState, useEffect} from 'react'

const ColumnFooter = ({handleAddCard}) => {

    const [isEdit, setIsEdit] = useState(false)
    const inputRef = useRef()

    useEffect(() => {
        if (isEdit) {
            inputRef.current.focus()
        }
    }, [isEdit])

    const addCard = (e) => {
        if (inputRef.current.value) {
            e.preventDefault()
            const title = inputRef.current.value
            inputRef.current.value = ''
            inputRef.current.focus()
            handleAddCard({title:title})
        }
    }

    const handleEditBox = (e) => {
        if (isEdit) addCard(e)
        setIsEdit(!isEdit)
    }

    const onEnterPress = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            if (inputRef.current.value) {
                addCard(e)
            }
        }
    } 

    return <div className="footer">
        {isEdit ? <div>
            <textarea ref={inputRef} onKeyDown={onEnterPress} defaultValue={''}/>
            <button 
                onClick={addCard}
            >Add Card</button><i onClick={handleEditBox} className="fa fa-close"></i>
        </div>
        
        :<div className="add-card-prompt" onClick={handleEditBox}><i className="fa fa-plus"></i> Add another card</div>
        }
    </div>
}

export default ColumnFooter