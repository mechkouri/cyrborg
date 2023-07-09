import './DetailsInfo.css'

const DetailsInfo = (props) => {
  return (
    <div className="left-info DetailsInfo">
        {props.children}
    </div>
  )
}

export default DetailsInfo