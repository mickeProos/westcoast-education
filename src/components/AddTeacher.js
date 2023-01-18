import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InfoContext from '../store/InfoContext';
import React, { useContext} from 'react'



function AddTeacher() {

  const context = useContext(InfoContext);

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const personalNumberInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const competenceAreasInputRef = useRef();

  const clearForm = () => {
    firstNameInputRef.current.value = '';
    lastNameInputRef.current.value = '';
    personalNumberInputRef.current.value = '';
    emailInputRef.current.value = '';
    phoneInputRef.current.value = '';
    competenceAreasInputRef.current.value = '';
  };

  const onSubmitHandler = (e) => {

    let firstName = firstNameInputRef.current.value
    let lastName = lastNameInputRef.current.value
    let personalNumber = personalNumberInputRef.current.value
    let email = emailInputRef.current.value
    let phone = phoneInputRef.current.value
    let competenceAreas = competenceAreasInputRef.current.value
    let id = uuidv4()


    const teacherBody = {
      firstName, lastName, personalNumber, email, phone, competenceAreas, id 
    }

    context.postTeacher(teacherBody)
    
  }

  const onCancelClickHandler = (e) => {
    e.preventDefault();
    clearForm();
  }

    return (
        <>
        <h2>Add teacher</h2>
      <form onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor='firstName'>Teachers first name:  </label>
          <input type="text" name='firstName' id='firstName' ref={firstNameInputRef} />
      </div>
      <div>
        <label htmlFor='lastName'>Teachers last name:  </label>
          <input type="text" name='lastName' id='lastName' ref={lastNameInputRef} />
      </div>
      <div>
        <label htmlFor='personalNumber'>Social security number:  </label>
          <input type="text" name='personalNumber' id='personalNumber' ref={personalNumberInputRef} />
      </div>
      <div>
        <label htmlFor='email'>E-mail:  </label>
          <input type="text" name='email' id='email' ref={emailInputRef} />
      </div>
      <div>
        <label htmlFor='phoneNum'>Phone number:  </label>
          <input type="text" name='phone' id='phone' ref={phoneInputRef} />
      </div>
      <div>
        <label htmlFor='competence'>Competencies:  </label>
          <input type="text" name='competenceAreas' id='competenceAreas' ref={competenceAreasInputRef} />
      </div>
      <div className='btns-container'>
      <button>Add</button>
      <button onClick={onCancelClickHandler}>Cancel</button>
      </div>
        
      </form>
      </>
    )
  }

  export default AddTeacher