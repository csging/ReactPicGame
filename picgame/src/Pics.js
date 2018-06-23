import React, {Component} from "react";

class Pics extends Component {
  handleInput = event => {
    event.preventDefault();
  }
  render() {
return (
  <div className="container">
                <footer className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                       {this.props.images}
                    </div>
                </footer>
            </div>
)
}};
export default Pics;
