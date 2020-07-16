import React from 'react';
import './App.css';
import Header from './Header';
import Diary from './Diary';
import Tips from './Tips';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/">
        <Diary />
      </Route>
      <Route path="/">
        <Tips />
      </Route>
    </BrowserRouter>
  );
}

export default App;
