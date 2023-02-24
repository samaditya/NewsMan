import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import ErrorBoundary from './components/ErrorBoundary'

export default class App extends Component {
  render() {
    return (
      <div>
      <ErrorBoundary>
        <Navbar/>
        <News/>
      </ErrorBoundary>
      </div>
    )
  }
}
