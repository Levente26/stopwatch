// pictures
import work from '../../asserts/work.png'
import winkingFace from '../../asserts/winking-face.png'
// hooks
import { useDocument } from '../../hooks/useDocument'
import { useAuthContext } from '../../hooks/useAuthContext'

const StopperHeader = ( { mode, isStarted, isPaused, isBreak, doc } ) => {

    const { user } = useAuthContext()
    const { document } = useDocument('users', user.uid)

    return (
        <>
            {doc && <div className='header'>
                {mode === 'work' && isStarted && !isPaused ?
                    <>
                        <div className='d-f mode mb-1'>
                            <img className='img mr-1' src={work} alt='gear' />
                            <h3>{doc.name} is currently in progress</h3>
                            <img className='img ml-1' src={work} alt='gear' />
                        </div>
                        <p>{doc.detail} </p>
                    </>
                    : isPaused && isStarted ? 
                    <>
                        <div className='d-f mode mb-1'>
                            <h3>{doc.name} is paused</h3>
                        </div>
                        <p>{doc.detail} </p>
                    </>
                    :
                    <>
                        <div className='d-f mode mb-1'>
                            <h3>{doc.name}</h3>
                        </div>
                        <p>{doc.detail} </p>
                    </>
                }
                {mode === 'break' && 
                    <div className='d-f mode mt-1'>
                        <h3>Time is up, take a break</h3>
                        <img className='img ml-1' src={winkingFace} alt='winking face' />
                    </div>
                }
                {isBreak && 
                    <h2 className='mt-2 mb-2'>
                        {document.question} ?
                    </h2>
                }
            </div>}
        </>
    )
}
export default StopperHeader