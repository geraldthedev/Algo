import React from 'react';
import ReactDOM from 'react-dom';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';




export class Block3 extends React.Component{

componentDidMount() {
    this.loadMap();
  }

  loadMap() {
      const {google} = this.props;
      const maps =google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = 14;
      let lat = 37.774929;
      let lng = -122.419416;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);

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
    height:'20vh',
    width:'20vw'


}
      return(
          <div style={restyle} ref ='map'>


          </div>
      );


    }

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCYNP72giyebukZNUTv414E-8mTzO7uamY'
})(Block3)

