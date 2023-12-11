import React from "react";


class Counter extends React.Component{
  count = 0;
 
  state={
    count :0
  }

  Inc = () => {
    this.setState({count : this.state.count + 1 })
  }

  set = () =>{
    this.setState({count: 0})
  }


  

  render () {
    let Dec = () =>{
      
      if (this.state.count>0){
        this.setState({count:this.state.count-1})
      } 
    }

    return(
      <>

        <h1>Counter App</h1>
        <h1>{this.state.count}</h1>
        
        <div className="buttonsdiv">
          <button onClick={this.Inc}>+</button>
          <button onClick={Dec}>-</button>
          <button onClick={this.set}>Reset</button>
        </div>
      </>
    )
  }

}

export default Counter;