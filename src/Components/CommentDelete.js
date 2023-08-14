import { useState } from "react"
import DeleteModal from "./DeleteModal"

const CommentDelete = () => {

    const [deleteComment, setDeleteComment] = useState(false)

    return (
        <div>
            <p className="comment-delete" onClick={() => setDeleteComment(true)}>
                <img src="./images/icon-delete.svg"/>Delete
            </p>
            {
                deleteComment ? 
                <DeleteModal setDeleteComment={setDeleteComment}/>
                :
                null
            }
        </div>
    )
}

export default CommentDelete