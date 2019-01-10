import React from 'react';

const UserDetails = (props) => {
        console.log(props.post);
        return <div  >
                <h2>Post Detail</h2>
                <p>{props.post.id}</p>
                <p>{props.post.title}</p>
                <p>{props.post.body}</p>
                <div><button type="button" onClick={props.handelCancel}> Cancel</button></div>
        </div>
    
}

export default UserDetails