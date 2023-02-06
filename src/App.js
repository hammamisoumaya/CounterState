import React, { Component } from 'react'
import Counter from './Counter';

export default class App extends Component {
 constructor(){
  super();
  this.state={
    show : false,
    name:"Soumaya"
  }
 }
 toggle=()=>{
this.setState({show: !this.state.show})
 }




  render() {
    return (
      <div>
        <h1> My name is:</h1>
        <h1>{this.state.name}</h1>
        <hr/>
        
        <button onClick={()=>this.toggle()}>show/hide</button>
        {this.state.show && <Counter/> }
        </div>
    )
  }
}



