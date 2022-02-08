import back from '../../../asserts/back.png'

const BackButton = (props) => {
    return (
        <button {...props} className='stopper-btn font-md'>
            <img src={back} alt='back' className='stopper-btn' />
        </button>
    )
}
export default BackButton