import './GameDownloaded.css'

import { FaDownload, FaStar } from 'react-icons/fa'

const GameDownloaded = ({img,title,category,rate,downloads}) => {
    return (
        <li className='GameDownloaded' >
            <img src={img} alt="" className="templatemo-item" />
                <h4>{title}</h4>
                <h6>{category}</h6>
                <span><FaStar color='yellow'/>   {rate}</span>
                <span><FaDownload color='var(--color-primary)'/>   {downloads}</span>
                <div className="download">
                    <a href="#"> <FaDownload color='var(--color-primary)'/></a>
                </div>
        </li>
    )
}

export default GameDownloaded