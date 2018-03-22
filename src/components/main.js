import React,{Component} from 'react';
import Header from '../components/header';
import Body from '../components/body';

class Main extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <Header/>
                <Body/>
            </React.Fragment>
        );
    }
}
export default Main;