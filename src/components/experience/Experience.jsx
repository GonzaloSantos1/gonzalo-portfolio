import React from 'react';
import './_experience.scss';

const Experience = ({experience}) => {
  return (
    <div className='experience'>
      <div className='main-container'>
        {experience.map((item) => {
          return (
            <div className='container' key={JSON.stringify(item)}>
              <i className='bx bxs-bug-alt' />
              <div className='text'>
                <p className='name'>{item.name}</p>
                <p>{item.date}</p>
                <p>{item.where}</p>
                <p className='description'>{item.description}</p>
              </div>
            </div>
          );
        })}
        <img
          className='experience-pic'
          src='https://res.cloudinary.com/dzdcezx28/image/upload/v1648562868/experience_axm6au.png'
          alt=''
        />
      </div>
    </div>
  );
};

export default Experience;
