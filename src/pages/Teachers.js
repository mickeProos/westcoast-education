import TeacherList from "../components/TeacherList";
import InfoContext from '../store/InfoContext';
import React, { useContext} from 'react'

const Teachers = () => {
    const context = useContext(InfoContext);
  return (
    <div>
    <div className="infoContainer">
      <h1>Teachers</h1>
      {
      context.teachers.map((teacher,i) =>{
         return <TeacherList data={teacher} key={i} />
      })
      }
    </div>
  </div>
  );
};

export default Teachers;