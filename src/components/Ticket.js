import React from 'react';
let ticketIssue = 100;
let Issues;
if (localStorage.getItem('issues') == undefined) {
  Issues = [];
} else {
  Issues = JSON.parse(localStorage.getItem('issues'));
}
class Ticket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tIssue: '',
      tCreator: '',
      tDesc: '',
      tAssign: '',
      tPriority: '',
      tHead: '',
      issueStatus: 'Pending'
    };
  }

  onHandleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createIssue = e => {
    e.preventDefault();
    let issue = new Issue(
      this.state.tIssue,
      this.state.tCreator,
      this.state.tDesc,
      this.state.tAssign,
      this.state.tPriority,
      this.state.tHead
    );

    Issues.push(issue);

    let stream = JSON.stringify(Issues);
    localStorage.setItem('issues', stream);

    this.setState({
      tIssue: '',
      tCreator: '',
      tDesc: '',
      tAssign: '',
      tPriority: '',
      tHead: ''
    });

    this.props.callback();
  };

  render() {
    return (
      <div className='p-3'>
        <h5>Create Ticket</h5>
        <p className='lead'>
          Software No : <span className='text-danger'>#SAP13{ticketIssue}</span>
        </p>
        <form onSubmit={this.createIssue}>
          <div className='row'>
            <div className='col'>
              <label>Ticket Issue</label>
              <input
                type='text'
                className='form-control'
                name='tIssue'
                value={this.state.tIssue}
                onChange={this.onHandleChange}
                placeholder='Ticket Issue'
              />
            </div>
            <div className='col'>
              <label>Ticket Generator</label>
              <input
                type='text'
                name='tCreator'
                className='form-control'
                value={this.state.tCreator}
                onChange={this.onHandleChange}
                placeholder='Ticket Generator'
              />
            </div>
          </div>
          <div className='form-group mt-3'>
            <label>Ticket Issue Description</label>
            <textarea
              className='form-control'
              placeholder='Explain Issue'
              name='tDesc'
              value={this.state.tDesc}
              onChange={this.onHandleChange}
            ></textarea>
          </div>
          <div className='row'>
            <div className='col'>
              <label>Issue Assigned to</label>
              <select
                className='form-control'
                name='tAssign'
                value={this.state.tAssign}
                onChange={this.onHandleChange}
              >
                <option value=''>Select Department</option>
                <option value='Department-Sales-C1'>Department-Sales-C1</option>
                <option value='Department-Sales-C2'>Department-Sales-C2</option>
                <option value='Department-Finance-K1'>
                  Department-Finance-K1
                </option>
                <option value='Department-StockExchange'>
                  Department-StockExchange
                </option>
                <option value='Departmemt-IT-Ground-1'>
                  Departmemt-IT-Ground-1
                </option>
                <option value='Department-DevOps-1'>Department-DevOps-1</option>
                <option value='Department-DevOps-2'>Department-DevOps-2</option>
                <option value='Department-DevOps-3'>Department-DevOps-3</option>
                <option value='Department-DevOps-4'>Department-DevOps-4</option>
              </select>
            </div>
            <div className='col'>
              <label>Issue Risk Priority</label>
              <select
                className='form-control'
                name='tPriority'
                value={this.state.tPriority}
                onChange={this.onHandleChange}
              >
                <option value=''>Select Priority</option>
                <option value='Severe'>Severe</option>
                <option value='High'>High</option>
                <option value='Moderate'>Moderate</option>
                <option value='Normal'>Normal</option>
              </select>
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col'>
              <label>Issue Head</label>
              <select
                className='form-control'
                name='tHead'
                value={this.state.tHead}
                onChange={this.onHandleChange}
              >
                <option value=''>Select Head</option>
                <option value='Nrupul Dev'>Nrupul Dev</option>
                <option value='Prateek Shukla'>Prateek Shukla</option>
                <option value='Yogesh Bhatt'>Yogesh Bhatt</option>
                <option value='Aman Vats'>Aman Vats</option>
                <option value='Albert Sebestianmal'>Albert Sebestian</option>
              </select>
            </div>
          </div>
          <div className='form-group mt-4'>
            <input
              type='submit'
              value='Create Issue'
              className='btn btn-info'
            />
          </div>
        </form>
      </div>
    );
  }
}

function Issue(tIssue, tCreator, tDesc, tAssign, tPriority, tHead) {
  this.tIssue = tIssue;
  this.tCreator = tCreator;
  this.tDesc = tDesc;
  this.tAssign = tAssign;
  this.tPriority = tPriority;
  this.tHead = tHead;
}

export default Ticket;
