import { useRef , useEffect } from "react";
import React from 'react'


export function LimitedParagraph({ text, maxWords=60,appendText='...' }) {
    const paragraphRef = useRef();
  
    useEffect(() => {
      if (paragraphRef.current && text) {
        const words = text.trim().split(' ');
        if (words.length > maxWords) {
          paragraphRef.current.textContent = words.slice(0, maxWords).join(' ') + appendText;
        }
      }
    }, [text, maxWords]);
  
    return (
      <p ref={paragraphRef}>
        {text}
      </p>
    );
  }
export default LimitedParagraph