import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// Eventually all commented out and added to the App.jsx file
//import Heading from "./Heading"; // Import react components from their files
//import List from "./List";

// React components have capital first letter (Pascal-case)
//  Note: Commented out because it was moved to Heading.jsx file
//function Heading() {
//  return <h1>My Favourite Foods</h1>;
//}

// React HTML elements are inserted by name and if the element has no children then best practice is to use a self-closing bracket
ReactDOM.render(<App />, document.getElementById("root"));
