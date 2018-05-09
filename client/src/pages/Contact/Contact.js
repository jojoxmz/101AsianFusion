import React, {Component} from "react";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      number: "",
      email: "",
      subject: "",
      message: ""
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

    const service_id = "default_service";
    const template_id = "contactuspage";
    const form = {
      ...this.state
    };

    window.emailjs.send(service_id, template_id, form)
    console.log("Email Sent!");
    alert("Thank you for contacting us! We will get back to you shortly!");

    this.setState({name: "", number: "", email: "", subject: "", message: ""});
  };

  render() {
    return (<div className="main-contact-page">
      <div id="contact-page">
        <div className="row">

          <div className="col-md-6 col-sm-12 animated fadeInUp">
            <div className="map-container ">
              <iframe title="This is a unique title" id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.9626102764205!2d-104.94878468462521!3d39.71802297945246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e9bdc049c01%3A0x2cdbf76d958a2020!2s101+Asian+Fusion!5e0!3m2!1sen!2sus!4v1525546385381"></iframe>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 animated fadeInUp" id="contact-form">

            <h6>
              <strong>Business Hours:</strong>
              <br/>
              Monday – Sunday
              <br/>
              11:00am – 9:30pm</h6>
            <h6>
              <strong>Tel: </strong>
              303 355 1688 •
              <strong> Fax: </strong>
              303 355 1993</h6>

            <form onSubmit={this.handleFormSubmit} method="post">
              <div className="md-form form-sm">
                <i className="fa fa-user prefix grey-text"></i>
                <input type="text" value={this.state.name} id="form3" className="form-control form-control-sm" required="required" placeholder="Your name *" name="name" onChange={this.handleChange}/>
              </div>

              <div className="md-form form-sm">
                <i className="fa fa-phone prefix grey-text"></i>
                <input type="text" value={this.state.number} id="form32" className="form-control form-control-sm" required="required" placeholder="Your number *" name="number" onChange={this.handleChange}/>
              </div>

              <div className="md-form form-sm">
                <i className="fa fa-envelope prefix grey-text"></i>
                <input type="text" value={this.state.email} id="form2" className="form-control form-control-sm" required="required" placeholder="Your email *" name="email" onChange={this.handleChange}/>
              </div>

              <div className="md-form form-sm">
                <i className="fa fa-tag prefix grey-text"></i>
                <input type="text" value={this.state.subject} id="form32" className="form-control form-control-sm" required="required" placeholder="Subject *" name="subject" onChange={this.handleChange}/>
              </div>

              <div className="md-form form-sm">
                <i className="fa fa-pencil prefix grey-text"></i>
                <textarea type="text" value={this.state.message} id="form8" className="md-textarea form-control form-control-sm" rows="4" required="required" placeholder="Your message *" name="message" onChange={this.handleChange}></textarea>
              </div>

              <div className="text-center mt-4">
                <button className="btn waves-effect waves-light">Send
                  <i className="fa fa-paper-plane-o ml-1"></i>
                </button>
              </div>

              <div className="row">*required
              </div>
            </form>


          </div>

        </div>

      </div>
    </div>)

  }

};

export default Contact;
