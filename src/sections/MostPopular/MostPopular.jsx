import './MostPopular.css'

import {Card, CardContainer, SectionHeader, SectionWrapper} from '../../components'
import mostPopularData from '../../Data/MostPopularData'

const MostPopular = () => {

   

    const cards = mostPopularData.map(card => <Card key={card.id} img={card.img}  title={card.title}   category={card.category}  rate={card.rate}  download={card.download} />)

  return (
    <>
        <SectionWrapper>
           <SectionHeader>
                Most Popular
           </SectionHeader>
           <CardContainer>
                    {cards}
           </CardContainer>     
                
        </ SectionWrapper>
    </>
    )
}

export default MostPopular