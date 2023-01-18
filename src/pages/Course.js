import {  useLocation } from "react-router-dom";


const Course = () => {
   
  const { state } = useLocation();
  console.log(state)

    return ( 
      <>
      <h1>Course detail</h1>
      <h2> Course name: {state?.name}</h2>
      <p> Course number: {state?.coursenumber}</p>
      <p> Length: {state?.courseLength} weeks</p>
      <p> Description: {state?.description}</p>
      <p> Start date: {state?.startingDate}</p>
    </>
     );
}
 
export default Course;