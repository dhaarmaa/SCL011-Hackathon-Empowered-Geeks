import React, { Component } from 'react';
import '../../style.css';


class Navigation extends Component {
    render(){
        return(
            <header>
                 <Link to={this.props.to} className="Navigation-link">{this.props.name}</Link>
                 <h1>Titulo</h1>
            </header>
                   
                   
          
        )
    }
}

export default  Navigation;