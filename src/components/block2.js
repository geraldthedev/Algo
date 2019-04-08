import React from 'react';
import { METHODS } from 'http';

export default class Block2 extends React.Component{

    constructor(props){
    super(props);
    this.state ={data:[]}
}


async componentDidMount(){
    const res = await
    fetch('https://geek-jokes.sameerkumar.website/api',{
        method: 'GET',
    })
    const json = await res.json();
    this.setState({data: json});
}
    render(){
        const restyle ={
    align: "block",
    position: "relative",
    padding: "auto",
    margin: "10px",
    borderStyle: "solid",
    boxSizing: "content-box",
    display: "block",


}
      return(
          <div style={restyle}>
       {this.state.data}
          </div>
      );


    }


}