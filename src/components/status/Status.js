import React from 'react';

const Status = props => {
  return (
    <div className='card p-3 mx-3 my-3 '>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='text-danger p-3 py-4'>
          <i className={props.iclass}></i>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <h1 className='display1'>{props.data}</h1>
          <small className='text-secondary'>{props.message}</small>
        </div>
      </div>
    </div>
  );
};

export default Status;
