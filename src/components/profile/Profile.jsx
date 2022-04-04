import './_profile.scss';
import React from 'react';
import Gonzalo_Santos_Resume from '../../assets/Gonzalo_Santos_Resume.pdf';

const Profile = ({profile}) => {
  return (
    <div className='profile'>
      <img className='profile-image' src={profile.image} alt='' />
      <div className='card'>
        <h2>
          {profile.name} {profile.surname}
        </h2>
        <p>
          <i className='bx bxs-home'></i>
          {profile.city}{' '}
        </p>

        <p>
          <i className='bx bxs-envelope'></i>
          gsantosorellana.dev@gmail.com
        </p>

        <p>
          <i className='bx bxl-github'></i>
          <a target='_blank' rel='noreferrer' href={profile.gitHub}>
            /GonzaloSantos1
          </a>
        </p>
        <p>
          <i className='bx bxl-linkedin-square'></i>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.linkedin.com/in/gonzalo-santos-orellana-820735198/'
          >
            Linkedin
          </a>
        </p>
        <p>
          <i className='bx bxs-download' />
          <a href={Gonzalo_Santos_Resume} download>
            Resume download
          </a>
        </p>
      </div>
    </div>
  );
};

export default Profile;
