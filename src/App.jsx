import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignupForm } from './signup/SignupForm';
import { Home } from './home';
import { CreatePost } from './post/CreatePost';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/foods" element={<CreatePost />} />
        </Routes>
      </div>
    </Router>
  );
}
