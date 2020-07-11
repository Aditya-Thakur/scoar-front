import React, { useCallback, useEffect, useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import logo from "./logo.png";
import "./App.css";
import Basic from "./components/ContactForm";
import Demo from "./components/Demo";

function App() {
  const [message, setMessage] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [url, setUrl] = useState("/api");

  const fetchData = useCallback(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        setMessage(json.message);
        setIsFetching(false);
      })
      .catch((e) => {
        setMessage(`API call failed: ${e}`);
        setIsFetching(false);
      });
  }, [url]);

  useEffect(() => {
    setIsFetching(true);
    fetchData();
  }, [fetchData]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {process.env.NODE_ENV === "production" ? (
            <p>Scoar</p>
          ) : (
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          )}
        </header>
        </Route>
        <Route exact path="/form">
          <Basic />
          <Link to="/test">Test</Link>
        </Route>
        <Route exact path="/test">
          <h1>Hey there! Why are you still testing ??</h1>
          <Link to="/">Go to home page</Link>
        </Route>

        <Route exact path="/demo">
          <Demo/>
        </Route>
      </Switch>
     
    </div>
  );
}

export default App;