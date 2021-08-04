import {useState} from 'react';

const userObj = {
    name: "shubham",
    age: 23,
    city: "Moradabad"
};

const updatedUser = {
    ...userObj,
    city: "Gurugram",
    state: "Haryana"
}

export const User = () => {
    const [user, setUser] = useState(userObj);
    return (
        <div>
            <button onClick={() => setUser(updatedUser)}>Click me to update</button>
            <h1>{user.state ? user.state : user.city}</h1>
        </div>
    )
}