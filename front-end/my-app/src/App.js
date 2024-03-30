import logo from './logo.svg';
import './App.css';
import CreateAccount from './Components/pages/CreateAccount/teacherStudent';
import Login from './Components/pages/Login/Login';
import Summary from './Components/pages/summary/Summary';

function App() {
  return (

    <div className="App">
      {/* <Login /> */}
      <CreateAccount />
      {/* <Summary /> */}
    </div>
  );
}

export default App;
