import './CardClip.css'
import { FaEye,FaPlayCircle } from "react-icons/fa";
import cardimg from '../../assets/images/clip-01.jpg';

const CardClip = (props) => {
  return (
    <>
        <div className="cardclip-item">
                <div className="thumb">
                    <img src={props.img} alt="" />
                    <a href={props.url} target="_blank"><FaPlayCircle color='var(--color-primary)'/> </a>
                </div>
                <div className="down-content">
                    <h4>{props.title}</h4>
                    <span><FaEye color='var(--color-primary)'/> {props.views}</span>
                </div>
        </div>
    </>
  )
}

export default CardClip