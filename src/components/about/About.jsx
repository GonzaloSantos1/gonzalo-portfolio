import React from 'react';
import './_about.scss';

const About = ({about}) => {
  return (
    <div className='about'>
      <div className='main-container'>
        {about.map((item) => {
          return (
            <div className='container' key={JSON.stringify(item)}>
              <i className='bx bx-expand-horizontal' />
              <div className='text-about'>
                <p className='name'>{item.info}</p>
              </div>
            </div>
          );
        })}
        <div className='image-container'>
          <img
            src='https://img.freepik.com/free-vector/developer-activity-concept-illustration_114360-1643.jpg'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default About;
