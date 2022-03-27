import React from 'react';
import './_projects.scss';
import whackadigglet from '../../assets/whackadigglet.png';
import portfolio from '../../assets/portfolio.png';
import pokeapi from '../../assets/pokeapi.png';
import todolist from '../../assets/todolist.png';

const Projects = () => {
  return (
    <div className='projects'>
      <div className='container'>
        <div className='text-container'>
          <h2>PokeAPI</h2>
          <p>
            Developed a Pokédex and whack-a-mole game fetching data from an API REST using Node.js,
            HTML5, CSS3 and JavaScript.
          </p>
          <div className='project-buttons'>
            <a
              className='demo'
              href='https://poke-api-psi.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Demo
            </a>
            <a
              className='github'
              href='https://github.com/GonzaloSantos1/poke-api'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
          </div>
        </div>
        <img className='project-img' src={pokeapi} alt='' />
      </div>
      <div className='container'>
        <img className='project-img' src={portfolio} alt='' />
        <div className='text-container'>
          <h2>This Portfolio</h2>
          <p>CV Portfolio using React, Sass and CSS3.</p>
          <div className='project-buttons2'>
            <a
              className='demo'
              href='https://gonzalo-portfolio.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Demo
            </a>
            <a
              className='github'
              href='https://github.com/GonzaloSantos1/gonzalo-portfolio'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='text-container'>
          <h2>Todo List</h2>
          <p>Built a simple Todo List using HTML5, CSS3 and Javascript.</p>
          <div className='project-buttons'>
            <a
              className='demo'
              href='https://todo-list-app-indol.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Demo
            </a>
            <a
              className='github'
              href='https://github.com/GonzaloSantos1/todo-list'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
          </div>
        </div>
        <img className='project-img-todolist' src={todolist} alt='' />
      </div>
    </div>
  );
};

export default Projects;
