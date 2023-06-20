import './PopularClips.css'

import { CardClip, CardContainer, SectionHeader } from '../../components'
import PopularClipsData from '../../Data/PopularClipsData'

const PopularClips = () => {

    const cards = PopularClipsData.map(clip => <CardClip img={clip.img} url={clip.url} title={clip.title} views={clip.views} /> )
  return (
    <>
        <SectionHeader>
            Your Most Popular Clips
        </SectionHeader>
        <CardContainer>
            {cards}
        </CardContainer>
       

    </>
  )
}

export default PopularClips