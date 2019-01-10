import React from 'react';
const Input =(props)=>{
    return (
        <div>
            <form>
                <input type="text" name="name" id="name" onChange={props.dataHeandler} />
                <br />
                <input type="text" name="email" id="email" onChange={props.dataHeandler} />
            </form>

        </div>
    )
}
export default Input;
