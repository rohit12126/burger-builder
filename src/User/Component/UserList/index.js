import React from 'react';

const UserList = (props) => {
      return props.posts.map((post, index) => {
        return <tr key={index} >
                <td>{index+1}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td><button onClick={(e) => props.deleteUser(post.id)}>Delete</button>
                <button onClick={(e) => props.viewUser(post.id)}>View</button>
                </td>
        
        </tr>
    })
}

export default UserList