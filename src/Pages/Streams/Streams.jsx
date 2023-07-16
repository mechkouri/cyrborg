import PopularLiveData from '../../Data/PopularLiveData'
import { PopularLive, Streamers } from '../../sections'
import './Streams.css'

const Streams = () => {
  return (
    <>
          <Streamers />
         <PopularLive PopularLiveData={PopularLiveData} />
    </>
  )
}

export default Streams