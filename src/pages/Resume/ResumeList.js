import React from 'react';
import './ResumeList.css';

const Resume = () => {
const experiences = [
    {
    period: "June 2024 – September 2024",
    location: "hamedan, iran",
    position: "front-end developer",
    company: "pendar.io",
    bullets: [
        "4-Month at Pendar Company: Gained hands-on experience in frontend development using HTML, CSS, JavaScript, and React.",
        "Real-World Project Experience: Worked on multiple projects, focusing on creating responsive, interactive, and user-friendly interfaces.",
        "Optimization & Problem-Solving: Focused on optimizing design components for performance across devices.",
        "Strengthened Technical Foundation: Applied best practices for code structuring and deepened expertise.",
        "Proficiency in Modern Frameworks: Emerged as a proficient frontend developer confident in modern frameworks."
    ]
    },
    {
    period: "September 2024 – February 2025",
    location: "hamedan, iran",
    position: "front-end developer",
    company: "Bu_Ali Sina university project",
    bullets: [
        "Frontend Development for Bu-Ali University's Attendance Website: Led the project from UI/UX design to implementation.",
        "Key Features Built: Developed data filtering, search functionality, and API integrations.",
        "Skills Developed: Honed skills in React, Redux, TypeScript, and Progressive Web Apps (PWA).",
        "Third-Party Integrations: Worked with third-party libraries and Material UI.",
        "Independent Management: Managed all frontend aspects independently.",
        "Boosted Confidence: Enhanced ability to deliver high-quality user experiences."
    ]
    },
    {
    period: "February 2025",
    location: "hamedan, iran",
    position: "front-end developer",
    company: "Personal Portfolio Website Project",
    bullets: [
        "UI/UX Design: Independently designed and implemented the user interface.",
        "Technologies: Built with React.js, Material UI, and TypeScript.",
        "API Calls: Integrated multiple APIs for dynamic interactions.",
        "Code Quality: Followed best coding practices using Prettier and TypeScript.",
        "Next.js Version: Currently developing a Next.js version for improved performance."
    ]
    }
];

return (
    <div className="resume-container">
    <h1 className="resume-title">Working Experience</h1>
    
    <section className="experience-section">
        <div className="timeline">
        {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
            <div className="timeline-period">
                <span className="period">{exp.period}</span>
                <span className="location">{exp.location}</span>
            </div>
            
            <div className="experience-content">
                <h3 className="position">{exp.position}</h3>
                <p className="company">{exp.company}</p>
                
                <ul className="bullet-points">
                {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                ))}
                </ul>
            </div>
            </div>
        ))}
        </div>
    </section>
    </div>
);
};

export default Resume;