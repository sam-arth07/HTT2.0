//Give a basic template for courses section for rendering purposes
import React from 'react';

const Courses = () => {
    const courses = [
      { id: 1, name: 'Course 1', description: 'This is course 1' },
      { id: 2, name: 'Course 2', description: 'This is course 2' },
      // Add more courses as needed
    ];
  
    return (
      <section id="courses">
        <h2>Courses</h2>
        {courses.map(course => (
          <div key={course.id}>
            <h3>{course.name}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </section>
    );
  };
  
  export default Courses;