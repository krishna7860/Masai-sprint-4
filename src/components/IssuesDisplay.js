import React from 'react';
import Li from './list/Li';
let assignedIssue;
if (localStorage.getItem('assigned') == undefined) {
  assignedIssue = [];
} else {
  assignedIssue = JSON.parse(localStorage.getItem('assigned'));
}
class IssuesDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issuesList: [],
      completed: [],
      display: 'none',
      err: 'none'
    };
  }

  componentDidMount() {
    let issueList;
    if (localStorage.getItem('issues') == undefined) {
      issueList = [];
    } else {
      issueList = JSON.parse(localStorage.getItem('issues'));
    }
    this.setState({ issuesList: issueList });

    let completed;
    if (localStorage.getItem('completed') == undefined) {
      completed = [];
    } else {
      completed = JSON.parse(localStorage.getItem('completed'));
    }
    this.setState({ completed: completed });
  }

  componentWillReceiveProps(newState) {
    this.setState({
      issuesList: newState.dataList,
      completed: newState.completedData
    });
  }

  onIssueClickHandler = issue => {
    let count = 0;

    assignedIssue.forEach(item => {
      if (item.tIssue == issue.tIssue) {
        count++;
      }
    });

    if (count != 0) {
      this.setState({ err: 'block' }, () => {
        setTimeout(() => {
          this.setState({ err: 'none' });
        }, 3000);
      });
    } else {
      this.setState({ display: 'block' }, () => {
        setTimeout(() => {
          this.setState({ display: 'none' });
        }, 3000);
      });
      assignedIssue.push(issue);
      localStorage.setItem('assigned', JSON.stringify(assignedIssue));
    }
    this.props.callback();
  };

  render() {
    return (
      <div className='d-flex w-100'>
        <div className='Issue List col-6 p-4'>
          <h5 className='text-danger my-2'>Pending Issues</h5>
          <span className='text-muted my-3'>
            Click on any issue to update status and assign it
          </span>
          <br />
          <p
            className='alert alert-primary mt-2'
            style={{ display: this.state.display }}
          >
            Task Assigned To Queue Check Settings
          </p>
          <p
            className='alert alert-danger mt-2'
            style={{ display: this.state.err }}
          >
            Task Already Assigned Check in the settings
          </p>
          <table className='table table-striped mt-3'>
            <thead className='thead-dark'>
              <tr>
                <th>Sno.</th>
                <th>Issue</th>
                <th>Creator</th>
                <th>Issue Head</th>
                <th>Risk</th>
              </tr>
            </thead>
            <tbody>
              {this.state.issuesList.map((issue, index) => {
                return (
                  <Li
                    key={index}
                    data={issue}
                    sn={index}
                    handler={this.onIssueClickHandler}
                    badge='badge badge-primary'
                  />
                );
              })}
            </tbody>
          </table>
        </div>
        <div className='issue-solved col-6 p-4'>
          <h5 className='text-success my-2'>Completed Issues</h5>
          <span className='text-muted my-3'>
            Task Assigned and Issue Resolved
          </span>
          <table className='table table-striped mt-3'>
            <thead className='thead-dark'>
              <tr>
                <th>Sno.</th>
                <th>Issue</th>
                <th>Creator</th>
                <th>Issue Head</th>
                <th>Risk</th>
              </tr>
            </thead>
            <tbody>
              {this.state.completed.map((issue, index) => {
                return (
                  <Li
                    key={index}
                    data={issue}
                    sn={index}
                    handler={this.onIssueClickHandler}
                    badge='badge badge-success'
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default IssuesDisplay;
