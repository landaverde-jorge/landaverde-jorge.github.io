import React, { Component } from 'react'
import axios from 'axios';

import './styles.css';

const API_PATH = 'http://csc412sfsy.com/~jlandaverde/test-website/api/contact/index.php';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      message: '',
      mailSent: false,
      error: null
    }
  }

  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        })
      })
      .catch(error => this.setState({ error: error.message }));
  };


  render() {
    return (
      <div id="contact">
        <div style={{paddingTop: '100px'}}>
          <h1>Lets connect!</h1>
        </div>
        <div className="contactForm" style={{paddingBottom: '200px'}}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <p id="brandName" style={{ maxWidth: `60%` }}>
                Thank you for taking the time to learn more about who I am. If you want to ask me anything questions, give me suggestions
                or just simply say hello, my email indox is always open.
              </p>
            </div>
            <button className="contactButton">
              <a href="mailto:jorge.ant.landaverde@gmail.com">Get in touch!</a>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;