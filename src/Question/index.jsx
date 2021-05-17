import React from 'react';
import QuestionBody from '../QuestionBody/index';
import Option from '../Option/index';
import './style.css';

const Question = (props) => (
  <div className="question">
    <QuestionBody 
      iconType="symbolQuestion" 
      text={props.text}
    />
    <div className="question__options">
      <Option type="smileyStrongYes" text="Souhlasím"/>
      <Option type="smileyYes" text="Spíše souhlasím"/>
      <Option type="smileyNeutral" text="Nevím"/>
      <Option type="smileyNo" text="Spíše nesouhlasím"/>
      <Option type="smileyStrongNo" text="Nesouhlasím"/>
    </div>
  </div>
);

export default Question;
