import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NumberForm from "./CustomControlls/NumberForm";



class App extends Component {

    numberInitialise = {
        min: 0,
        max: 35,
        step: 3,
        digits: 2,
        unit: 'cm',
        label: "Zahleingabe"
    };


    state = {
        zahl1:15,
        zahl2:12
    };

    constructor(props){
        super(props);
        this.handleNumberChange=this.handleNumberChange.bind(this);
        window.arrangement=this.state;
    }


    handleNumberChange(changeBlock){
        this.setState(current=>{
            current[changeBlock.id]=changeBlock.value;
            console.log(current);
            return current;
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="App-intro container">
                    <NumberForm config={this.numberInitialise} id="zahl1" value={this.state.zahl1} onNumberChange={this.handleNumberChange}/>
                    <NumberForm config={this.numberInitialise} id="zahl2" value={this.state.zahl2} onNumberChange={this.handleNumberChange}/>
                </div>
            </div>
        );
    }
}

export default App;
