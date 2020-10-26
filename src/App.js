import Header from './Components/Header/Header'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


import './App.css';

export default function App() {
  return (
    <Router>
            <Header/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}