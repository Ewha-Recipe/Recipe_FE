import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignUpTwo } from './signUp';
import { Home } from './home';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpTwo />} />
        </Routes>
      </div>
    </Router>
  );
}
