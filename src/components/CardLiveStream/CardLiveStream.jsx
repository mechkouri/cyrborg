import { FaDownload, FaStar } from 'react-icons/fa'
import './CardLiveStream.css'


const CardLiveStream = ({img, name, rate, downloads}) => {
    return (
        <div className="owl-item card-live-stream" >
            <div className="item">
                <div className="thumb">
                    <img src={img} alt="" />
                    <div className="hover-effect">
                        <h6>2.4K Streaming</h6>
                    </div>
                </div>
                <h4>{name}<br /><span>249K Downloads</span></h4>
                <ul>
                    <li><FaStar color='yellow' /> {rate}</li>
                    <li><FaDownload color='var(--color-primary)' /> {downloads}</li>
                </ul>
            </div>
        </div>
    )
}

export default CardLiveStream