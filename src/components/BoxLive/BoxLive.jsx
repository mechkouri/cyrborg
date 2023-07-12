import './BoxLive.css'

const BoxLive = ({icon, title, descption}) => {
    return (
        <div className="col-lg-4 start-stream">
            <div className="item">
                <div className="icon">
                    <img src={icon} alt={title} />
          
                </div>
                <h4>{title}</h4>
                <p>{descption}</p>
            </div>
        </div>
    )
}

export default BoxLive