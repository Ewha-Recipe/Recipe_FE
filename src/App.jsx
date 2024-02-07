import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignUpOne, SignUpTwo, SignUpThree } from './signUp';
import { Home } from './home';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpOne />} />
          <Route path="/signup-two" element={<SignUpTwo />} />
          <Route path="/signup-complete" element={<SignUpThree />} />
        </Routes>
      </div>
    </Router>
  );
}
