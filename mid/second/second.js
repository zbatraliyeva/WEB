import React, { Component } from 'react';
import './second.css';

class Second extends Component {

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
          changeView.hover=true;
          /*changeView.display = '#00f';*/
    		}

    return (
      <div className="App">
      <h1>Products</h1>
      <ul>
      <li>  <button className="div" onClick = {this.isClicked.bind(this)} style={changeView} value = {this.state.home}>One</button></li>
      <li>  <button className="div" onClick = {this.isClicked.bind(this)} style={changeView} value = {this.state.about}>two</button></li>
      <li>  <button className="div" onClick = {this.isClicked.bind(this)} style={changeView} value = {this.state.contact}>three</button></li>
        </ul>
      </div>
    );
  }
}

export default Second;
