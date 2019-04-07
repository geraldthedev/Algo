import React from 'react';
import ReactDOM from 'react-dom';

export default class Block1 extends React.Component{
constructor(){
    super();
    this.state ={ data:[] };



    }
    async componentDidMount(){
    const res = await
    fetch('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?&api-key=xsFcDSN2hxkxB7fcj1775KIXA2D566kh')
    const json = await res.json();
    this.setState({data: json.results});





}




    render(){
        const restyle ={
    align: "block",
    width: "50px",
    position: "relative",
    padding: "auto",
    margin: "10px",
    height: "65px",
    borderStyle: "solid",
    boxSizing: "content-box",
    display: "block",



}
      return(
          <div style={restyle}>
        {this.state.data.map(el=>(

        <div>
        {el.author}: {el.title}
        </div>

        ))}



          </div>
      );


    }




}