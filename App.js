import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namste React using JSX
  </h1>
);

// React Funcitonal Component
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading ">Namaster react Fucntion Component🚀 </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
