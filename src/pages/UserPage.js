import React from 'react';

const UserPage = (props) => {
    const {userDetails} = props
    return (
      <>
        {userDetails ? (
            <p>{userDetails.firstName}, {userDetails.lastName}, {userDetails.email}</p>
        ) : (
            <p>Upssss coś poszło nie tak</p>
        )}
        
      </>
    );
  }
  
export default UserPage;
