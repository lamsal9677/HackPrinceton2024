import logo from './logo.svg';
import './App.css';
import CreateAccount from './Components/pages/CreateAccount/teacherStudent';
import Login from './Components/pages/Login/Login';
import Summary from './Components/pages/summary/Summary';
import Quiz from './Components/pages/quiz/quiz';

function App() {
  return (

    <div className="App">
      {/* <Login /> */}
      {/* <CreateAccount /> */}
      <Summary />
      {/* <Quiz /> */}
    </div>
  );
}

export default App;
