import React from 'react';
import './_more.scss';
import angular from '../../assets/angular.png';
import css3 from '../../assets/css3.png';
import html5 from '../../assets/html5.png';
import javascript from '../../assets/javascript.png';
import mongodb from '../../assets/mongodb.png';
import node from '../../assets/node.png';
import sass from '../../assets/sass.png';
import react from '../../assets/react.png';

const More = ({more}) => {
  return (
    <div className='skills'>
      <div className='abilities'>
        <h2 className='title'>Skills</h2>
        <div className='card'>
          <img src={angular} alt='' />
          <img src={css3} alt='' />
          <img src={html5} alt='' />
          <img src={javascript} alt='' />
          <img src={mongodb} alt='' />
          <img src={node} alt='' />
          <img className='sass' src={sass} alt='' />
          <img src={react} alt='' />
        </div>
      </div>
      <div className='languages'>
        <h2 className='title'>Languages</h2>
        <div className='card'>
          {more.map((item) => {
            return (
              <div key={JSON.stringify(item)}>
                <p className='language'>{item.language}</p>
                <p>Speaking: {item.splevel}</p>
                <p>Writing: {item.wrlevel}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default More;
