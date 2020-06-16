import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import './resources/css/main.css';

import Header from './resources/Components/Header/Header';

import Home from './resources/Components/Home/Home';
import Notes from './resources/Components/Notes/Notes';
import About from './resources/Components/About/About';

import Footer from './resources/Components/Footer/Footer';

function App()
{
  return (
        <BrowserRouter>

            <Header />

            <div className="content">
                <Route exact path='/' component={ Home }/>
                <Route exact path='/notes' component={ Notes }/>
                <Route exact path='/about' component={ About }/>
            </div>

            <Footer />

        </BrowserRouter>
  );
}

export default App;

if (document.getElementById('root'))
{
    ReactDOM.render(<App />, document.getElementById('root'));
}
