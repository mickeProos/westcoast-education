import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InfoContext from '../../store/InfoContext';
import React, { useContext} from 'react'



function AddCourse() {

  const context = useContext(InfoContext);

  const coursenumberInputRef = useRef();
  const nameInputRef = useRef();
  const courseLengthInputRef = useRef();
  const descriptionInputRef = useRef();
  const startingDateInputRef = useRef();
  

  const clearForm = () => {
    coursenumberInputRef.current.value = '';
    nameInputRef.current.value = '';
    courseLengthInputRef.current.value = '';
    descriptionInputRef.current.value = '';
    startingDateInputRef.current.value = '';
  };

  const onSubmitHandler = (e) => {

    let coursenumber = coursenumberInputRef.current.value
    let name = nameInputRef.current.value
    let courseLength = courseLengthInputRef.current.value
    let description = descriptionInputRef.current.value
    let startingDate = startingDateInputRef.current.value
    let id = uuidv4()


    const courseBody = {
      coursenumber, name, courseLength, description, startingDate, id 
    }

    context.postCourse(courseBody)
    
  }

  const onCancelClickHandler = (e) => {
    e.preventDefault();
    clearForm();
  }

    return (
        <>
        <h2>Add Course</h2>
      <form onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor='coursenumber'>Course number: </label>
          <input type="text" name='coursenumber' id='coursenumber' ref={coursenumberInputRef} />
      </div>
      <div>
        <label htmlFor='name'>Course Name:  </label>
          <input type="text" name='name' id='name' ref={nameInputRef} />
      </div>
      <div>
        <label htmlFor='courseLength'>Course Length:  </label>
          <input type="text" name='courseLength' id='courseLength' ref={courseLengthInputRef} />
      </div>
      <div>
        <label htmlFor='description'>Description:  </label>
          <input type="text" name='description' id='description' ref={descriptionInputRef} />
      </div>
      <div>
        <label htmlFor='startingDate'>Starting Date:  </label>
          <input type="text" name='startingDate' id='startingDate' ref={startingDateInputRef} />
      </div>
      
      <div className='btns-container'>
      <button>Add</button>
      <button onClick={onCancelClickHandler}>Cancel</button>
      </div>
        
      </form>
      </>
    )
  }

  export default AddCourse