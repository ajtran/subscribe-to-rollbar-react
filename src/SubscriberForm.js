import React, { Component } from 'react';

import './SubscriberForm.css';


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

  validateFirstName = () => {
    const { firstName } = this.state;

    if (firstName.length === 0) {
      return { valid: false, message: 'First name is required.' };
    }

    return { valid: true };
  }

  validateLastName = () => {
    const { lastName } = this.state;

    return { valid: true };
  }

  validateNumber() {
    const { number } = this.state;

    return { valid: true };
  }

  validateEmail() {
    const { email } = this.state;

    return { valid: true };
  }

  validateForm = () => {
    const errors = {};

    const firstNameRes = this.validateFirstName()
    if (!firstNameRes.valid) {
      errors.firstName = firstNameRes.message;
    }

    const lastNameRes = this.validateLastName()
    if (!lastNameRes.valid) {
      errors.lastName = lastNameRes.message;
    }

    const numberRes = this.validateNumber()
    if (!numberRes.valid) {
      errors.number = numberRes.message;
    }

    const emailRes = this.validateEmail()
    if (!emailRes.valid) {
      errors.email = emailRes.message;
    }

    return errors;
  }

  submitForm = (event) => {
    event.preventDefault();

    const errors = this.validateForm();
    if (Object.keys(errors).length === 0) {
      this.setState({ submitted: true });
    } else {
      this.setState({ errors });
    }
  }

  handleChange = ({ target: { id, value } }) => {
    const { errors } = this.state;

    this.setState({
      [id]: value,
      errors: {
        ...errors,
        [id]: '',
      },
    });
  }

  renderSuccessMessage() {
    return (
      <div>
        Thanks for subscribing
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
