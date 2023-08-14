import { useContext } from 'react'
import { CommContext } from '../Contexts/CommentContext';

const AddComment = ({ comment }) => {
    const { user }  = useContext(CommContext);
    const [ currUser ] = user

    return (
        <div className="reply-section">
            <img src={currUser.image.png}/>
            <textarea className="comment-reply" placeholder="Add a comment..."></textarea>
            <button>Send</button>
        </div>
    )
}

export default AddComment