import {useState} from 'react';
import Profile from './components/profile/Profile';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import About from './components/about/About';
import {CV} from './cv/CS';
import './_app.scss';

const {profile, education, experience} = CV;

function App() {
  //Components useStates
  const [showComponent, setShowComponent] = useState(4);

  const toggleComponent = (index) => {
    setShowComponent(index);
  };

  const printComponents = () => {
    if (showComponent === 1) {
      return <About about={profile.about} />;
    } else if (showComponent === 2) {
      return <Education education={education} />;
    } else if (showComponent === 3) {
      return <Experience experience={experience} />;
    } else if (showComponent === 4) {
      return <Projects />;
    }
  };

  // active-button for focus effect useStates
  const [isActive, setActive] = useState(4);

  const toggleClass = (index) => {
    setActive(index);
  };

  //DOM
  return (
    <div className='App'>
      <div className='container-left'>
        <Profile profile={profile} />
        <div className='buttons-container'>
          <div className='button'>
            <button
              translate='no'
              className='btn-about'
              onClick={() => {
                toggleComponent(1);
                toggleClass(1);
              }}
            >
              AB
            </button>
            <p className={isActive === 1 ? 'active' : ''}>About Me</p>
          </div>
          <div className='button'>
            <button
              translate='no'
              className='btn-education'
              onClick={() => {
                toggleComponent(2);
                toggleClass(2);
              }}
            >
              ED
            </button>
            <p className={isActive === 2 ? 'active' : ''}>Education</p>
          </div>
          <div className='button'>
            <button
              translate='no'
              className='btn-experience'
              onClick={() => {
                toggleComponent(3);
                toggleClass(3);
              }}
            >
              EX
            </button>
            <p className={isActive === 3 ? 'active' : ''}>Experience</p>
          </div>
          <div className='button'>
            <button
              translate='no'
              className='btn-skills'
              onClick={() => {
                toggleComponent(4);
                toggleClass(4);
              }}
            >
              PR
            </button>
            <p className={isActive === 4 ? 'active' : ''}>Projects</p>
          </div>
        </div>
      </div>
      <div className='container-right'>{printComponents()}</div>
    </div>
  );
}

export default App;
