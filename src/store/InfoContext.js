import React, { useState, useEffect } from 'react';

const InfoContext = React.createContext({
  teachers: [],
  courses: [],
  postTeacher: ()=>{},
  postCourse: ()=>{},
});

export const InfoContextProvider = (props) => {
  const [teachers, setTeachers] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchTeachers = async()=>{
        const response = await fetch("http://localhost:3001/teachers")
        const data = await response.json()
        setTeachers(data)
    }
    const fetchCourses = async()=>{
      const response = await fetch("http://localhost:3001/courses")
      const data = await response.json()
      setCourses(data)
  }
  fetchTeachers()
  fetchCourses()
  }, []);

  const postTeacher = (teacherBody)=>{
    fetch('http://localhost:3001/teachers', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(teacherBody),
    });
  }

   const postCourse = (courseBody)=>{
    fetch('http://localhost:3001/courses', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
         },
        body: JSON.stringify(courseBody),
     });
   }


  return (
    <InfoContext.Provider
      value={{
        teachers,
        courses,
        postTeacher,
        postCourse
      }}
    >
      {props.children}
    </InfoContext.Provider>
  );
};

export default InfoContext;