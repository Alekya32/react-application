import React,{Component} from 'react';

class Header extends React.Component{
    render(){
        return(
            <header>
                        <img src="./images/logo.png" alt="Pluton theme"/>
                        <nav className="menuItems">
                                        <a href="#">Home</a> 
                                        <a href="#">About</a> 
                                        <a href="#">Client</a>
                                        <a href="#">Portfolio</a>
                                        <a href="#">Contact</a>
                        </nav>
            </header>
        );
    }
}

export default Header;