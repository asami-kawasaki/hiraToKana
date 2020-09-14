import React, { useState } from 'react';
import './App.css';
import HiraToKana from './HiraToKana.js';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [isPushed, setIsPushed] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsPushed(!isPushed);
  };

  const cancelInput = () => {
    setInputValue("");
  }

  return (
    <div className="App">
      <p className="header">
        ひらがな→かたかな変換ツール
      </p>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label>
            入力してください：
        <input tupe="text" value={inputValue} onChange={handleChange} />
          </label>
          <input type="submit" value="変換スタート" className="startButton" />
          <input type="button" value="削除" onClick={cancelInput} className="deleteButton" />
        </form>
        <div className="secondContainer">
          <p>変換結果：</p>
          {isPushed ? <HiraToKana str={inputValue} /> : null}
        </div>
        <div className="thirdContainer">
        </div>
      </div>
    </div>
  )
};

export default App;
