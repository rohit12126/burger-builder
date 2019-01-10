import React from 'react';

const UserList = (props) => {
      return props.users.map((user, index) => {
        return <tr key={index} >
                <td>{index+1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td><button onClick={(e) => props.deleteUser(index)}>Delete</button>
                {/* <button onClick={(e) => props.viewUser(index)}>View</button> */}
                </td>
        
        </tr>
    })
}

export default UserList