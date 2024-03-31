import logo from './logo.svg';
import './App.css';
import CreateAccount from './Components/pages/CreateAccount/teacherStudent';
import Login from './Components/pages/Login/Login';
import Summary from './Components/pages/summary/Summary';
import Quiz from './Components/pages/quiz/quiz';
// import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<CreateAccount />} />
          <Route path='/summary' element={<Summary />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
