import React, { useState, useEffect, useContext } from "react";
import Header from "./Header";
import MainArea from "./MainArea";
import { dbDataContext } from "./ContextApi";
import Footer from "./Footer";
import "./css/index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SinglePostPage from "./SinglePostPage";
import NotAvailable from "./Links/NotAvailable";

function App() {
  const [mount, setMount] = useState(true);
  const [loading, setLoading] = useState(true);
  const { DbData, updateDb } = useContext(dbDataContext);
  useEffect(() => {
    const abortController = new AbortController();
    const signal1 = abortController.signal;
    fetch("https://blog-appserver.herokuapp.com/getData", { signal: signal1 })
      .then((res) => res.json())
      .then((res) => updateDb(res.test))
      .finally(() => setLoading(false));
    if (mount && DbData) {
      setLoading(true);
    }
    return () => {
      abortController.abort();
      setMount(false);
    };
  }, []);

  if (loading) return "Loading...";
  return (
    <div className="App">
      <div className="extra-margin">
        <Header />

        <BrowserRouter>
          <Switch>
            <Route path="https://chnblog.netlify.app/not-available">
              <NotAvailable />
            </Route>
            <Route path="https://chnblog.netlify.app/:post">
              <SinglePostPage />
            </Route>
            <Route exact path="/">
              <MainArea />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
