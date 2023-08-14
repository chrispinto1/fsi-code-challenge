const DeleteModal = ({setDeleteComment}) => {
    return (
            <div className="delete-modal-overlay">
                <div className="delete-modal">
                    <h3>Delete Comment</h3>
                    <p>
                        Are you sure you want to delete this comment? This will remove the comment and cannot be undone.
                    </p>
                    <div>
                        <button onClick={() => setDeleteComment(false)}>No, cancel</button>
                        <button>Yes, cancel</button>
                    </div>
                </div>

            </div>
    )
}

export default DeleteModal