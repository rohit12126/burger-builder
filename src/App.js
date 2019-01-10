import React, { Component } from 'react';
import Person from './Person/Person';
import Input from './Person/Input';
import Output from './Person/Output';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name:'',
      email:'',
      persons: [
        {id: '34',name: 'SH', age:28},
        {id: 'hfg',name: 'dsf', age: 34}
      ]
    }
    this.handleClick = this.handleClick.bind(this);
    this.dataHeandler=this.dataHeandler.bind(this);
  }

  handleClick(arg, event) {
    const persons = [...this.state.persons];
    persons.push({id:'12',name:'fg', age:45 });
   
    console.log(persons);
    console.log(this.state);
    this.setState({
      persons:persons,
    })

   
  }
  dataHeandler(e){
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    console.log(this.state.persons);
    const persons = this.state.persons.map((person) => {
      return (<Person key={person.id} name={person.name} >Age: {person.age}</Person>)
    })
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Input dataHeandler={this.dataHeandler}/>
        <Output data={this.state} />

        <button onClick={this.handleClick}>Click</button>
        {persons}
      </div>
    );
  }
}

export default App;
