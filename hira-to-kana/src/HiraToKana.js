import React from 'react';
import './App.css';

function HiraToKana(props) {
  let katakana = props.str.replace(/[\u3041-\u3096]/g, 
      function (match) {
        //charCodeAtは、文字列の中の指定された位置にある文字の文字コードを返す
        let chr = match.charCodeAt(0) + 0x60;
        //fromCharCodeは、指定されたUTF-16コードから生成された文字列を返す
        return String.fromCharCode(chr);
    });
    return <div className="conversionResult">{katakana}</div>;
};

export default HiraToKana;