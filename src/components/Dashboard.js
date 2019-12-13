import React from 'react';
import StatusCard from './status/Status';
class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      ticketResolved: '1052',
      ticketPending: '225',
      highPriority: '25',
      taskAssigned: '12'
    };
  }
  render() {
    return (
      <div className='d-flex justify-content-center w-100 bg-dashboard py-3'>
        <StatusCard
          data={this.state.ticketResolved}
          message='Ticket Resolved'
          iclass='fas fa-calendar-check fa-3x'
        />
        <StatusCard
          data={this.state.ticketPending}
          message='Ticket Pending'
          iclass='fas fa-dot-circle fa-3x'
        />
        <StatusCard
          data={this.state.highPriority}
          message='High Priority'
          iclass='fas fa-exclamation-triangle fa-3x'
        />
        <StatusCard
          data={this.state.taskAssigned}
          message='Task Assigned'
          iclass='fas fa-check-circle fa-3x'
        />
      </div>
    );
  }
}

export default Dashboard;
