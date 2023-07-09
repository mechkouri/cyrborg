import { FaDownload, FaStar } from 'react-icons/fa'
import './RelatedGame.css'


const RelatedGame = ({title, category, rate, download, Urlimg}) => {

  return (
    <div className="col-lg-6 RelatedGame">
                <div className="item">
                    <img src={Urlimg} alt="" className="templatemo-item" />
                        <h4> {title} </h4>
                        <span>{category}</span>
                  <ul>
                    <li><FaStar color='yellow'/> {rate}</li>
                    <li><FaDownload color='#ec6090'/> {download}</li>
                  </ul>
                </div>
     </div>
  )
}

export default RelatedGame