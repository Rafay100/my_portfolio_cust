import React from "react";
import '../app/style/skills.css';

const Skills = () => {
  return (
    <div id= 'skills' className='skills-container'>
      <div className='skills-grid'>
        <div data-aos="zoom-in-up" className='skills-left'>
          <h2 className='skills-heading'>Technologies I work with</h2>
          <p className='skills-text'>
            I have a solid founda nadtion in web development, specializing in
            HTML, CSS, and JavaScript. My experience extends to using frameworks
            like React and Next.js to create dynamic and user-friendly
            application. I'm also proficient in Tailwind CSS for efficient
            stylimg and design. With a passion for learning, I stay update on
            the latest technologies to enchnce my skills set and contribute
            effectively to projects.
          </p>
        </div>
        <div className='skills-right'>
          <div className='skills-icons-grid'>
            <div className='skills-space'>
              <h2 data-aos="zoom-in-up">HTML</h2>
              <h2 data-aos="zoom-in-up">Node.js</h2>
              <h2 data-aos="zoom-in-up">TypeScript</h2>
            </div>
            <div className='skills-space'>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">Next.js</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
