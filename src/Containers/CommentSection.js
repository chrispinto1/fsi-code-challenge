import React, { useEffect, useContext } from 'react'
import NoComments from '../Components/NoComments'
import Comment from '../Components/Comment'
import { CommContext } from '../Contexts/CommentContext';
import AddComment from '../Components/AddComment';

const CommentSection = () => {
    const { commentsArr, user }  = useContext(CommContext);
    const [ comments, setComments ] = commentsArr
    const [ currUser, setCurrUser ] = user

    useEffect(() => {
        getComments()
    }, [])

    const getComments = () => {
        fetch('data.json', {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(data => {
            setCurrUser(data.currentUser)
            setComments(data.comments)
        })
        .catch(err => {
            console.error(err)
        })
    }

    const renderComments = () => {
        return comments.map(comment => {
            return (
                <div className='outer-comment-div'>
                    <Comment comment={comment} subcomment={false}/>
                    {
                        comment.replies.length ?
                            <div className='sub-comments'>
                                <div className='sub-comment-separator'>
                                    <span className='line'>&nbsp;</span>
                                </div>
                                <div>
                                {comment.replies.map(reply => {
                                    return <Comment comment={reply} subcomment={true}/>
                                })}
                                </div>
                            </div>
                            :
                            null
                    }
                </div>
            )
        })
    }

    // Didn't design it well the the reply towards the bottom, also wasn't a good design with the reply comments
    // since it now renders with an extra div for each one which isn't a good use especially when you have
    // a lot of comments
    return (
        <div className="comment-section">
            { 
                comments && comments.length ? 
                    renderComments()
                    : 
                    <NoComments />
            }
            {
                comments && comments.length ? 
                    <AddComment />
                    : 
                    null
            }
        </div>
    )
}

export default CommentSection