import { FaCheck } from 'react-icons/fa'
import './Streamer.css'
import PrimaryButton from '../Buttons/Buttons'
const Streamer = ({id,img,name}) => {
    return (
        <li className='Streamer'>
            <span>{id}</span>
            <img src={img} alt="img" />
                <h6> <FaCheck color='var(--color-primary)'/> {name}</h6>
                <div className="main-button">
                    <PrimaryButton>Follow</PrimaryButton>
                </div>
        </li>
    )
}

export default Streamer