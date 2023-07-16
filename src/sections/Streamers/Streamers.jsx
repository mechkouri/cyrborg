
import { CardLiveStream, ContainerCol4, ContainerCol8, SectionHeader, Slider } from '../../components'
import Streamer from '../../components/Streamer/Streamer'
import './Streamers.css'
import SreamersData from '../../Data/SreamersData'
import LiveStreamsData from '../../Data/LiveStreamsData'
const Streamers = () => {
  const streamers = SreamersData.map(streamer => <Streamer key={streamer.id} id={streamer.id} img={streamer.img} name={streamer.name} />)
  const Lives = LiveStreamsData.map(live => <CardLiveStream key={live.id} img={live.img} name={live.name} rate={live.rate} downloads={live.downloands}/>)
  return (
    <div className='row'>
        <ContainerCol8>
          <SectionHeader>Live Streams</SectionHeader>
          <Slider lives={Lives} />
        </ContainerCol8>
        <ContainerCol4>
          <SectionHeader>Top Sreamers</SectionHeader>
          <ul>
            {streamers}
          </ul>
        </ContainerCol4>
    </div>
  )
}

export default Streamers