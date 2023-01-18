import CourseList from "../components/CourseList/CourseList";
import InfoContext from '../store/InfoContext';
import React, { useContext} from 'react'

const Courses = () => {
  const context = useContext(InfoContext);

    return (
  <div>
    <div className="infoContainer">
      <h1>Courses</h1>
      {
      context.courses.map((course,i) =>{
         return <CourseList data={course} key={i} />
      })
      }
    </div>
  </div>
)
}

export default Courses