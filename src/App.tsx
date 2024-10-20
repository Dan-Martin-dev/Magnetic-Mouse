import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/about" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
