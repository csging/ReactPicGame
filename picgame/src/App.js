import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js';
import Pics from './Pics.js';
import pictures from './pictures.json';
import _ from 'lodash';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    pictures: [],
    trueClicks: 0,
    counter:0,
    highScore: 0
};
this.handler = this.handler.bind(this);
this.inc = this.inc.bind(this);
}
  
componentDidMount() {
  const array = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      const images = array.map(image => {
        return <button onClick={this.inc} clicked={false}> <img key={image}  src={require(`./images/${image}.jpg`)} alt="" className="img-responsive"  /> </button>
      });
      this.setState({pictures:_.shuffle(images)});
  
}

handler() {
  this.setState({
    counter: this.state.counter + 1
  })
}

inc (e){
  e.preventDefault();
  console.log('I fired')
  const oldPictures = this.state.pictures;
  const pictures = _.shuffle(oldPictures);

console.log(e[0])
  // const clicked = pictures.filter(image => image.id === id);

  if (pictures === "undefined") {

    this.setState({
      counter: 0,
      pictures,
    });
  
  } else {

  this.setState({
    counter:this.state.counter + 1,
    pictures,
  });
  }


};

//incorrect guesses/correct guesses. use map to set attribute
gameOver= ()=>{
  console.log("GAME OVER")
  this.setState({
    counter: 0
  });
}
  render() {
    console.log(this.state.pictures)
    const {counter} = this.state;
    return (
      <div className="App">
        <NavBar counter={counter} />
        <Pics 
          images={this.state.pictures} 
          action={this.handler} 
          clicked={this.clicked}
        />
        </div>
    );
  }
}

export default App;

// import React, { Component } from 'react';
// import './App.css';
// import NavBar from './NavBar.js';
// import Pics from './Pics.js';
// import Game from './Game.js';



// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         {/* <NavBar>
//         <Pics />
//         </NavBar> */}
//         <Game/>
//       </div>
//     );
//   }
// }

// export default App;

// render() {
//   return (
//     <div className="App">
//       <NavBar>
//       <Pics />
//       </NavBar>
//     </div>
//   );
// }

// {this.state.pictures.map(image => (
//   <button className="card"
//   onClick={this.props.action}>
//   <img
//     id={image.id}
//     key={image.id}
//     src={require(`./images/${image}.jpg`)}
//     alt=""
//     className="image"
//    />
//    </button>}