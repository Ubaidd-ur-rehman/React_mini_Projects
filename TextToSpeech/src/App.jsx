import React from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import "./App.css";

function App() {
  const { transcript, listening, browserSupportsSpeechRecognition, startListening, stopListening, onError } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <div>Speech recognition not supported on your browser.</div>;
  }

  return (
    <div className="container">
      <h2>Speech to Text Converter</h2>
      <p>
        A React hook that converts speech from the microphone into text in the container.
        Every word you speak will be accurately typed.
      </p>
      <div className="text-container">
        {transcript}
      </div>
      <div className="btn-text">
        <button disabled={listening} onClick={startListening}>
          Start Listening
        </button>
        <button disabled={!listening} onClick={stopListening}>
          Stop Listening
        </button>
        <button>Copy</button>
      </div>
      {onError && (
        <div className="error-message">
          Error: {onError.message}
        </div>
      )}
    </div>
  );
}

export default App;
