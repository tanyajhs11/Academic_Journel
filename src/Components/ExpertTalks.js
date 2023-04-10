import React from 'react'

function ExpertTalks() {
  return (
    <div className='containerbox1'>
      <div className='title'>
        Please Enter The Following Details :-     
      </div>

      <div className='nametitle'> 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Faculty's First Name</label>
      </div>
      <input type="text" id="fname" name="firstname" placeholder="Your first name"/>
      </div>

      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Faculty's Last Name</label>
      </div>
      <input type="text" id="fname" name="lastname" placeholder="Your last name"/>
      </div>
      </div>


      <div className='nametitle'> 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Name of Department</label>
      </div>
      <input type="text" id="fname" name="lastname" placeholder="Department Name"/>
      </div>

      <div className='inputfield' style={{marginLeft:"7%",width:90}}>
      <div className='inputfieldtext' style={{marginLeft:"-95%",marginBottom:"12%"}}>
      <label for="fname">Category</label>
      </div>
    <select class="form-select" id="year" name="year" style={{marginLeft:"-100%"}} >
    <option value="">Category</option>
    <option value="1940">Outside LNMIIT</option>
    <option value="1941">Inside LNMIIT</option>
  
</select>
      </div>

      </div>


    <div className='nametitle'> 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Title of Talk</label>
      </div>
      <input type="text" id="fname" name="lastname" placeholder="title"/>
      </div>

      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Name of Programme</label>
      </div>
      <input type="text" id="fname" name="lastname" placeholder="Programme Name"/>
      </div>
      </div>

          <p style={{color: "white", height:"0.5px", background:"white",width:"80%",textAlign:"center" , marginLeft:"14%", marginBottom:"3%",marginTop:"3%"}}></p>


      <div className='nametitle'> 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Sponsoring Agency</label>
      </div>
      <input type='text' id="page" name="lastname" placeholder="Agency name"/>
      </div>
 
      <div className='inputfield' style={{marginLeft:"7%",width:90}}>
      <div className='inputfieldtext' style={{marginLeft:"-95%",marginBottom:"12%"}}>
      <label for="fname">Category of Programme</label>
      </div>
    <select class="form-select" id="year" name="year" style={{marginLeft:"-100%"}} >
    <option value="">Category</option>
    <option value="1940">Short term Training Programme</option>
    <option value="1941">Faculty Dev Programme</option>
    <option value="1941">WorkShop</option>
  
</select>
      </div>

      </div>
      
      <div className='nametitle' style={{marginLeft:"-1.5%"}}> 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Start Date</label>
      </div>
      <input type='date' id="page" name="lastname" placeholder="From"/>
      </div>
 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">End Date</label>
      </div>
      <input type="date" id="page" name="lastname" placeholder="To"/>
      </div>
      </div>

      <div className='nametitle'> 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Venue Of Talk</label>
      </div>
      <input type='text' id="page" name="lastname" placeholder="Venue"/>
      </div>
 
      <div className='inputfield' style={{marginLeft:"7%",width:90}}>
      <div className='inputfieldtext' style={{marginLeft:"-95%",marginBottom:"12%"}}>
      <label for="fname">Mode</label>
      </div>
    <select class="form-select" id="year" name="year" style={{marginLeft:"-100%"}} >
    <option value="">Mode</option>
    <option value="1940">Offline</option>
    <option value="1941">Online</option>
  
</select>
      </div>

      </div>
      <div className='nametitle'> 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Organising Body</label>
      </div>
      <input type='text' id="page" name="lastname" placeholder="Body"/>
      </div>
 
      
      </div>



      

     
  
      <div className='buttoncontainer'> 
    <button class="button-43" role="button" style={{marginLeft:"38.5%"}}>Submit</button>
    <button class="button-43" role="button" style={{marginRight:"30%"}}>Export</button>

    </div>

    </div>
  )
}

export default ExpertTalks
