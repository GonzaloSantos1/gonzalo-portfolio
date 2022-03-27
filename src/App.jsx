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
  const [showAbout, setShowAbout] = useState(true);
  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  let showContainer = () => {
    if (showAbout) {
      return <About about={profile.about} />;
    } else if (showEducation) {
      return <Education education={education} />;
    } else if (showExperience) {
      return <Experience experience={experience} />;
    } else if (showProjects) {
      return <Projects />;
    }
  };

  return (
    <div className='App'>
      <div className='container-left'>
        <Profile profile={profile} />
        <div className='buttons-container'>
          <div className='button'>
            <button
              className='btn-about'
              onClick={() => {
                setShowAbout(true);
                setShowEducation(false);
                setShowExperience(false);
                setShowProjects(false);
              }}
            >
              AB
            </button>
            <p>About Me</p>
          </div>
          <div className='button'>
            <button
              className='btn-education'
              onClick={() => {
                setShowAbout(false);
                setShowEducation(true);
                setShowExperience(false);
                setShowProjects(false);
              }}
            >
              ED
            </button>
            <p>Education</p>
          </div>
          <div className='button'>
            <button
              className='btn-experience'
              onClick={() => {
                setShowAbout(false);
                setShowEducation(false);
                setShowExperience(true);
                setShowProjects(false);
              }}
            >
              EX
            </button>
            <p>Experience</p>
          </div>
          <div className='button'>
            <button
              className='btn-skills'
              onClick={() => {
                setShowAbout(false);
                setShowEducation(false);
                setShowExperience(false);
                setShowProjects(true);
              }}
            >
              PR
            </button>
            <p>Projects</p>
          </div>
        </div>
      </div>
      <div className='container-right'>{showContainer()}</div>
    </div>
  );
}

export default App;
