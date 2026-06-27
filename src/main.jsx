// 1. Change the import at the top
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    // 2. Change <BrowserRouter> to <Router> (or <HashRouter>)
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} /> {/* structural example */}
      </Routes>
    </Router>
  );
}

export default App;
