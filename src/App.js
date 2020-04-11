import React, { useState}from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Media from "react-media";
import IndexPage from "./conponents/IndexPage"
import Navigation from "./conponents/navigation/Navigation"
// import "./App.scss"

function App() {
  const [currentSec, setCurrentSec] = useState("0");
  const handleCurrentSection = (id) => {
    setCurrentSec(id);
    console.log(id)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Media
          queries={{
            mobile: "(max-width: 750px)",
            webbrowser: "(min-width: 751px)"
          }}
        >
          {matches => (
            <>
              {/* {matches.mobile && (
                <p>mobile navigation</p>
              )} */}
              {matches.webbrowser && (
                <Navigation cSection={currentSec}/>
              )}
            </>
          )}
        </Media>

        <Switch>
          <Route path="/" render={(props) => <IndexPage {...props} checkCurrentSection={handleCurrentSection} />}/>
          <Route path="*">
            <div className="App">
              <h1>Error 404: Page not found</h1>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
    

export default App;
