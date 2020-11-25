import React, { useReducer, useEffect } from 'react'
import Column from './../templates/Column'
import static_data from './../../static-data'

const columnsReducer = (state, action) => {
    switch (action.type) {
        case 'initial': 
            return static_data
        case 'set': {
            const {columnIndex, column} = action.parameters
            let columns = [...state]
            columns[columnIndex] = column
            return columns;
        }
        case 'add': {
            const {column} = action.parameters
            let columns = [...state]
            columns.push(column)
            return columns
        }
        default:
            break;
    }
}

const TrelloClone = () => {

    const [columns, dispatchComlumns] = useReducer(columnsReducer,[])
    
    useEffect(() => {
        dispatchComlumns({type:'initial'}) 
    }, [dispatchComlumns])

    const handleChange = (columnIndex, parameters) => {
        parameters.columnIndex = columnIndex
        dispatchComlumns({
            type:'set',
            parameters: parameters,
        })
    }

    return (
        <div>
            <h3>Trello Clone</h3>
            <div className="container trello-clone-container">
                {columns.map((column,index) => <Column 
                    key={column.id} 
                    column={column}
                    handleChange = {(parameters) => {handleChange(index, parameters)}}
                />)}
            </div>
        </div>
    )
}

export default TrelloClone