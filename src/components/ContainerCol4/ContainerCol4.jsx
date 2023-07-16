import './ContainerCol4.css'

const ContainerCol4 = (props) => {
    return (
        <div className='col-lg-4'>
            <div className="containercol4">
                {props.children}
            </div>
        </div>
    )
}

export default ContainerCol4