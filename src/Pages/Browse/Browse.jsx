import StartLive from '../../sections/StartLive/StartLive'
import './Browse.css'
import StartLiveData from '../../Data/StartLiveData'
import PopularLiveData  from '../../Data/PopularLiveData'

import { Games, PopularLive } from '../../sections'


const Browse = () => {
  return (
    <>
        <Games/>
        <StartLive dataLive={StartLiveData} />
        <PopularLive PopularLiveData={PopularLiveData.slice(0,4)} />
    </>
  )
}

export default Browse