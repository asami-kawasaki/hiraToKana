import React, { useState } from 'react';
import './App.css';

function HiraToKana(props) {
  let katakana = () => {
    props.str.replace(/[\u30a1-\u30f6]/g,
      function (match) {
        var chr = match.charCodeAt(0) - 0x60;
        return String.fromCharCode(chr);
    });
};
return <div>{katakana}</div>;

export default HiraToKana;