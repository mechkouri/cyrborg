import React from 'react'
import './Details.css'
import { HeaderCenter, SectionWrapper } from '../../components'
import { DetailsGame, RelatedGames, VideoDetails } from '../../sections'
import DetailsGameData from '../../Data/DetailsGameData'


const DataDetails = DetailsGameData[0];

const Details = () => {
  return (
    <>
        <SectionWrapper>
            <VideoDetails img_detail={DataDetails.img} image_tabnel={DataDetails.image_tabnel} />
            <HeaderCenter>{DataDetails.title} DETAILS</HeaderCenter>
            <DetailsGame title={DataDetails.title} category={DataDetails.category} rate={DataDetails.rate} download={DataDetails.download} images_detail={DataDetails.images_detail} storage={DataDetails.storage} status={DataDetails.status} bio={DataDetails.bio} />
        </SectionWrapper>
        <SectionWrapper>
          <RelatedGames />
        </SectionWrapper>
    </>
  )
}

export default Details