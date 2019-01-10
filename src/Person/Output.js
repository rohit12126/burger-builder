import React from 'react';
const Output=(props)=>{
    console.log(props);
    return(
        <div>
            <p>{props.data.name}</p>
            <p>{props.data.email}</p>
        </div>
    )
}
export default Output;