
import './CardContainer.css'

const CardContainer = (props) => {
  return (
    <div className="most-popular-items">
        {props.children}
    </div>
  )
}

export default CardContainer