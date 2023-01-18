import { useLocation } from 'react-router-dom'

const Teacher = () => {

  const { state } = useLocation();

console.log(state)

  return(
  <>
  <h1> Teacher details</h1>
  <h2> First name: {state?.firstName}</h2>
  <h3> Last name: {state?.lastName}</h3>
  <p> Social security number: {state?.personalNumber}</p>
  <p> E-mail: {state?.email}</p>
  <p> Phone number: {state?.phone}</p>
  <p> Competencies: {state?.competenceAreas}</p>
</>
  )
};

export default Teacher;