import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './home';
import { Recipe } from './recipe';

function App() {
  return (
    <BrowserRouter basename="/app">
      <Routes>
        <Route exact path="/" component={<Home />} />
        <Route path="/recipe/:id" component={<Recipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
