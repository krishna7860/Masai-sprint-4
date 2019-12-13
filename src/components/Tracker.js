import React from 'react';
import Updater from './chart/Updater';
class Tracker extends React.Component {
  constructor() {
    super();
    this.state = {
      pending: 0,
      completed: 0,
      assigned: 0
    };
  }

  componentWillMount() {
    let pending = JSON.parse(localStorage.getItem('issues')).length || 0;
    let completed = JSON.parse(localStorage.getItem('completed')).length || 0;
    let assigned = JSON.parse(localStorage.getItem('assigned')).length || 0;

    this.setState({
      pending: pending,
      completed: completed,
      assigned: assigned
    });
  }
  render() {
    return (
      <div className='row'>
        <div className='card m-3 ml-4 col-4 bg-chart'>
          <h5 className='text-center m-0 mt-3 text-info'>Issues Details</h5>
          <Updater data={this.state} />
          <div className='row d-flex justify-content-around px-5 mb-3'>
            <div className='font-weight-bolder'>Completed</div>
            <div className='font-weight-bolder'>Assigned</div>
            <div className='font-weight-bolder'>Pending</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tracker;
