// import {useRef} from 'react'
import PropTypes from 'prop-types'

const Card = ({card}) => {
    return <div className="card">{card.title}</div>
}

Card.propTypes = {
    card: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired
}


export default Card