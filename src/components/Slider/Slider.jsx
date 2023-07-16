
import { Carousel } from '@trendyol-js/react-carousel'
import './Slider.css'
import MediaQuery from 'react-responsive'

const Slider = ({lives}) => {
  return (
    <div className="owl-features owl-carousel owl-loaded owl-drag">
            <MediaQuery minWidth={901}>
                <Carousel show={2.5} slide={1} swiping={true}>
                    {lives}
                </Carousel>
            </MediaQuery>
            <MediaQuery maxWidth={900}>
                <Carousel show={1} slide={1} swiping={true}>
                    {lives}
                </Carousel>
            </MediaQuery>
    </div>
  )
}

export default Slider