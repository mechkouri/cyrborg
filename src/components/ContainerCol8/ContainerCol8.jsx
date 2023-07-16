import './ContainerCol8.css'

const ContainerCol8 = (props) => {
  return (
    <div className='col-lg-8'>
        <div className="ContainerCol8">
            {props.children}
        </div>
    </div>
  )
}

export default ContainerCol8