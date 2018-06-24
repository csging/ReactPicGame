import React, {Component} from "react";

class NavTabs extends Component {
    render(){
return (
  <div className="container-fluid">
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <span className="navbar-brand mb-0 h1 mr-auto">
      Click-a-Pic
    </span>
    <span className="navbar-brand mb-0 h1">
    {this.props.message}
    </span>
    <span className="counter navbar-brand mb-0 h1 ml-auto">
      Score: {this.props.counter}
    </span>
    <span className="counter navbar-brand mb-0 h1 ml-auto">
      High Score: {this.props.highScore}
    </span>
  </nav>
  </div>
)}
};
export default NavTabs;

// onClick={(e)=> this.inc(e)} to increment counter
