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
      guesses: [],
      counter:0,
      highScore: 0,
      message: "Click all pics once to win!"
  };
this.handler = this.handler.bind(this);
  }
  
componentDidMount() {
  this.setState({pictures})
}

handler() {
  this.setState({
    counter: this.state.counter + 1
  })
}



shuffle=()=>{
  const oldPictures = this.state.pictures;
  const shuffPics = _.shuffle(oldPictures);
  this.setState({pictures: shuffPics})
}

wrongClick = () => {
  this.setState({
    message: "You Lose!! Click to play again!",
    counter: 0,
    highScore: (this.state.counter > this.state.highScore) ? this.state.counter : this.state.highScore,
    guesses:[]
  });
  this.shuffle();
}

rightClick = () => {
  var newCount = this.state.counter + 1;
  this.setState({
    counter: newCount,
    message: "keep going!"
  });
  if (newCount===9) {
    this.setState({message: "you win!"});
  }
this.shuffle();
}

handleClick = id => {
  console.log(id)
  console.log("right direction")
  if(this.state.guesses.indexOf(id)=== -1) {
    this.rightClick();
    this.setState({
      guesses: this.state.guesses.concat(id)
    });
  } else {
    this.wrongClick();
  }
}
  render() {
    const {counter} = this.state;
    const {message} = this.state;
    const {highScore} = this.state;

    return (
      <div className="App">
        <NavBar counter={counter} message={message} highScore={highScore} />
        {this.state.pictures.map(pic => (
          <Pics 
          handleClick={this.handleClick}
          rightClick={this.rightClick}
          wrongClick={this.wrongClick}
          shuffle={this.shuffle}
          key={pic.id}
          id={pic.id}
          image={pic.image}
          />
        ))}
        
        </div>
    );
  }
}

export default App;