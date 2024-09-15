import React, { Component } from 'react'
import Dynamic2 from './Dynamic2'
import { colors } from '@mui/material';
 class Dynamic1 extends Component {
    state={count:0}
        handleAdd=()=>
        {
            this.setState({count:this.state.count+1});
        }
  render() {
        
      return (
        <div style={{textAlign:'center'}}>
            <button onClick={this.handleAdd} style={{background:'blue',width:'150px',height:'40px',border:'lightblue',borderRadius:'10px',color:'white'}}>Add To Cart</button>
            <Dynamic2 data={this.state.count}/>
        </div>
      )
  }
}

export default Dynamic1
