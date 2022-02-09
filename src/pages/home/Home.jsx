import './Home.scss'
// hooks
import { useAuthContext } from '../../hooks/useAuthContext'
import { useDocument } from '../../hooks/useDocument'
import { useFirestore } from '../../hooks/useFirestore'
import { useState } from 'react'
// icons
import editIcon from '../../asserts/edit.png'
import okIcon from '../../asserts/ok.png'

const Home = () => {

    const { user } = useAuthContext()
    const { document } = useDocument('users', user.uid)
    const { updateDocument } = useFirestore('users')

    const [isActive, setIsActive] = useState(false)
    const [newQuestion, setNewQuestion] = useState('')

    const updateQuestion = () => {
        const doc = {
            question: newQuestion === '' ? document.question : newQuestion
        }
        updateDocument(user.uid, doc)
        setIsActive(false)
    }

    return (
        <div className='p-1 mt-1 question-box'>
            {document && !isActive ?
                <>
                    <h2 className='font-md '>My focusing question is ...</h2>
                    <p className='p-1 font-lg question'>{document.question}</p>
                </>
            :
                document && <label>
                    <span className='font-md'>New focusing question</span>
                    <input 
                        className='mt-1'
                        type='text'
                        value={newQuestion}
                        placeholder={document.question}
                        onChange={(e) => setNewQuestion(e.target.value)}
                    />
                </label>
            }
            <div className='d-f icon-box'>
            {document && isActive ? 
                <img 
                    className='icon' 
                    src={okIcon} 
                    alt='ok' 
                    onClick={updateQuestion}
                />
            :
                <img 
                    className='icon' 
                    src={editIcon} 
                    alt='edit' 
                    onClick={() => setIsActive(true)}
                />
            }
           </div>
           <iframe src="https://giphy.com/embed/jNYUeDwoUoloEswJm8" width="100%" height="200" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        </div>
    )
}
export default Home