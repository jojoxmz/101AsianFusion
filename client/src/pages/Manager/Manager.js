import React, {Component} from "react";
import "./Manager.css";

export default class Manager extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    this.setState({email: '', password: ''});
  };

  render() {
    return (<div id="manager-page">
      <div className="row justify-content-center">
        <div className="card col-md-6 col-sm-3">

          <div className="card-body">

            <form onClick={this.handleFormSubmit}>
              <p className="h4 text-center mb-4">Sign in</p>

              <div className="md-form">
                <i className="fa fa-envelope prefix grey-text"></i>
                <input type="email" id="materialFormLoginEmailEx" className="form-control" name="email" placeholder="Your email"/>
              </div>

              <div className="md-form">
                <i className="fa fa-lock prefix grey-text"></i>
                <input type="password" id="materialFormLoginPasswordEx" className="form-control" name="password" placeholder="Your password"/>
              </div>

              <div className="text-center mt-4">
                <button className="btn btn-default" type="submit">Login</button>
              </div>
            </form>

          </div>

        </div>
      </div>
    </div>)
  };
};
