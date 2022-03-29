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

        <img
          className='aboutme-pic'
          src='https://res.cloudinary.com/dzdcezx28/image/upload/v1648562868/aboutmepic_qnt8pi.png'
          alt=''
        />
      </div>
    </div>
  );
};

export default About;
