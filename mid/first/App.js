import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(){
  super();
  this.state = {
    home: false,
    about: false,
    contact:false
  }
}
isClicked(e){
      this.setState({
            home: e.target.value,
            about: e.target.value,
            contact: e.target.value
        })
    }
  render() {
    var changeView={};
    if(!this.state.isClicked){
    	/*		changeView.color = '#00f';*/
          changeView.backgroundcolor='#00f';
          /*changeView.display = '#00f';*/
    		}else{
    			/*changeView.color = '#fff';*/
          changeView.backgroundcolor = '#fff';

    		}
    return (
      <div className="App">
      <h1>First task</h1>
        <button className="div" onClick = {this.isClicked.bind(this)} style={changeView} value = {this.state.home}>Home</button>
        <button className="div" onClick = {this.isClicked.bind(this)} style={changeView} value = {this.state.about}>About</button>
        <button className="div" onClick = {this.isClicked.bind(this)} style={changeView} value = {this.state.contact}>Contact</button>
      </div>
    );
  }
}

export default App;
