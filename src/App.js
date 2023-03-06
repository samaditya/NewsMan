import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_apiKey;

  const [progress, setProgress] = useState(0);

  return (
    <div>
    <ErrorBoundary>
    <BrowserRouter>
    <LoadingBar color="#f11946" progress={ progress}/>
    <Navbar/>
    
      <Routes>
        <Route exact path='/' element= { <News setProgress={setProgress} apiKey={apiKey} key="Home" pageSize={ pageSize}  country="us"  category="general"/> }/>
        <Route exact path='/entertainment' element= { <News setProgress={ setProgress} apiKey={ apiKey} key="entertainment" pageSize={ pageSize}  country="us"  category="entertainment"/> }/>
        <Route exact path='/business' element= { <News setProgress={ setProgress} apiKey={ apiKey} key="business" pageSize={ pageSize}  country="us"  category="business"/> }/>
        <Route exact path='/health' element= { <News setProgress={ setProgress} apiKey={ apiKey} key="health" pageSize={ pageSize}  country="us"  category="health"/> }/>
        <Route exact path='/science' element= { <News setProgress={ setProgress} apiKey={ apiKey} key="science" pageSize={ pageSize}  country="us"  category="science"/> }/>
        <Route exact path='/sports' element= { <News setProgress={ setProgress} apiKey={ apiKey} key="sports" pageSize={ pageSize}  country="us"  category="sports"/> }/>
        <Route exact path='/technology' element= { <News setProgress={ setProgress} apiKey={ apiKey} key="technology" pageSize={ pageSize}  country="us"  category="technology"/> }/>
      </Routes>
    </BrowserRouter>
    </ErrorBoundary>
    </div>
  )
}
export default App;
