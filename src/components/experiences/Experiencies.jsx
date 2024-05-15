import PropTypes from "prop-types"
import "./Experiencies.scss"

function Experiencies({ data }) {
    return (
        <div className="experiences card">
            {data.map((item, i) => <article key={i} className="article">
                <h5>{item.name}</h5>
                <p>{item.where}</p>
                <p>{item.description}</p>
            </article>)}
        </div>
    )
}
Experiencies.propTypes = {
    data: PropTypes.array
}

export default Experiencies