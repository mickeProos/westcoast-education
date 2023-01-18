import { Link } from "react-router-dom";
import React from "react";

const TeacherList  =  ({data}) => {
  return (
    <div className='teacherContainer'>
        <Link state={data} to={`/teachers/${data?.id}`}>
      <h2>Teacher firstname: {data?.firstName}</h2>
      <h3>Teacher lastname: {data?.lastName}</h3>
    </Link>
    </div>
  
  )
}


export default TeacherList;