import './Home.scss'
// hooks
import { useAuthContext } from '../../hooks/useAuthContext'
import { useDocument } from '../../hooks/useDocument'

const Home = () => {

    const { user } = useAuthContext()
    const  { document } = useDocument('users', user.uid)

    return (
        <div className='p-2 mt-2 question-box'>
           <h2 className='font-md '>My focusing question is ...</h2>
           {document && <p className='p-1 font-lg question'>{document.question}</p>}
           <iframe src="https://giphy.com/embed/jNYUeDwoUoloEswJm8" width="100%" height="200" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        </div>
    )
}
export default Home