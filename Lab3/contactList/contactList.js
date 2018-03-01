import React, { Component } from 'react';
import './contactList.css';
import Header from './header';

class Contact{
  constructor(name, phone){
    this.name = name;
    this.phone = phone;
  }

}

class ContactList extends Component {
  constructor(props){
    super(props);
    this.state = {
      contact_list : [],
      copyArr : [],
      name: '',
      phone_number: '',
      searchText : ''
    };

    this.nameInputChnaged = this.nameInputChnaged.bind(this);
    this.phoneInputChanged = this.phoneInputChanged.bind(this);
    this.addContact = this.addContact.bind(this);
    this.search = this.search.bind(this);
  }

  nameInputChnaged(e){
    this.setState({
      name : e.target.value
    });
  }

  phoneInputChanged(e){
    this.setState({
      phone_number : e.target.value
    });
  }

  search(e){
    if(e.target.value ===''){
      console.log("empty");
      this.setState({
        contact_list : this.state.copyArr.slice(),
        searchText : e.target.value
      });
    }
    else{
      var idx = -1;
      for(var i = 0; i < this.state.contact_list.length; i++){
        if(this.state.contact_list[i].name === e.target.value || this.state.contact_list[i].phone === e.target.value){
          idx = i;
          break;
        }
      }
      if(idx !== -1){
        this.setState({
          contact_list: this.state.contact_list.splice(idx, 1),
          searchText : e.target.value
        });
      }
      else if(idx === -1){
        this.setState({
          contact_list : this.state.copyArr.slice(),
          searchText : e.target.value

        });
      }
    }
  }

  addContact(){
    if(this.state.name !== '' && this.state.phone !== ''){
      var newState = this.state.contact_list;
      newState.push(new Contact(this.state.name, this.state.phone_number));
      this.setState({
        contact_list : newState,
        copyArr : newState,
        name : '',
        phone_number : ''
      });
    }
  }

  deleteContact(idx){
    this.setState({
      copyArr : this.state.copyArr.filter((c, index) => index !== idx),
      contact_list : this.state.contact_list.filter((c, index) => index !== idx)
    });
  }

  render() {
    return (
      <div className="wrapper">
              <Header />
        <input placeholder = "Search" onChange = {this.search} value = {this.state.searchText}/>

        <div className = "contact_form">
          <input placeholder = "Name" onChange = {this.nameInputChnaged} value = {this.state.name}/>
          <input placeholder = "Phone" onChange = {this.phoneInputChanged} value = {this.state.phone_number}/>
          <br/>
          <button onClick = {this.addContact}>Add contact</button>

        </div>

        <div>
          <ul>
            {
              this.state.contact_list.map((contact, index) =>
                <div key = {index} className = "div_contact">
                  <li>
                    <p className = "contact_name_field">{contact.name}</p>
                    <p className = "contact_phone_field">{contact.phone}</p>
                    <button className = "button_delete" onClick = {this.deleteContact.bind(this, index)}>Delete</button>
                  </li>
                </div>
              )
            }
          </ul>
        </div>

    </div>
    );
  }
}

export default ContactList;
