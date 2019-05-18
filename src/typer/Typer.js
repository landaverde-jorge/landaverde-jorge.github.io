import React, { Component } from 'react'

class Typer extends React.Component {

  state = {
    text: '',
    isDeleting: false,
    loopNum: 0,
    typingSpeed: 120
  }

  componentDidMount() {
    this.handleType();
  }

  handleType = () => {
    const { dataText } = this.props;
    const { isDeleting, loopNum, text, typingSpeed } = this.state;
    const i = loopNum % dataText.length;
    const fullText = dataText[i];

    this.setState({
      text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? 30 : 150
    });

    if (!isDeleting && text === fullText) {

      setTimeout(() => this.setState({ isDeleting: true }), 500);

    } else if (isDeleting && text === '') {

      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1
      });

    }

    setTimeout(this.handleType, typingSpeed);
  };

  render() {
    return (
      <p style={{ fontSize: '50px', color: '#D19B00', marginBottom: 'unset', marginTop: '10px' }} id="brandName">{this.props.heading}&nbsp;
          <span>{this.state.text}</span>
        <span id="cursor"></span>
      </p>
    );

  }
}

export default Typer;