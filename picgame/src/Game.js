import React, { Component } from 'react'
import Pics from './Pics.js';
import pictures from './pictures.json';
import NavBar from './NavBar.js';
//needs this.props.action for counter

let trueClicks = 0;

class Game extends Component {
    state = {
        pictures,
        trueClicks,
    };

    // rightClick = ()=>{ this.
    // }

    render (){
        return (
            <div>
        <NavBar>
            {this.state.pictures.map(picture => (
                <Pics 
                action={this.handler} 
                setClicked = {this.Clicked}
                id={picture.id}
                key={picture.id}
                image={picture.image} />
            ))}
        </NavBar>
        </div>
        )
    }
}
export default Game;