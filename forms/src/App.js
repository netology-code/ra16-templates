import React from 'react';
import './App.css';
import Feedback from './components/Feedback';
import FeedbackClassBased from './components/FeedbackClassBased';
import FileChooser from './components/FileChooser';
import FileChooserClassBased from './components/FileChooserClassBased';
import FileChooserAdv from './components/FileChooserAdv';
import ReadMe from './components/readme/ReadMe';
import ReadMeMono from './components/readme/ReadMeMono';

function App() {
  return (
    <div>
      {/* <Feedback /> */}
      {/* <FeedbackClassBased /> */}
      {/* <FileChooser /> */}
      {/* <FileChooserClassBased /> */}
      {/* <FileChooserAdv /> */}
      <ReadMeMono />
      <ReadMe />
    </div>
  );
}

export default App;
