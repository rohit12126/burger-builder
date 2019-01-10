import React,{Component} from 'react';
import UserList from './../Component/UserList';
import UserAdd from './../Component/UserAdd';
import UserSearch from './../Component/UserSearch';

class Task extends Component{
    constructor(props){
        super(props)
        this.state = {
            users:[
                {
                  name: 'Rohit',
                  email:'rohit@gmail.com',
                  age:25,     
                },
                {
                    name: 'Raj',
                    email:'Raj@gmail.com',
                    age:25,     
                },
                {
                    name: 'Chanchal',
                    email:'rohit@gmail.com',
                    age:25,     
                },
                {
                    name: 'Yash',
                    email:'yash@gmail.com',
                    age:25,     
                },
                {
                    name: 'Gulshan',
                    email:'gulshan@gmail.com',
                    age:25,     
                },
                {
                    name: 'anand',
                    email:'anand@gmail.com',
                    age:25,     
                }
            ],
            searchName:'',
            name:'',
            email:'',
            age:'',
            tempUsers:[],
            addBox:'hide',
            searchBox:'show',
            msg:'',

        }
    }
    handelChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        
    }
    handelSearch = (event) => {
        let result = [...this.state.users];
        let search=this.state.searchName;
        result = result.filter(function (item) {
          return (item.name.toLowerCase().search(search) !== -1);
        });
        this.setState({
          tempUsers:this.state.users,  
          users: result
        });
    }
    deleteUser = (index) => {
        let users = this.state.users;
        users.splice(index, 1);
        this.setState({users,
            msg:'user deleted successfully'
        });
        setTimeout(function(){ this.setState({
            msg:''
        })}.bind(this), 3000);
    }
    handelReset (){
        let tempUsers=this.state.tempUsers;
        if(tempUsers.length>0){
            this.setState({
                searchName:'',
                users: tempUsers
            });
        }else{
            this.setState({
                searchName:''
            });
        }
    }
    addUser(){
        this.setState({
            addBox:'show',
            searchBox:'hide'
        });
    }
    handelCancel(){
        this.setState({
            addBox:'hide',
            searchBox:'show'
        });
    }
    submitUser(event)
    {  
        event.preventDefault(); 
        let users=this.state.users;
        users.push({
            name:this.state.name,
            email:this.state.email,
            age:this.state.age,
        })
        this.setState({users,
            addBox:'hide',
            searchBox:'show',
            msg:'user added successfully'
        })
        setTimeout(function(){ this.setState({
                       msg:''
        })}.bind(this), 3000);

    }
    render(){
        return(
            <div >
                
                <div className={'text-center '+this.state.searchBox}>
                <div className="success">{this.state.msg}</div>
                <UserSearch handelChange={this.handelChange} searchName={this.state.searchName} handelSearch={this.handelSearch}  handelReset={this.handelReset.bind(this)} addUser={this.addUser.bind(this)}  />
                <table>
                    <thead>
                        <tr>
                            <td>S.No.</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Age</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody> 
                     { (this.state.users.length>0) ?
                        (<UserList users={this.state.users} deleteUser={this.deleteUser} />) :
                        (<tr><td colspam="5">No Data found</td></tr>) }
                    </tbody>
                </table>
               
                </div>
                <div className={'text-center '+this.state.addBox}>
                    <UserAdd handelCancel={this.handelCancel.bind(this)} submitUser={this.submitUser.bind(this)} handelChange={this.handelChange} />
                </div>
            </div>
        )
    }
}
export default Task;