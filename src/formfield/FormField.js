import React from 'react';

const FormField = props => {
    return (
      <form>
        <label className='label'>{props.label}</label>
        <type className='type'>{props.type}</type>
        <placeholder className='placeholder'>{props.placeholder}</placeholder>
      </form>
    );
};
  
export default FormField