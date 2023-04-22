// import React from 'react';
// // import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';
// import './main.scss';
// import './styles.scss';
// import BoardView from './components/Board';

// const App = () => {
//     return <BoardView/> ;
// }

// const root = createRoot(document.getElementById("root")); 

// // ReactDOM.render(<App />, document.getElementById("root"));
// root.render(<App />);

// import React from "react";
// import ReactDOM from "react-dom";
// import BoardView from "./components/Board";
// import "./main.scss";
// import "./styles.scss";

// const App = () => {
//     return <BoardView />;
// };

// ReactDOM.render(<App />, document.getElementById("root"));


import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/styles/app.scss";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);