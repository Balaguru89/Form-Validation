import Forms from './Components/Form';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/home';

const App = () => {
  return (
    <div>
    
     <Router>
      <Routes>
        <Route path="/" element={<Forms />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>       
    </div>
  );
}

export default App;
