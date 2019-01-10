import React from 'react';


const Validation = (props) => {
    let msg = "Text is long";
    let msgClass ="success"
    if( props.charLen < 5 ){
        msg = "Text too short";
        msgClass= 'error';
    }
    return <p className={msgClass}>{msg}</p>
}
export default Validation