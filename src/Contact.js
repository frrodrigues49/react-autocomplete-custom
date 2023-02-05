import React, { Component } from 'react';

// import { Container } from './styles';

export default class Contact extends Component {
  render() {
    return (
        <li>
            {this.props.contacts.nam} {this.props.contacts.phone}
        </li>
    );
  }
}
