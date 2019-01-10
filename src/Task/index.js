import React,{Component} from 'react';
import Validation from './Validation';
import CharComponent from './CharComponent';

class Task extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:""
        }
    }
    handelChange = (event) => {
        let name = event.target.value;
        this.setState({name})
    }
    handelDelete = (index) => {
        let name = this.state.name;
        name = name.split('');
        name.splice(index, 1);
        name = name.join('');
        this.setState({name});
    }
    render(){
        return(
            <div className="text-center">

                <input type="text" name="name" value = {this.state.name} onChange = {this.handelChange} />
                {this.state.name.length > 0 ?
                    <div>
                        <Validation charLen= {this.state.name.length} />
                        <CharComponent char={this.state.name.split('')} handelDelete={this.handelDelete} />
                    </div>
                    : ''
                }
            </div>
        )
    }
}
export default Task;