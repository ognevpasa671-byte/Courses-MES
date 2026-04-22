import React, { useState } from 'react';

interface TextExpanderProps {
  text: string;
}

function TextExpander({ text }: TextExpanderProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  function getFirstSentence(fullText: string): string {
    const sentenceEnd = fullText.search(/[.!?](?=\s|$)/);
    
    if (sentenceEnd !== -1) {
      return fullText.substring(0, sentenceEnd + 1);
    }
    
    return fullText;
  }

  const firstSentence = getFirstSentence(text);

  function toggleText(): void {
    setIsExpanded(!isExpanded);
  }

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <div style={{ marginBottom: '15px', color: '#333' }}>
        {isExpanded ? text : firstSentence}
      </div>
      <button
        onClick={toggleText}
        style={{
          padding: '10px 20px',
          fontSize: '14px',
          cursor: 'pointer',
          backgroundColor: isExpanded ? '#dc3545' : '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          transition: 'all 0.3s ease'
        }}
      >
        {isExpanded ? 'Свернуть' : 'Показать подробнее'}
      </button>
    </div>
  );
}

export default TextExpander;
