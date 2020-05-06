import React, { Component } from "react";
import Input from "./input";
import { toast } from "react-toastify";
class Login extends Component {
  //username=React.createRef();
  state = {
    account: {
      username: "",
      password: ""
    },
    errors: {}
  };
  //validations
  handleFormSubmit = event => {
    event.preventDefault();
    const errors = {};
    const { username, password } = this.state.account;
    //console.log(this.username.current.value);
    console.log(username);
    console.log(password);

    if (username.trim() === "") errors.username = "username is reuired";
    if (password.trim() === "") errors.password = "password is reuired";

    console.log(errors);
    this.setState({ errors });
    if (username === "raju" && password === "king") {
      this.props.history.replace("/Home");
    } else toast("invalid credentails");
  };
  handleInputField = event => {
    const account = this.state.account;
    console.log(event.currentTarget.name);
    console.log(event.currentTarget.value);
    account[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ account: account });
  };
  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 border p-3 mt-5 bg-light shadow-sm rounded border border-danger rounded">
              <h1 class="text-center">LOGIN</h1>
              <form onSubmit={this.handleFormSubmit}>
                <lable class="text-larger">Uesername</lable>
                <Input
                  value={this.state.account.username}
                  type="text"
                  inputName="username"
                  handleInputField={this.handleInputField}
                  //lable="Username"
                  error={this.state.errors.username}
                />
                <div class="form-group">
                  <lable>Password</lable>
                  <Input
                    inputName="password"
                    type="password"
                    handleInputField={this.handleInputField}
                    //lable="password"
                    error={this.state.errors.password}
                    value={this.state.errors.password}
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-warning btn-block mt-5"
                  onClick={() => this.props.setLogin(true)}
                  value="Login"
                >
                  Submit
                </button>

                <div class="text-center mt-2">
                  Don't have an account?{" "}
                  <a
                    class="text-decoration-none text-warning"
                    href="/registration"
                  >
                    Register
                  </a>
                </div>
                <div class="clearfix mt-3">
                  <div class="float-left">
                    <a class="text-decoration-none text-warning" href="/king">
                      Forget Username
                    </a>
                  </div>
                  <div class="float-right">
                    <a class="text-decoration-none text-warning" href="/hii">
                      Forget Password
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-3"></div>
      </div>
    );
  }
}

export default Login;
