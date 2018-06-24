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
      highScore: 0,
      message: "Click all pics once to win!"
  };
this.handler = this.handler.bind(this);
this.inc = this.inc.bind(this);
// this.gameOver = this.gameOver.bind(this);
// this.rightClick = this.rightClick.bind(this);
// this.wrongClick = this.wrongClick.bind(this);
// this.shuffle = this.shuffle.bind(this);
}
  
componentDidMount() {
  const array = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      const images = array.map(image => {
        return <button onClick={this.inc} > <img  src={require(`./images/${image}.jpg`)} alt="" className="img-responsive"  /> </button>
      });
      const falsePics = images.map(item => ({ ...item, clicked: false, key: item }))
      this.setState({pictures:_.shuffle(falsePics)});
      console.log(falsePics)
}

handler() {
  this.setState({
    counter: this.state.counter + 1
  })
}

inc (e){
  e.preventDefault();
  console.log('I fired')
  // this.shuffle();
  const oldPictures = this.state.pictures;
  const pictures = _.shuffle(oldPictures);
  var clicked = this.state.pictures["0"].clicked;
  
  switch(clicked){
    case true:
    console.log("game over");
    alert("You Lose!! Click to play again!");
    
    this.setState({
    message: "Click all pics once to win!",
    counter: 0,
    highScore: (this.state.counter > this.state.highScore) ? this.state.counter : this.state.highScore,
    }); break;

    case false:
    //add way to set clicked to true
    console.log("keep going!");
    var newCount = this.state.counter + 1;
    this.setState({
    counter: newCount,
    pictures,
    }); break;
  }

  if (clicked === false) {
    var newCount = this.state.counter + 1;
    this.setState({
    counter: newCount,
    pictures,
    });
  } 
  else {
    alert("You Lose!! Click to play again!");
  this.setState({
    message: "Click all pics once to win!",
    counter: 0,
    highScore: (this.state.counter > this.state.highScore) ? this.state.counter : this.state.highScore,
  });
  }
};

shuffle=()=>{
  const oldPictures = this.state.pictures;
  const pictures = _.shuffle(oldPictures);
  this.setState({pictures})
}

wrongClick = () => {
  this.setState({
    message: "You Lose!! Click to play again!",
    counter: 0,
    highScore: (this.state.counter > this.state.highScore) ? this.state.counter : this.state.highScore,
  });
}

rightClick = () => {
  var newCount = this.state.counter + 1;
  this.setState({
    counter: newCount,
    pictures
  });
}

gameOver=()=>{
  this.setState({
    counter: 0,
    message: "Click all pics once to win!"
  });
};
// handleInputChange = event => {
//   this.setState({ counter });
// };

// handleClick(e) {
//   e.preventDefault();
//   const clickedPic = this.state.pictures["0"].clicked;
//   switch(clickedPic) {
//     case true:
//     case false:
//   }
// }

  render() {
    console.log(this.state.pictures)
    const {counter} = this.state;
    const {message} = this.state;
    const {highScore} = this.state;

    return (
      <div className="App">
        <NavBar counter={counter} message={message} highScore={highScore} />
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