import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './main.scss';
import './styles.scss';
import BoardView from './components/Board';

const App = () => {
    return <BoardView/> ;
}

const root = createRoot(document.getElementById("root")); 

// ReactDOM.render(<App />, document.getElementById("root"));
root.render(<App />);