import HomeClass from './components/HomeClass';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
function App() {
  return (
    <div className="App">

      <Switch>
        <Route
          path="/"
          exact
          render={(props) => <Login {...props} />}
        />
        <Route
          path="/register"
          exact
          render={(props) => <Signup {...props} />}
        />
        <Route
          path="/class"
          exact
          render={(props) => <HomeClass {...props} />}
        />
        <Route path="/stream" exact render={(props) => <Home {...props} />} />
        <Route
          path="/AddTask"
          exact
          render={(props) => <Home {...props} />}
        />
        <Route
          path="/FAQ"
          exact
          render={(props) => <Home {...props} />}
        />
        <Route
          path="/members"
          exact
          render={(props) => <Home {...props} />}
        />
        <Route
          path="/TaskList"
          exact
          render={(props) => <Home {...props} />}
        />
      </Switch>
    </div>
  )
}

export default App;
