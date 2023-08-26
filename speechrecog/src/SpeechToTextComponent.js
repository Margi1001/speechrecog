// SpeechToTextComponent.js
import React, { Component } from 'react';

class SpeechToTextComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recognizedText: '',
    };
    this.recognition = null; // Define recognition as an instance variable
  }

  startRecognition = () => {
    this.recognition = new window.webkitSpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';

    this.recognition.onresult = (event) => {
      const recognizedText = event.results[0][0].transcript;
      this.setState({ recognizedText });
    };

    this.recognition.start();
  };

  stopRecognition = () => {
    if (this.recognition) {
      this.recognition.stop();
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.startRecognition}>Start</button>
        <button onClick={this.stopRecognition}>Stop</button>
        <p>Recognized Text: {this.state.recognizedText}</p>
      </div>
    );
  }
}

export default SpeechToTextComponent;
