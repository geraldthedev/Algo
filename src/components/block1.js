import React from 'react';


export default class Block1 extends React.Component{
constructor(props){
    super(props);
    this.state ={ data:[] };
    let i = this.state.data
    let g = 0


    do{
        let h = i[Math.floor(Math.random()*i.length)]
        console.log(h)


    }while(g<i.length, g++)



    }


    async componentDidMount(){
    const res = await
    fetch('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?&api-key=xsFcDSN2hxkxB7fcj1775KIXA2D566kh')
    const json = await res.json();
    this.setState({data: json.results});

    /*let i = this.state.data
    let g = 0

    while(g<i.length, g++){

        let h = i[Math.floor(Math.random()*i.length)]

    }

*/

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
        {h.map(el=>(



        <div>
        {el.author}: {el.title}
        </div>

        ))}



          </div>
      );


    }






}