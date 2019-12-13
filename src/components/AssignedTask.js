import React from 'react';
import Notification from './notification/Notification';
import TaskComplete from './TaskComplete';
let completedTask;
if (localStorage.getItem('completed') == undefined) {
  completedTask = [];
} else {
  completedTask = JSON.parse(localStorage.getItem('completed'));
}

class AssignedTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assignedTask: [],
      taskCount: 0,
      taskToComplete: {},
      taskToCompleteDisplay: 'card d-none m-5'
    };
  }

  componentWillMount() {
    if (localStorage.getItem('assigned') == undefined) {
      this.setState({ assignedTask: [], taskCount: 0 });
    } else {
      let assignedTask = JSON.parse(localStorage.getItem('assigned'));
      this.setState({
        assignedTask: assignedTask,
        taskCount: assignedTask.length
      });
    }
  }

  componentWillReceiveProps(newState) {
    this.setState({
      assignedTask: newState.dataList,
      taskCount: newState.dataList.length
    });
  }

  showIssueToComplete = e => {
    this.setState({
      taskToComplete: e,
      taskToCompleteDisplay: 'card d-block m-5'
    });
  };

  completeIssue = issue => {
    let assignedTaskNew = JSON.parse(localStorage.getItem('assigned'));

    assignedTaskNew.forEach((item, index) => {
      if (item.tIssue == issue.tIssue) {
        assignedTaskNew.splice(index, 1);
      }
    });
    localStorage.setItem('assigned', JSON.stringify(assignedTaskNew));
    this.setState(
      {
        assignedTask: assignedTaskNew,
        taskCount: assignedTaskNew.length,
        taskToCompleteDisplay: 'card d-none m-5'
      },
      () => {
        let pendingTask = JSON.parse(localStorage.getItem('issues'));
        pendingTask.forEach((item, index) => {
          if (item.tIssue == issue.tIssue) {
            pendingTask.splice(index, 1);
          }
        });
        localStorage.setItem('issues', JSON.stringify(pendingTask));
        this.props.callback();
        this.props.callback2();
      }
    );

    // Assigning Completed Task
    completedTask.push(issue);
    localStorage.setItem('completed', JSON.stringify(completedTask));
  };

  render() {
    return (
      <div>
        <div className='d-flex'>
          <div className='p-3 col-4'>
            <h4>Settings</h4>
            <li className='list-group-item my-3'>
              Updated Task
              <span className='badge badge-danger ml-3'>
                {this.state.taskCount}
              </span>
            </li>
            <Notification
              data={this.state.assignedTask}
              callback={this.showIssueToComplete}
            />
          </div>
          <div className='col-6'>
            <TaskComplete
              data={this.state.taskToComplete}
              styleData={this.state.taskToCompleteDisplay}
              callback={this.completeIssue}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AssignedTask;
