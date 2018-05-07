import React, {Component} from "react";
import "./Manager.css";

export default class Manager extends Component {

  render() {
    return (

      <div id="manager-page">
        <div className="row justify-content-center">
          <div className="card col-md-6 col-sm-3">

            <div className="card-body">

              <form>
                <h2 className="h2 text-center py-4">Sign In</h2>
                <div className="md-form">
                  <i className="fa fa-envelope prefix grey-text"></i>
                  <input type="email" id="materialFormCardEmailEx" className="form-control"/>
                  <label for="materialFormCardEmailEx" className="font-weight-light">Your email</label>
                </div>

                <div className="md-form">
                  <i className="fa fa-lock prefix grey-text"></i>
                  <input type="password" id="materialFormCardPasswordEx" className="form-control"/>
                  <label for="materialFormCardPasswordEx" className="font-weight-light">Your password</label>
                </div>

                <div className="text-center py-4 mt-3">
                  <button className="btn btn-cyan" type="submit">Register</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>)
  };
};
