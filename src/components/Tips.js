import React from 'react';
import './Tips.css';

function Tips() {
  return (
    <div className="tips">
      <p>Pretty soon the user can find some daily tips here!</p>
      <ul className="tips__list">
        <li className="tips__item">Tip 1</li>
        <li className="tips__item">Tip 2</li>
        <li className="tips__item">Tip 3</li>
      </ul>
    </div>
  );
}

export default Tips;