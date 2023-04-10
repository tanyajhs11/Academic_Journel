import React from 'react'
import "../App.css";


function Conference() {
  return (
    <div className='containerbox1'>
      <div className='title'>
        Please Enter The Following Details :-     
      </div>

      <div className='nametitle'> 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">First Name</label>
      </div>
      <input type="text" id="fname" name="firstname" placeholder="Your first name"/>
      </div>

      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Last Name</label>
      </div>
      <input type="text" id="fname" name="lastname" placeholder="Your last name"/>
      </div>
      </div>


      <div className='nametitle'> 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Title of Paper</label>
      </div>
      <input type="text" id="fname" name="lastname" placeholder="Paper Title"/>
      </div>

      <div className='inputfield' style={{marginLeft:"7%",width:90}}>
      <div className='inputfieldtext' style={{marginLeft:"-95%",marginBottom:"12%"}}>
      <label for="fname">Category</label>
      </div>
    <select class="form-select" id="year" name="year" style={{marginLeft:"-100%"}} >
    <option value="">Category</option>
    <option value="1940">Publisher</option>
    <option value="1941">DOI</option>
  
</select>
      </div>

      </div>

    <div className='nametitle'> 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Name of Conference</label>
      </div>
      <input type="text" id="fname" name="lastname" placeholder="Conference Name"/>
      </div>

      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Abbreviated Conference Name</label>
      </div>
      <input type="text" id="fname" name="lastname" placeholder="Abbreviation"/>
      </div>
      </div>

          <p style={{color: "white", height:"0.5px", background:"white",width:"80%",textAlign:"center" , marginLeft:"14%", marginBottom:"3%",marginTop:"3%"}}></p>


      <div className='nametitle'> 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Venue</label>
      </div>
      <input type='text' id="page" name="lastname" placeholder="venue of conference"/>
      </div>
 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Place of Conference : City</label>
      </div>
      <input type="text" id="page" name="lastname" placeholder="city"/>
      </div>
      </div>
      
      <div className='nametitle'> 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Place of Conference : State</label>
      </div>
      <input type='text' id="page" name="lastname" placeholder="state"/>
      </div>
 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Place of Conference : Country</label>
      </div>
      <input type="text" id="page" name="lastname" placeholder="country"/>
      </div>
      </div>

      <div className='nametitle' style={{marginLeft:"-1.5%"}}> 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Conference Date : From</label>
      </div>
      <input type='date' id="page" name="lastname" placeholder="From"/>
      </div>
 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Conference Date : To</label>
      </div>
      <input type="date" id="page" name="lastname" placeholder="To"/>
      </div>
      </div>

      

     
  
      <div className='buttoncontainer'> 
    <button class="button-43" role="button" style={{marginLeft:"38.5%"}}>Submit</button>
    <button class="button-43" role="button" style={{marginRight:"30%"}}>Export</button>


    </div>

    </div>
  )

}

export default Conference
