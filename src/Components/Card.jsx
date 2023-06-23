import PropTypes from 'prop-types'

function Card(props) {

    return (
        (
            <div className="card">
                {props.children}
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <a className="button" href="https://www.travelandleisure.com/trip-ideas/nature-travel/most-beautiful-waterfalls-in-the-world">Go somewhere</a>
                </div>
            </div>
        )
    )

}

Card.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    children: PropTypes.any
}

export default Card