import React from 'react';

const CoolButton = props => {
    let className =  "button " + props.className
    if (props.isSmall) {
        className += ' is-small'
    }  
    if (props.isDanger) {
        className += ' is-danger'
    }  
    if (props.isSuccess) {
        className += ' is-success'
    }  
    return (
      <span>
        <button className={className}>{props.label}</button>
      </span>
    );
};
  
export default CoolButton

// let classValue = props.isSmall ? 'isDanger' : 'isSuccess'