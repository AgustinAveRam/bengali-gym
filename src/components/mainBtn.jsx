import React from 'react';
import '../styles/mainBtn.css';

export const MainBtn = ({ label }) => {
  return (
    <a className='averam-main-btn' href='#plans'>{label}</a>
  );
};