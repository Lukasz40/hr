import React from 'react';
import UserForm from '../pages/UserForm';

const HomePage = (props) => {
    const {user, handlerAddRow} = props
    //console.log(props.loggedInStatus)
    return (
        <div className="home">
            
                <UserForm user={user} handlerAddRow={handlerAddRow} />
            
        </div>
    );
}

export default HomePage;