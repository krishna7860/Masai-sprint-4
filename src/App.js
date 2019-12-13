import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/navbar/Navbar';
import Ticket from './components/Ticket';
import IssuesDisplay from './components/IssuesDisplay';
import AssignedTask from './components/AssignedTask';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      issueList: [],
      assigned: [],
      completed: []
    };
  }

  componentDidMount() {
    let issueList;
    if (localStorage.getItem('issues') == undefined) {
      issueList = [];
    } else {
      issueList = JSON.parse(localStorage.getItem('issues'));
    }
    this.setState({ issueList: issueList });

    let assigned;
    if (localStorage.getItem('assigned') == undefined) {
      assigned = [];
    } else {
      assigned = JSON.parse(localStorage.getItem('assigned'));
    }
    this.setState({ assigned: assigned });

    let completed;
    if (localStorage.getItem('completed') == undefined) {
      completed = [];
    } else {
      completed = JSON.parse(localStorage.getItem('completed'));
    }
    this.setState({ completed: completed });
  }

  addIssueToState = () => {
    let issueList;
    if (localStorage.getItem('issues') == undefined) {
      issueList = [];
    } else {
      issueList = JSON.parse(localStorage.getItem('issues'));
    }
    this.setState({ issueList: issueList });

    let completed;
    if (localStorage.getItem('completed') == undefined) {
      completed = [];
    } else {
      completed = JSON.parse(localStorage.getItem('completed'));
    }
    this.setState({ completed: completed });
  };

  addIssueToUpdate = () => {
    let assigned;
    if (localStorage.getItem('assigned') == undefined) {
      assigned = [];
    } else {
      assigned = JSON.parse(localStorage.getItem('assigned'));
    }
    this.setState({ assigned: assigned });
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <div className='row p-row'>
            <div className='bg-light h-100 '>
              <div className='mb-2'>
                <img
                  className='img-fixed'
                  src='http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c52c.png'
                />
              </div>
              <div
                className='nav flex-column nav-pills text-center'
                id='v-pills-tab'
                role='tablist'
                aria-orientation='vertical'
              >
                <a
                  className='nav-link active border-none nav-badge'
                  style={{ borderRadius: '0' }}
                  id='v-pills-home-tab'
                  data-toggle='pill'
                  href='#v-pills-home'
                  role='tab'
                  aria-controls='v-pills-home'
                  aria-selected='true'
                >
                  <i className='fas fa-home'></i>
                </a>

                <a
                  className='nav-link border-none nav-badge'
                  style={{ borderRadius: '0' }}
                  id='v-pills-profile-tab'
                  data-toggle='pill'
                  href='#v-pills-profile'
                  role='tab'
                  aria-controls='v-pills-profile'
                  aria-selected='false'
                >
                  <i className='fas fa-ticket-alt'></i>
                </a>
                <a
                  className='nav-link border-none nav-badge'
                  style={{ borderRadius: '0' }}
                  id='v-pills-messages-tab'
                  data-toggle='pill'
                  href='#v-pills-messages'
                  role='tab'
                  aria-controls='v-pills-messages'
                  aria-selected='false'
                >
                  <i className='fas fa-user'></i>
                </a>
                <a
                  className='nav-link border-none nav-badge'
                  style={{ borderRadius: '0' }}
                  id='v-pills-settings-tab'
                  data-toggle='pill'
                  href='#v-pills-settings'
                  role='tab'
                  aria-controls='v-pills-settings'
                  aria-selected='false'
                >
                  <i className='fas fa-cogs'></i>
                </a>
              </div>
            </div>
            <div className='col ng-light scroll' style={{ padding: 0 }}>
              <Navbar />
              <div className='tab-content' id='v-pills-tabContent'>
                <div
                  className='tab-pane fade show active'
                  id='v-pills-home'
                  role='tabpanel'
                  aria-labelledby='v-pills-home-tab'
                >
                  <Home />
                </div>
                <div
                  className='tab-pane fade'
                  id='v-pills-profile'
                  role='tabpanel'
                  aria-labelledby='v-pills-profile-tab'
                >
                  <Ticket callback={this.addIssueToState} />
                </div>
                <div
                  className='tab-pane fade'
                  id='v-pills-messages'
                  role='tabpanel'
                  aria-labelledby='v-pills-messages-tab'
                >
                  <IssuesDisplay
                    dataList={this.state.issueList}
                    completedData={this.state.completed}
                    callback={this.addIssueToUpdate}
                  />
                </div>
                <div
                  className='tab-pane fade'
                  id='v-pills-settings'
                  role='tabpanel'
                  aria-labelledby='v-pills-settings-tab'
                >
                  <AssignedTask
                    dataList={this.state.assigned}
                    callback={this.addIssueToState}
                    callback2={this.addIssueToUpdate}
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
