import PopularLiveData from '../../Data/PopularLiveData'
import { PopularLive } from '../../sections'
import './Streams.css'

const Streams = () => {
  return (
    <>
         <PopularLive PopularLiveData={PopularLiveData} />
    </>
  )
}

export default Streams