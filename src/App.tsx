import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/skills" element={<h1>skills</h1>} />
        <Route path="/projects" element={<h1>projects</h1>} />
        <Route path="/about" element={<h1>about</h1>} />
        <Route path="/contact" element={<h1>contact</h1>} />
        <Route path="*" element={<h1>404 - Page not found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
