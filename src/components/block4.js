import React from 'react';

export default class Block4 extends React.Component{

    constructor(props){
    super(props);
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



}
      return(
          <div style={restyle}>
        <section>
        <div>
        Block4
        </div>

        </section>
          </div>
      );


    }


}