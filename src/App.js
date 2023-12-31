import React, { useState } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import Demo from './components/Demo/Demo';

function App() {
 const [showParagraph, setShowParagraph] = useState(false);

 console.log('APP RUNNIG!');

 const toggleParagraphHandler = () => {
  setShowParagraph((prevShowParagraph) => !prevShowParagraph);
 }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo />
      {/* {showParagraph && <p>This is new!</p>} */}
      <Button onClick={toggleParagraphHandler}>Toggle Paragrapg</Button>
    </div>
  );
}

export default App;
