import React from 'react';
import './Diary.css';
import FoodAdder from './FoodAdder';

function Diary() {
  return (
    <div className="diary">
      <div className="calories">
        <h2>Energy consumed:</h2>
      </div>
      <FoodAdder />
    </div>
  );
}

export default Diary;
