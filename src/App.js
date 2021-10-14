import logo from './logo.svg';
import './App.css';
// 首先我们需要导入一些组件...
import { BrowserRouter as Router, Route, Link, Switch, NavLink, Prompt, Redirect } from 'react-router-dom'

function Home() {
  return (
    <div className="App">
      <header className="App-header">
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
        <NavLink to="/about" activeStyle={{
            fontWeight: "bold",
            color: "#fff"
          }} >About</NavLink>
        <Link to="/users" >Users</Link>
      </header>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <Link to="/">Home</Link>
    </div>
  );
}

function Users() {
  return (
    <div>
      <h2>Users</h2>
      <Prompt message="Are you sure you want to leave?" />
      <Link to="/">Home</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
