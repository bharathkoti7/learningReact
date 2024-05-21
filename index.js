// const element = React.createElement("div", null, "Hello World");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./concepts/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);