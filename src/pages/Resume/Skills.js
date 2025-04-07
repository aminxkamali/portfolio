import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    { name: 'HTML5', percentage: 95 },
    { name: 'CSS', percentage: 95 },
    { name: 'Javascript', percentage: 70 },
    { name: 'ReactJS', percentage: 80 },
    { name: 'next.js', percentage: 40 },
    { name: 'C++', percentage: 85 },
    { name: 'Material UI', percentage: 90 },
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-title">MY SKILLS</h2>
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.percentage}%</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;