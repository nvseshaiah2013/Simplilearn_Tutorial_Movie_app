import React from 'react';
import {Link} from 'react-router-dom';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount(){
     this.timerID = setInterval(
    () => this.tick(),
    1000
);
    }
    componentWillUnmount()
    {
        clearInterval(this.timerID);
    }
    tick()
    {
        this.setState({date:new Date()});
    }
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default class Layout extends React.Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return(
            <div>    
            <nav class="navbar navbar-default">
            <div class="container-fluid">  
            <div class="navbar-header">
            <p class="navbar-brand">ReactJS !</p>      
            <Link to="movies" class="btn btn-success">Movies </Link> | <Link class="btn btn-primary"to="characters">Characters</Link> 
             </div>
             </div>
             </nav>
             <Clock style={{float:"right"}}/>    
            </div>
        );
    }
}