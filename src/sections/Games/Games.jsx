import LiveStreamsData from '../../Data/LiveStreamsData'
import { CardLiveStream, ContainerCol4, ContainerCol8, SectionHeader, Slider } from '../../components'

import './Games.css'

import GamingLibraryData from '../../Data/GamingLabraryData'
import GameDownloaded from '../../components/GameDownloaded/GameDownloaded'

const Games = () => {
    const gaming = GamingLibraryData.map(game => <GameDownloaded key={game.id} category={game.category} downloaded={game.downloaded} title={game.title} img={game.img}  rate={game.rate}/>)
    const Lives = LiveStreamsData.map(live => <CardLiveStream key={live.id} img={live.img} name={live.name} rate={live.rate} downloads={live.downloands}/>)
    return (
      <div className='row'>
          <ContainerCol8>
            <SectionHeader>Featured Games</SectionHeader>
            <Slider lives={Lives} />
          </ContainerCol8>
          <ContainerCol4>
            <SectionHeader>Top Sreamers</SectionHeader>
            <ul>
              {gaming}
            </ul>
          </ContainerCol4>
      </div>
    )
}

export default Games