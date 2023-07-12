import { CardStream, PrimaryButton, SectionHeader, SectionWrapper } from '../../components'
import './PopularLive.css'

const PopularLive = ({PopularLiveData}) => {
    const cards = PopularLiveData.map(card =>  <CardStream key={card.id} image={card.image} profil={card.profil} name={card.name} bio={card.bio} status={card.status} views={card.views} game={card.game} />)
  return (
    <>
        <SectionWrapper>
            <SectionHeader>
                Most Popular Live Stream
            </SectionHeader>
        <div className="row">
               {cards}
        </div> 
            <center>
                <PrimaryButton>Discover All Streams</PrimaryButton>
            </center>
        </SectionWrapper>
    </>
  )
}

export default PopularLive