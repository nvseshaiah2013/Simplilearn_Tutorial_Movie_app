import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './js/components/Layout';
import Characters from './js/components/characters/Characters.js';
import Movies from './js/components/movies/Movies.js';
import Home from './js/components/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory';
const Error = ()=>{
    return(
        <h4>Error : Page Not Found</h4>
    );
}
const app = document.getElementById('app');
// const bhistory =createBrowserHistory();
ReactDOM.render(<BrowserRouter>
<div>

{'Welcome to the React App'}
<Layout/>
<Switch>
    <Route path="/" component={Home} exact />
    <Route path="/movies" component={Movies}/>
    <Route path="/characters" component={Characters}/>
    <Route component={Error}/>
</Switch>
</div>
</BrowserRouter>,app);