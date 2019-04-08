import React from 'react';
import { METHODS } from 'http';

export default class Block2 extends React.Component{

    constructor(props){
    super(props);
    this.state ={data:[]}
}


async componentDidMount(){
    const res = await
    fetch('https://www.poemist.com/api/v1//randompoems')
    const json = await res.json();
    this.setState({data: json.results});
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
       {this.state.data.map(el=>(

        <div>
        {el.quote}
        </div>

        ))}
          </div>
      );


    }


}