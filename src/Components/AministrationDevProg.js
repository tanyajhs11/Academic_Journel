import React from 'react'

function AministrationDevProg() {
  return (
    <div className='containerbox'>
      <div className='title'>
        Please Enter The Following Details :-     
      </div>
      <label for="fname">Year</label>
      <input type="text" id="fname" name="Year" placeholder="Year"/>

      <label for="fname">Duration From</label>
      <input type="date" id="fname" name="lastname" placeholder="Duration from"/>

      <label for="fname">Duration To</label>
      <input type="date" id="fname" name="Journal" placeholder="Duration To"/>
    
      <label for="fname">Title Of Programme</label>
      <input type="text" id="fname" name="Department" placeholder="Programme Title"/>
      
 
        <label for="fname">Number Of Participants</label>
      <input type="text" id="fname" name="paper reviews" placeholder="No. of Participants"/>
     
    
    <div className='buttoncontainer'> 
    <button class="button-43" role="button">Submit</button>
    <button class="button-43" role="button">Export ADP's</button>

    </div>

    </div>
  )
}

export default AministrationDevProg
