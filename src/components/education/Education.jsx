import React from 'react';
import './_education.scss';

const Education = ({education}) => {
  return (
    <div className='education'>
      <div className='main-container'>
        {education.map((item) => {
          return (
            <div className='container' key={JSON.stringify(item)}>
              <i className='bx bxs-terminal' />
              <div className='text'>
                <h4 className='name'>{item.name}</h4>
                <p>{item.where}</p>
                <p>{item.date}</p>
                <p className='description'>{item.description}</p>
              </div>
            </div>
          );
        })}

        <img
          className='education-pic'
          src='https://img.freepik.com/free-vector/programmer-concept-illustration_114360-2417.jpghttps://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg'
          alt=''
        />
      </div>
    </div>
  );
};

export default Education;
