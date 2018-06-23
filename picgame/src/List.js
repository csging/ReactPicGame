import React from "react";
// import pics from './Pics';

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
const List = props => (
  <ul className="list-group">
    {props.pics.map(item => (
      <li className="list-group-item" key={item.id}>
       <div> {item.src} </div>
      </li>
    ))}
  </ul>
);

export default List;
