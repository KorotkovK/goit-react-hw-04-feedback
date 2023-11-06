import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <button
        key={option}
        onClick={() => onLeaveFeedback(option)}
        style={{ marginRight: 10 }}
      >
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
