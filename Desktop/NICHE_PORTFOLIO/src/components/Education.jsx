import React from 'react';
import './Education.css';

const educationData = [
    {
        school: "University of Texas at Arlington",
        degree: "M.S. in Computer Science",
        gpa: "3.7/4.0",
        coursework: "Distributed Systems, Cloud Computing, Machine Learning, Database Systems, Data Mining, Design and Analysis of Algorithms"
    }
];

const Education = () => {
    return (
        <section className="section education-section" id="education">
            <div className="container">
                <h2 className="section-title"><span className="gradient-text">Education</span></h2>

                <div className="education-single-column">
                    {educationData.map((edu, index) => (
                        <div className="edu-card" key={index}>
                            <div className="edu-header">
                                <h4 className="school-name">{edu.school}</h4>
                                <span className="edu-gpa">GPA: {edu.gpa}</span>
                            </div>
                            <h5 className="degree-name">{edu.degree}</h5>
                            <p className="coursework">
                                <span className="label">Key Coursework:</span> {edu.coursework}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
