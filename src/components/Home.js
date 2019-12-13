import React from 'react';
import Dashboard from './Dashboard';
import Tracker from './Tracker';
class Home extends React.Component {
  render() {
    return (
      <div className=''>
        <Dashboard />
        <Tracker />
      </div>
    );
  }
}

export default Home;
