import React, { useContext } from 'react';
import { CommContext } from '../Contexts/CommentContext';
import Likes from './Likes';
import Name from './Name';
import CommentText from './CommentText';
import UserImage from './UserImage';
import CommentTimeStamp from './CommentTimeStamp';
import CommentDelete from './CommentDelete';
import CommentReply from './CommentReply';
import SelfIdentifier from './SelfIdentifier';

const Comment = ({ comment }) => {
    const { user }  = useContext(CommContext);
    const [ currUser ] = user

    return (
        <div className='comment'>
            <Likes key={comment.id} likeCount={parseInt(comment.score)} commentId={comment.id}/>
            <div className='comment-area'>
                <div className='comment-area-header'>
                    <div className='comment-area-header-left'>
                        <UserImage key={comment.id}  imagePath={comment.user.image.png} />
                        <Name key={comment.id}  name={comment.user.username} />
                        {
                            currUser.username === comment.user.username ?
                                <SelfIdentifier key={comment.id} />
                                :
                                null

                        }
                        <CommentTimeStamp key={comment.id} timestamp={comment.createdAt} />
                    </div>
                    <div className='comment-area-header-right'>
                        {
                            currUser.username === comment.user.username ?
                                <CommentDelete key={comment.id} name={comment.user.username}/>
                                :
                                null
                        }
                        <CommentReply key={comment.id} imagePath={comment.user.image.png} />
                    </div>
                </div>
                <CommentText key={comment.id} text={comment.content}/>
            </div>
        </div>
    )
}

export default Comment