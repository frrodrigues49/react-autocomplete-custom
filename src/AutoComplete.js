import React, { Component } from 'react';
import Contact from './Contact';


export default class AutoComplete extends Component {
    constructor(){
        super();
        this.state = {
            search: ' '
        }
    }

    updateSearch(event) {
        this.setState({search: event.target.value.substr(0,20)});
    }
  render() {
      let filredContacts = this.props.contacts;
    return(
        <div>
            <ul>
                {this.props.contacts.map((contact) => {
                    return <Contact contact={contact} />
                })}
            </ul>

            <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
        </div>
    );
  }
}
