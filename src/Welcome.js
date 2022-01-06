import React, { Component } from 'react';

class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
 /*    const contacts = this.props.contacts; */
    return (
      <div>
         <h1>Hola { this.props.name } </h1>
      
      </div>
    );
  }
}

export default Welcome;
