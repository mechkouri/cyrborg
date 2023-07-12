import { FaCheck, FaEye, FaGamepad } from 'react-icons/fa'
import './CardStream.css'
import { Link } from 'react-router-dom'



const CardStream = ({image, profil, name, bio, status , views, game}) => {
    return (
        <div className="col-lg-3 col-sm-6 live-streamm">
            <div className="item">
                <div className="thumb">
                    <img src={image} alt="" />
                        <div className="hover-effect">
                            <div className="content">
                                <div className="live">
                                    <Link to='#'>{status}</Link>
                                </div>
                                <ul>
                                    <li><Link to='#'><FaEye/>  {views}</Link></li>
                                    <li><Link to='#'><FaGamepad/> {game}</Link></li>
                                </ul>
                            </div>
                        </div>
                </div>
                <div className="down-content">
                    <div className="avatar">
                        <img src={profil} alt="" />
                        <span><FaCheck/>  {name}</span>
                    </div>
                   
                    <h4>{bio}</h4>
                </div>
            </div>
        </div>
    )
}

export default CardStream