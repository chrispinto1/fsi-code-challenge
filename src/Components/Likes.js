import { useState } from 'react';

const Likes = ({ likeCount, commentId }) => {

    const [likes, setLikes] = useState(localStorage.getItem(`likes_${commentId}`) ? parseInt(localStorage.getItem(`likes_${commentId}`)) : likeCount)

    const increaseLikes = () => {
        localStorage.setItem(`likes_${commentId}`, likes + 1)
        setLikes(likes + 1)
    }

    const decreaseLikes = () => {
        localStorage.setItem(`likes_${commentId}`, likes + 1)
        setLikes(likes - 1)
    }

    return (
        <div className="like-container">
            <div className="like-plus" onClick={increaseLikes}>+</div>
            <p>{likes}</p>
            <div className="like-minus" onClick={decreaseLikes}>-</div>
        </div>
    )
}

export default Likes