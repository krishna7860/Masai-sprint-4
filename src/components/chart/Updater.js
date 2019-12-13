import React from 'react';

class Updater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: 'Completed Issues : ' + this.props.data.completed,
      assigned: 'Assigned Issues : ' + this.props.data.assigned,
      pending: 'Pending Issues : ' + this.props.data.pending
    };
  }

  render() {
    return (
      <div className='row updater'>
        <div
          className=' update-1'
          data-toggle='tooltip'
          data-placement='top'
          title={this.state.completed}
          style={{ height: this.props.data.completed * 30 }}
        ></div>
        <div
          data-toggle='tooltip'
          data-placement='top'
          title={this.state.assigned}
          className=' update-2'
          style={{ height: this.props.data.assigned * 30 }}
        ></div>
        <div
          data-toggle='tooltip'
          data-placement='top'
          title={this.state.pending}
          className=' update-3'
          style={{ height: this.props.data.pending * 30 }}
        ></div>
      </div>
    );
  }
}

export default Updater;
