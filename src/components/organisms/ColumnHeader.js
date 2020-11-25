import {useState, useRef, useEffect} from 'react'

const ColumnHeader = ({title, handleOnChange}) => {
    const inputRef = useRef()
    const [isEdit, setIsEdit] = useState(false)

    useEffect(() => {
        if (isEdit) {
            inputRef.current.focus()
        }
    }, [isEdit])

    const handleEditBox = () => {
        if (isEdit && inputRef.current.value) {
            handleOnChange(inputRef.current.value)
        }
        setIsEdit(!isEdit)
    }

    return <div className="header">
        {isEdit? 
        <input 
            maxLength='512'
            onBlur={handleEditBox}
            ref={inputRef} 
            defaultValue={title}/>
        : <div
            className="disable-title"
            onClick={handleEditBox}>{title}
        </div>
        }
    </div>
}

export default ColumnHeader