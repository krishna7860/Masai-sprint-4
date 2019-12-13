import React from 'react';

const Li = props => {
  return (
    <tr
      data-toggle='tooltip'
      data-placement='top'
      title='Click to Update Status'
      onClick={() => {
        props.handler(props.data);
      }}
    >
      <td>{props.sn + 1}</td>
      <td>{props.data.tIssue}</td>
      <td>{props.data.tCreator}</td>
      <td>{props.data.tHead}</td>
      <td>
        <span className={props.badge}>{props.data.tPriority}</span>
      </td>
    </tr>
  );
};

export default Li;
