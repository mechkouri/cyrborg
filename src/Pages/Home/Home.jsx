import './Home.css'
import {  GamingLibrary,  Hero , MostPopular} from '../../sections';

const Home = () => {
  return (
    <>
        <Hero />
        <MostPopular />
        <GamingLibrary title='Most Popular' />
    </>
  )
}

export default Home