import React from 'react';



export default class Block3 extends React.Component{

        constructor(props){
        super(props);
        this.state ={data:[]}
}



async componentDidMount(){

    function initMap(){
         const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyCYNP72giyebukZNUTv414E-8mTzO7uamY'

});

googleMapsClient.geocode({
  address: '1600 Amphitheatre Parkway, Mountain View, CA'
}, function(err, response) {
  if (!err) {
    console.log(response.json.results);
  }
});
}
initMap()
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
          <div style={restyle} id='map'>

          </div>
      );


    }


}