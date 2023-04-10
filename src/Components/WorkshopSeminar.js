import React from 'react'

function WorkshopSeminar() {
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
    <option value="1940">Conducted</option>
    <option value="1941">Attended</option>
  
</select>
</div>

      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Number of Participants</label>
      </div>
      <input type="number" id="fname" name="lastname" placeholder="No. of participants"/>
      </div>
      </div>


      <div className='nametitle' > 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Coordinator's First Name</label>
      </div>
      <input type="text" id="fname" name="lastname" placeholder="First Name"/>
      </div>

      <div className='inputfield' >
      <div className='inputfieldtext'>
      <label for="fname">Coordinator's Last Name</label>
      </div>
      <input type="text" id="fname" name="lastname" placeholder="Last name"/>
      </div>
      </div>

      <p style={{color: "white", height:"0.5px", background:"white",width:"80%",textAlign:"center" , marginLeft:"14%", marginBottom:"3%",marginTop:"3%"}}></p>



    <div className='nametitle'> 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Name of Programme</label>
      </div>
      <input type="text" id="fname" name="lastname" placeholder="Programme Name"/>
      </div>

      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Place : City</label>
      </div>
      <input type="text" id="fname" name="lastname" placeholder="City"/>
      </div>
      </div>

      <div className='nametitle'> 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Place : State</label>
      </div>
      <input type="text" id="fname" name="lastname" placeholder="State"/>
      </div>

      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Place : Country</label>
      </div>
      <input type="text" id="fname" name="lastname" placeholder="Country"/>
      </div>
      </div>



      <div className='nametitle'> 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Organising Agency</label>
      </div>
      <input type='text' id="page" name="lastname" placeholder="Agency Name"/>
      </div>
 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Sponsoring Agency</label>
      </div>
      <input type="text" id="page" name="lastname" placeholder="Agency Name"/>
      </div>
      </div>
      

      

     
  
      <div className='buttoncontainer'> 
    <button class="button-43" role="button" style={{marginLeft:"38.5%"}}>Submit</button>
    <button class="button-43" role="button" style={{marginRight:"30%"}}>Export</button>

    </div>

    </div>
  )
}

export default WorkshopSeminar
