import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BuggerBuilder from './containers/BurgerBuilder/BurgerBuilder';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Layout>
        <BuggerBuilder/>
      </Layout>
     
      </div>
    );
  }
}

export default App;
