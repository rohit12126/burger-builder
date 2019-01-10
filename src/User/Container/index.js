import React,{Component} from 'react';
import UserList from './../Component/UserList';
import UserAdd from './../Component/UserAdd';
import UserSearch from './../Component/UserSearch';
import getRequest from '../Api/getData';
import sendRequest from '../Api/fetchData';
import UserDetail from './../Component/UserDetails'
class Task extends Component{
    constructor(props){
        super(props)
        this.state = {
            posts:[],
            postDetail:[],
            searchName:'',
            name:'',
            email:'',
            age:'',
            tempUsers:[],
            addBox:'hide',
            viewBox:'hide',
            searchBox:'show',
            msg:'',

        }
    }
    componentDidMount()
    {
        getRequest('posts').then(resp => {
            if(resp.status===200){
                this.setState({posts:resp.data});
            }else{
                alert(resp);
            }    
        })
    }
    handelChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        
    }
    handelSearch = (event) => {
        let result = [...this.state.posts];
        let search=this.state.searchName;
        result = result.filter(function (item) {
          return (item.title.toLowerCase().search(search) !== -1);
        });
        this.setState({
          tempPosts:this.state.posts,  
          posts: result
        });
    }
    deleteUser = (index) => {
        getRequest('posts/'+index).then(resp => {
            if(resp.status===200){
                this.setState({
                    msg:'user deleted successfully'
                });
                setTimeout(function(){ this.setState({
                    msg:''
                })}.bind(this), 3000);
            }else{
                alert(resp);
            }
        })
        
    }
    viewUser = (index) => {
        getRequest('posts/'+index).then(resp => {
            console.log(resp);
            if(resp.status===200){
                console.log(resp.data);
                this.setState({
                    postDetail:resp.data,
                    addBox:'hide',
                    viewBox:'show',
                    searchBox:'hide'
                });
            }else{
                alert(resp);
            }
        })
        
    }
    handelReset (){
        let tempPosts=this.state.tempPosts;
        if(tempPosts.length>0){
            this.setState({
                searchName:'',
                posts: tempPosts
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
            viewBox:'hide',
            searchBox:'hide'
        });
    }
    handelCancel(){
        this.setState({
            addBox:'hide',
            viewBox:'hide',
            postDetail:[],
            searchBox:'show'
        });
    }
    submitUser(event)
    {  
        event.preventDefault(); 
        let data={
            title:this.state.name,
            body:this.state.email,
        };
        sendRequest('posts',data).then(resp => {
            if(resp.status===200 || resp.status===201){
                console.log(resp.data);
                let posts=this.state.posts;
                posts.unshift(resp.data);
                console.log(posts);
                this.setState({
                    posts:posts,
                    addBox:'hide',
                    searchBox:'show',
                    viewBox:'hide',
                    msg:'user added successfully'
                })
                setTimeout(function(){ this.setState({
                               msg:''
                })}.bind(this), 3000);
            }else{
                alert(resp);
            }    
        })
        
        
        
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
                            <td>Title</td>
                            <td>Body</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody> 
                     { (this.state.posts.length>0) ?
                        (<UserList posts={this.state.posts} deleteUser={this.deleteUser} viewUser={this.viewUser} />) :
                        (<tr><td colspam="5">No Data found</td></tr>) }
                    </tbody>
                </table>
               
                </div>
                <div className={'text-center '+this.state.addBox}>
                    <UserAdd handelCancel={this.handelCancel.bind(this)} submitUser={this.submitUser.bind(this)} handelChange={this.handelChange} />
                </div>
                <div className={'text-center '+this.state.viewBox}>
                 {(!Array.isArray(this.state.postDetail)) ? 
                    <UserDetail post={this.state.postDetail} handelCancel={this.handelCancel.bind(this)} />
                      : null }  
                </div>    
            </div>
        )
    }
}
export default Task;