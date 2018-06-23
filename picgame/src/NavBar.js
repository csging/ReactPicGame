import React, {Component} from "react";
// import { Link } from "react-router-dom";

class NavTabs extends Component {
    render(){
return (
  <div className="container-fluid">
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="navbar-header">
    <a className="navbar-brand" href="/">
      Home
    </a>
    </div>
    <span className="counter navbar-brand mb-0 h1">
      Score: {this.props.counter}
    </span>
    <a className="navbar-brand mb-0 h1 navbar-right justify-right" href="https://github.com/csging/">
        My Github
    </a>
  </nav>
  </div>
)}
};

export default NavTabs;

// onClick={(e)=> this.inc(e)} to increment counter
