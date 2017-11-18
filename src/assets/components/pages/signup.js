import React, { Component } from 'react';



class SignUp extends Component {
  constructor(props) {
  super(props);
  this.state = {value: ''};

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}
  handleChange(event) {
  this.setState({value: event.target.value});
}

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div className="container-fluid">
          <br/>
          <input className="input" type="text" placeholder="First Name"/><br/>
          <input className="input" type="text" placeholder="Last Name"/><br/>
          <input className="input" type="text" placeholder="Username"/><br/>
          <input className="input" type="text" placeholder="Email"/><br/>
          <button className="button" type="button">Sign Up </button>


      </div >

    );
  }
}


export default SignUp;
