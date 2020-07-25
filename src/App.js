import React, { Component } from 'react';
import './App.css';
import Display from './components/Display/Display';
import ButtonPad from './components/ButtonPad/ButtonPad';
import Operate from '../src/Logic/Operate';


class App extends Component {

  state={
    expr : '',
    lastPressed: '',
    lastExpr: ''
  }

  takeExpressionHandler = (btnName) => {
    this.setState(Operate(this.state , btnName));
  }
  
    render(){
      return(
      <div className="App">
      <Display expression = {this.state.expr} lastExpression = {this.state.lastExpr}/>
      <ButtonPad clicked = {this.takeExpressionHandler}/>
    </div>
      )
    }
}

export default App;
