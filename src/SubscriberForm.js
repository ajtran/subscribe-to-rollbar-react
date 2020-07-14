import React, { Component } from 'react'

import './SubscriberForm.css'


const NUMS = '1234567890';

class SubscriberForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      number: '',
      email: '',
      submitted: false,
      errors: {},
    };
  }

  isValidName(id, value) {
    if (value.length === 0) {
      this.setState({ errors: { [id]: 'Name is required.' } });
      return false;
    }

    for (let i = 0; i < value.length; i++) {
      if (NUMS.indexOf(value.charAt(i)) !== -1) {
        this.setState({ errors: { [id]: 'Name cannot contain numbers.' } });
        return false;
      }
    }
    return true;
  }

  validateNumber(number) {
    if (number.length === 0) {
      this.setState({ errors: { number: 'Phone Number is required.' } });
      return false;
    }

    for (let i = 0; i < number.length; i++) {
      if (NUMS.indexOf(number.charAt(i)) === -1) {
        this.setState({ errors: { number: 'Phone Numbers can only contain numbers.' } });
        return false;
      }
    }

    if (number.length !== 10) {
      this.setState({ errors: { number: 'Phone Numbers must be 10 digits.' } });
      return false
    }

    return true;
  }

  validateEmail(email) {
    if (email.length === 0) {
      this.setState({ errors: { email: 'Email is required.' } });
      return false;
    }

    if (email.indexOf('@') === -1) {
      this.setState({ errors: { email: 'Email must contain @.' } });
      return false;
    }

    if (email.indexOf('@') === 0) {
      this.setState({ errors: { email: 'Email must not start with @.' } });
      return false
    }

    return true;
  }

  isValidState = () => {
    const {
      firstName,
      lastName,
      number,
      email,
    } = this.state;

    return (
      this.isValidName('firstName', firstName) &&
      this.isValidName('lastName', lastName) &&
      this.validateNumber(number) &&
      this.validateEmail(email)
    );
  }

  submitForm = (event) => {
    event.preventDefault();

    if (this.isValidState()) {
      this.setState({ submitted: true });
    }
  }

  handleChange = ({ target: { id, value } }) => {
    this.setState({
      [id]: value,
      errors: {},
    });
  }

  renderSuccess() {
    return (
      <div>
        Thanks for subscribing!
      </div>
    )
  }

  renderForm() {
    const {
      firstName,
      lastName,
      number,
      email,
      errors,
    } = this.state;

    return (
      <div>
        <form className="Form-content" onSubmit={this.submitForm}>
          {errors.firstName && <span className="Form-error">{errors.firstName}</span>}
          <input className="Form-label" id="firstName" value={firstName} onChange={this.handleChange} type="text" placeholder="your first name,"/>
          {errors.lastName && <span className="Form-error">{errors.lastName}</span>}
          <input className="Form-label" id="lastName" value={lastName} name="Name" onChange={this.handleChange} type="text" placeholder="last name,"/>
          {errors.number && <span className="Form-error">{errors.number}</span>}
          <input className="Form-label" id="number" value={number} name="Number" onChange={this.handleChange} type="text" placeholder="phone number,"/>
          {errors.email && <span className="Form-error">{errors.email}</span>}
          <input className="Form-label" id="email" value={email} name="Number" onChange={this.handleChange} placeholder="and email address"/>
          <button className="Form-button" type="submit">Subscribe</button>
        </form>
      </div>
    );
  }

  render() {
    const { submitted } = this.state;

    return (!submitted)
      ? this.renderForm()
      : this.renderSuccess()
  }
}

export default SubscriberForm;
