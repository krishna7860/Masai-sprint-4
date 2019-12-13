import React from 'react';

const TaskComplete = props => {
  return (
    <div className={props.styleData}>
      <div className='card-header'>
        {props.data.tIssue}{' '}
        <span className='badge badge-warning'>{props.data.tPriority}</span>
      </div>
      <div className='card-body'>
        <h5 className='card-title'>{props.data.tHead}</h5>
        <p className='card-text'>{props.data.tDesc}</p>
        <a
          href='#'
          className='btn btn-primary'
          onClick={() => {
            props.callback(props.data);
          }}
        >
          Mark As Complete
        </a>
      </div>
    </div>
  );
};

export default TaskComplete;
