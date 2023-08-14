import React, { useState } from 'react';
export const CommContext = React.createContext('');

const CommentContext = ({ subComponents }) => {
    const [comment, setComments] = useState(null);
    const [currUser, setCurrUser] = React.useState(null);
    return (
        <CommContext.Provider value={{commentsArr: [comment, setComments], user: [currUser, setCurrUser]}}>
            {subComponents}
        </CommContext.Provider>
    )
}
export default CommentContext;