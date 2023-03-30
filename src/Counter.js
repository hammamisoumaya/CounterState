import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(){
    console.log('constructor')
    super();
    this.state={
        Counter:0,
        timer:0,
        interval: null
    }}


componentDidMount(){
    console.log('componentDidMount');
    this.setState({
        interval:setInterval(
            ()=>this.setState({timer:this.state.timer +1}),1000
        )
    })

}

//update du compartiment
componentDidUpdate(){
    console.log("il y a un update")
   console.log(this.state.timer)}

//Kill 
componentWillUnmount(){
console.log("you killed me")
clearInterval(this.state.interval)


}







//counter.....................................................................
  
increment=()=>{
    this.setState({Counter :this.state.Counter +1})

}
decrement=()=>{
    if(this.state.Counter>0){
    this.setState({Counter :this.state.Counter -1})

}}

reset=()=>{
this.setState({Counter:0})
}


//counter.....................................................................

  render() {
    return (
      <div>
        <button onClick={this.increment}> plus</button>
        <button onClick={this.decrement}>moins</button>
        <button onClick={this.reset}>reset</button>
        <p>{this.state.Counter} </p>
        <hr/>
        <p>timer</p>
        <p>{this.state.timer}</p>
        
      </div>
    )
  }
}
