import React, { Component } from 'react'
import Counter from './Counter';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeJH6ZkuLPSTkM9WO2FbqGU_5d0UAS2bkRLZZ9owpR&s" />
      <Card.Body>
        <Card.Title>{this.state.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <button onClick={()=>this.toggle()}>show/hide</button>
        {this.state.show && <Counter/> }
      </Card.Body>
    </Card>
       
        
        
        </div>
    )
  }
}
