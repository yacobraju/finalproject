import React, { Component } from "react";
import Input from "./input";
import Joi from "joi-browser";
import { toast } from "react-toastify";
  class Registration extends Component {
    state = {
      account: {
        firstname: "",
        lastname: "",
        email: "",
        password: ""
      },
      errors: {}
    };
    schema = {
      firstname: Joi.string()
        .min(5)
        .required(),
      lastname: Joi.string()
        .min(5)
        .required(),
      email: Joi.string()
        .min(5)
        .required(),
      password: Joi.string().required()
    };
  
    //validations
  
    handleFormSubmit = event => {
      event.preventDefault();
      toast("Registration successful");
      this.props.history.replace("/login");
      const errors = {};
      
      console.log(errors);
    };
  
    //HANDLE IN PUT FIELD
    handleInputField = event => {
      const account = {};
      const errors = {};
      const { name, value } = event.currentTarget;
      //console.log(event.currentTarget.name);
      //console.log(event.currentTarget.value);
      account[name] = value;
      this.setState({ account });
  
      //validation
  
      const obj = { [name]: value };
      const sch = { [name]: this.schema[name] };
      console.log(obj);
      console.log(sch);
      console.log(Joi.validate(obj, sch));
      const result = Joi.validate(obj, sch);
      if (result.error !== null) {
        errors[name] = result.error.details[0].message;
        this.setState({ errors });
      } else {
        this.setState({ errors });
      }
    };
    render() {
      return (
        <div>
          <div className="container">
            <div className="row">
              <div className="col-3"></div>
              <div className="col-6 p-3 mt-4 bg-light">
                <form onSubmit={this.handleFormSubmit}>
                  <h1 class="text-center text-warning bg-info">Register</h1>
                  <Input
                    inputName="firstname"
                    value={this.state.account.firstname}
                    type="text"
                    handleInputField={this.handleInputField}
                    lable="First Name"
                    error={this.state.errors.firstname}
                    required="true"
                  />
                  <Input
                    inputName="lastname"
                    value={this.state.account.lastname}
                    type="text"
                    handleInputField={this.handleInputField}
                    lable="Last Name"
                    error={this.state.errors.lastname}
                  />
                  <Input
                    inputName="email"
                    value={this.state.account.email}
                    type="email"
                    handleInputField={this.handleInputField}
                    lable="Email"
                    error={this.state.errors.email}
                  />
                  <Input
                    inputName="password"
                    value={this.state.account.password}
                    type="text"
                    handleInputField={this.handleInputField}
                    lable="Password"
                    error={this.state.errors.password}
                  />
                  <button type="submit" class="btn btn-warning btn-block mt-5">
                    Submit
                  </button>
                </form>
              </div>
              <div className="col-3"></div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Registration;