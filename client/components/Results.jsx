import React from 'react';
import limitDescription from '../utils/limitDescription.js';

export default function Results({ results, showDetail }) {
  return (
    <div className='results-container'>
      <div className='results-grid'>
        {results && results.map((item) => (
          <div className='result' key={item.id}>
            <h3 onClick={() => showDetail(item.id)}>{item.name}</h3>
            <p>{limitDescription(item.description)}</p>
            <p>&#9733; {item.stars}</p>
          </div>
        ))}
      </div>
    </div>
  );
}