import React from 'react'

function FacultyDevProg() {
  return (
    <div className='containerbox'>
      <div className='title'>
        Please Enter The Following Details :-     
      </div>

      <label for="fname">First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your first name"/>

      <label for="fname">Last Name</label>
      <input type="text" id="fname" name="lastname" placeholder="Your last name"/>
    
      <label for="fname">Year</label>
      <input type="text" id="fname" name="Year" placeholder="Year"/>

      <label for="fname">Duration From</label>
      <input type="date" id="fname" name="lastname" placeholder="Duration from"/>

      <label for="fname">Duration To</label>
      <input type="date" id="fname" name="Journal" placeholder="Duration To"/>
    
      <label for="fname">Title Of Programme</label>
      <input type="text" id="fname" name="Department" placeholder="Programme Title"/>
  
    <div className='buttoncontainer'> 
    <button class="button-43" role="button">Submit</button>
    <button class="button-43" role="button">Export</button>

    </div>

    </div>
  )
}

export default FacultyDevProg
