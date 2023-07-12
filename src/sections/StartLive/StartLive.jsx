import './StartLive.css'
import {BoxLive, PrimaryButton, SectionHeader} from '../../components'

const StartLive = ({dataLive}) => {
    const boxs = dataLive.map(data => <BoxLive key={data.id} icon={data.icon} title={data.title} descption={data.descption} /> )
  return (
    <>
     <center>
        <SectionHeader>
            How To Start Your Live Stream
        </SectionHeader>  
    </center>
    <div className="row">
        {boxs}
        <center className='buttonLive'> <PrimaryButton>Go To Profile</PrimaryButton> </center>
    </div>
    </>
  )
}

export default StartLive