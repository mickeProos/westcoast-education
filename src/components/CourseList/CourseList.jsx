import { Link } from 'react-router-dom'
import React from "react";

const CourseList  =  ({data}) => {
  return (
    <div className='courseContainer'>
        <Link state={data} to={`/courses/${data?.id}`}>
      <h2>Course name: {data?.name}</h2>
      <p>Course number: {data?.coursenumber}</p>
    </Link>
    </div>
  
  )
}


export default CourseList;