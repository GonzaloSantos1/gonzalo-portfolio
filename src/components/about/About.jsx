import React from 'react';
import './_about.scss';
import aboutmepic from '../../assets/aboutmepic.png';

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

        <img className='aboutme-pic' src={aboutmepic} alt='' />
      </div>
    </div>
  );
};

export default About;
