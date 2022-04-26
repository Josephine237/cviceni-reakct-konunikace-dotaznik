import React from 'react';
import Icon from '../Icon/index';
import './style.css';

const Option = ( {onSelected, text, type} ) => {
  const handleClick = () => {
    onSelected(type);
    // console.log(text)
  };


  return (
  <div className="option" onClick={handleClick}>
    <Icon type={type} />
    <div>{text}</div>
  </div>
  )
  };

export default Option;

/* Varianta s props, ale používá se destructuring výše

  const Option = (props) => {

    return (
      <div className="option" onClick={() => props.onSelected(props.type)}>
        <Icon type={props.type} />
        <dic>{props.text}</div>
      </div>
    );
  };
*/