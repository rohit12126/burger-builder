import React from 'react';

const AddUser = (props) => {
      return (
        <div>
            <h2>Add User</h2>
            <form method="post" onSubmit={props.submitUser}>
                <div>Name: <input type="text" name="name"  className="form-control" onChange={props.handelChange} /></div>
                <div>Email: <input type="text" name="email"  className="form-control" onChange={props.handelChange} /></div>
                <div>Age: <input type="text" name="age"  className="form-control" onChange={props.handelChange} /></div>
                <div><button>Save</button> <button type="button" onClick={props.handelCancel}> Cancel</button></div>
            </form>
        </div> 
      )
}
export default AddUser