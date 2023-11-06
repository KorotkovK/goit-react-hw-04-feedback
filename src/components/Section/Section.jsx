import React from 'react';

const Section = ({ title, children }) => (
  <div style={{ marginBottom: 20 }}>
    <h2>{title}</h2>
    {children}
  </div>
);

export default Section;
