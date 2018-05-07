import React, {Component} from "react";
import "./Contact.css";


class Contact extends Component {

  render() {
    return (
      <div id="contact-page" className="animated fadeInUp">
      <div className="row">

        <div className="col-md-6 col-sm-12">
          <div className="map-container">
            <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.9626102764205!2d-104.94878468462521!3d39.71802297945246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e9bdc049c01%3A0x2cdbf76d958a2020!2s101+Asian+Fusion!5e0!3m2!1sen!2sus!4v1525546385381"></iframe>
          </div>
        </div>

        <div className="col-md-6 col-sm-12">

          <h6>Hours:
            <br/>
            Monday – Sunday
            <br/>
            11:00am – 9:30pm</h6>
          <h6>Tel: 303 355 1688 • Fax: 303 355 1993</h6>

          <form>
            <div className="md-form form-sm">
              <i className="fa fa-user prefix grey-text"></i>
              <input type="text" id="form3" className="form-control form-control-sm"/>
              <label for="form3">Your name *</label>
            </div>

            <div className="md-form form-sm">
              <i className="fa fa-phone prefix grey-text"></i>
              <input type="text" id="form32" className="form-control form-control-sm"/>
              <label for="form34">Your number *</label>
            </div>

            <div className="md-form form-sm">
              <i className="fa fa-envelope prefix grey-text"></i>
              <input type="text" id="form2" className="form-control form-control-sm"/>
              <label for="form2">Your email *</label>
            </div>

            <div className="md-form form-sm">
              <i className="fa fa-tag prefix grey-text"></i>
              <input type="text" id="form32" className="form-control form-control-sm"/>
              <label for="form34">Subject *</label>
            </div>

            <div className="md-form form-sm">
              <i className="fa fa-pencil prefix grey-text"></i>
              <textarea type="text" id="form8" className="md-textarea form-control form-control-sm" rows="4"></textarea>
              <label for="form8">Your message *</label>
            </div>

            <div className="text-center mt-4">
              <button className="btn btn-primary waves-effect waves-light">Send
                <i className="fa fa-paper-plane-o ml-1"></i>
              </button>
            </div>
          </form>

          <h6>*required </h6>
        </div>

      </div>

    </div>)

  }

};

export default Contact;
