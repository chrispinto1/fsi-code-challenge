import React, { useState } from 'react';
export const UserContext = React.createContext('');

const CurrentUserContext = ({ subPages }) => {
    const [ser, setUser] = useState('');
    return (
        <UserContext.Provider value={[user, setUser]}>
            {subPages}
        </UserContext.Provider>
    )
}
export default CurrentUserContext;