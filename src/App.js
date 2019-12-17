import React from 'react';
import IndexPage from "./conponents/IndexPage"
import Navigation from "./conponents/navigation/Navigation"

function App() {
  return (
    <div className="App">
      {/* ここにラウター書いて、headerとindexpage.jsで */}
      <Navigation />
      <IndexPage />
    </div>
  );
}

export default App;
