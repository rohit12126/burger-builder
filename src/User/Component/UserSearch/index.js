import React from 'react';

const UserSearch = (props) => {
      return (
        <table className="responsive table_head" cellpadding="5">          
                <thead>           
                    <tr>               
                        <th width="30%">Name</th>
                        <th width="70%">Action</th>
                    </tr>
                </thead>
            <tbody>
                <tr>
                    <td width="30%">                      
                        <input type="text" className="form-control" name="searchName" onChange={props.handelChange} placeholder="Name" value={props.searchName} />
                    </td>
                    <td width="70%" className="text-right"> 
                        <button id="submit" className="btn btn-primary tooltips" rel="tooltip" data-placement="top" data-original-title="Search Reports" type="submit" onClick={props.handelSearch}>Search</button> 
                        <button onClick={props.handelReset}> Reset</button> 
                        <button onClick={props.addUser}> Add User</button>
                    </td>
                </tr> 
            </tbody>
        </table>   
      )
}
export default UserSearch