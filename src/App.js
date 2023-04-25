import logo from './logo.svg';
import './App.css';
import NaviBar from './components/NaviBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Calender from "./components/Calender";
//import Home from './pages';
import Calendar from './pages/Calender';
import Dashboard from './pages/Dashboard';
import Report from './pages/Report';
// import FullCalendar from '@fullcalendar/react' // must go before plugins
// import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

function App() {
  return (
    
      /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
      <Router>
       <NaviBar />
       <Switch>
        <Route path='/Dashboard' exact component={Dashboard} />
        <Route path='/Calendar' component={Calendar} />
        <Route path='/Report' component={Report} />
       </Switch>
      </Router>
 

  );
}

export default App;
