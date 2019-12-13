import React from 'react';

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }
  componentWillReceiveProps(newState) {
    this.setState({ data: newState.data });
  }
  render() {
    return (
      <div>
        <ul className='list-group'>
          {this.state.data.map((item, index) => {
            return (
              <li
                className='list-group-item'
                key={index}
                onClick={() => {
                  this.props.callback(item);
                }}
              >
                {item.tIssue}{' '}
                <span className='badge badge-info float-right'>
                  {item.tPriority}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Notification;
