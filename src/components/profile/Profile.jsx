import './_profile.scss';
import React from 'react';

const Profile = ({profile}) => {
  return (
    <div className='profile'>
      <img className='profile-image' src={profile.image} alt='' />
      <div className='card'>
        <h2>
          {profile.name} {profile.surname}
        </h2>
        <p>
          <i className='bx bxs-city'></i>
          {profile.city}{' '}
        </p>
        <p>
          <i className='bx bx-calendar-heart'></i>
          {profile.birthDate}
        </p>
        <p>
          <i className='bx bxs-envelope'></i>
          <a href={'mailto:' + profile.email}>gsantosorellana.dev@gmail.com</a>
        </p>

        <p>
          <i className='bx bxl-github'></i>
          <a target='_blank' rel='noreferrer' href={profile.gitHub}>
            /GonzaloSantos1
          </a>
        </p>
        <p>
          <i class='bx bxl-linkedin-square'></i>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.linkedin.com/in/gonzalo-santos-orellana-820735198/'
          >
            Linkedin
          </a>
        </p>
      </div>
    </div>
  );
};

export default Profile;
