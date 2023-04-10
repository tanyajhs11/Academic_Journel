import React from 'react'

function InvitedTalks() {
  
  return (
    <div className='containerbox1'>
      <div className='title'>
        Please Enter The Following Details :-     
      </div>
      

      <div className='nametitle'> 
      <div className='inputfield' style={{marginLeft:"7%",width:90}}>
      <div className='inputfieldtext' style={{marginLeft:"-95%",marginBottom:"12%"}}>
      <label for="fname">Category</label>
      </div>
    <select class="form-select" id="year" name="year" style={{marginLeft:"-100%"}} >
    <option value="">Category</option>
    <option value="1940">LNM Distinguised Lecture</option>
    <option value="1941">Conference</option>
    <option value="1941">Workshop</option>
    <option value="1941">Short Term Training Programme</option>
    <option value="1941">Faculty Development Programme</option>
  
</select>
</div>

      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Title of Talk</label>
      </div>
      <input type="text" id="fname" name="lastname" placeholder="title"/>
      </div>
      </div>


      <div className='nametitle' > 
      <div className='inputfield'style={{marginLeft:"-0.3%"}}>
      <div className='inputfieldtext'>
      <label for="fname">Date of Talk</label>
      </div>
      <input type="date" id="fname" name="lastname" placeholder="Chapter Title"/>
      </div>

      <div className='inputfield' style={{marginLeft:"1.8%"}} >
      <div className='inputfieldtext'>
      <label for="fname">Name of Agency</label>
      </div>
      <input type="text" id="fname" name="lastname" placeholder="Agency name"/>
      </div>
      </div>

      <p style={{color: "white", height:"0.5px", background:"white",width:"80%",textAlign:"center" , marginLeft:"14%", marginBottom:"3%",marginTop:"3%"}}></p>



    <div className='nametitle'> 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Expert Details : Salutation</label>
      </div>
      <input type="text" id="fname" name="lastname" placeholder="salutation"/>
      </div>

      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Expert Details : Name</label>
      </div>
      <input type="text" id="fname" name="lastname" placeholder="Name"/>
      </div>
      </div>



      <div className='nametitle'> 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Expert Details : Organisation</label>
      </div>
      <input type='text' id="page" name="lastname" placeholder="organisation"/>
      </div>
 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Expert Details : Place</label>
      </div>
      <input type="text" id="page" name="lastname" placeholder="city"/>
      </div>
      </div>
      

      

     
  
      <div className='buttoncontainer'> 
    <button class="button-43" role="button" style={{marginLeft:"38.5%"}}>Submit</button>
    <button class="button-43" role="button" style={{marginRight:"30%"}}>Export</button>

    </div>

    </div>
  )

}

export default InvitedTalks
