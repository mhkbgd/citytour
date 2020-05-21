import React from 'react';
import ReactDOM from 'react-dom';


export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      mobile: null,
      city: '',
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    let mobile = this.state.mobile;
    if (this.state.username == '') {
      alert("Please enter name!");
    }
    if (!Number(mobile)) {
      alert("Your mobile must be a number");
    }else{
      alert("Thank you! Our operator will contact soon");
      
      
    }
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1>Hello {this.state.username}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your mobile number:</p>
      <input
        type='text'
        name='mobile'
        onChange={this.myChangeHandler}
      />
      <p>Enter City</p>
      <input
        type='text'
        name='city'
        onChange={this.myChangeHandler}
      />

      
      <br/>
      <input type='submit' />
      </form>
    );
  }
}