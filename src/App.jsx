import * as React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './home';
import { AllMore } from './more/AllMore';
import { CreatePost } from './post/CreatePost';
import { Recipe } from './recipe/Recipe';

export default function App() {
  return (
    <Router>
      <div className="APP">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipePost" element={<CreatePost />} />
          <Route path="/all" element={<AllMore />} />
          <Route path="/recipe" element={<Recipe />} />
        </Routes>
      </div>
    </Router>
  );
}
