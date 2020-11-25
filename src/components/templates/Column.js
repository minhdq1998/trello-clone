import PropTypes from 'prop-types'
import Card from './../organisms/Card'
import ColumnHeader from './../organisms/ColumnHeader'
import ColumnFooter from './../organisms/ColumnFooter'

const Column = ({column, handleChange}) => {
    
    const handleChangeByField = (field, value) => {
        let newColumn = {...column}
        newColumn[field] = value
        handleChange({column: newColumn})
    }

    return <div className="column">
        <ColumnHeader 
            title={column.title} 
            handleOnChange={(value) => handleChangeByField('title', value)}
        />
        <div className="card-list">
            {column.cards.map((card, index) => <Card 
                key={index} 
                card={card} />)}
        </div>
        <ColumnFooter 
            handleAddCard={
                (card) => handleChangeByField('cards',[...column.cards, card])
            }/>
    </div>
}

Column.propTypes = {
    column: PropTypes.shape({
        title: PropTypes.string.isRequired,
        cards: PropTypes.arrayOf(Card.propTypes.card)
    })
}

export default Column