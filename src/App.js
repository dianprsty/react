import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import { Header, Content, Footer } from "./template"


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Content />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
