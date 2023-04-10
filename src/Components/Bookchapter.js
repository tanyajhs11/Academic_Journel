import React from 'react'

function Bookchapter() {
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
      <label for="fname">Title of Chapter</label>
      </div>
      <input type="text" id="fname" name="lastname" placeholder="Chapter Title"/>
      </div>

      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Title of Book</label>
      </div>
      <input type="text" id="fname" name="lastname" placeholder="Book Title"/>
      </div>
      </div>


    <div className='nametitle'> 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Publisher</label>
      </div>
      <input type="text" id="fname" name="lastname" placeholder="Publisher"/>
      </div>

      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Editor</label>
      </div>
      <input type="text" id="fname" name="lastname" placeholder="editor"/>
      </div>
      </div>

          <p style={{color: "white", height:"0.5px", background:"white",width:"80%",textAlign:"center" , marginLeft:"14%", marginBottom:"3%",marginTop:"3%"}}></p>


      <div className='nametitle'> 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">ISBN</label>
      </div>
      <input type='text' id="page" name="lastname" placeholder="isbn"/>
      </div>
 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Publisher Address</label>
      </div>
      <input type="text" id="page" name="lastname" placeholder="city"/>
      </div>
      </div>
      
      <div className='nametitle'> 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Publisher Address</label>
      </div>
      <input type='text' id="page" name="lastname" placeholder="state"/>
      </div>
 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Publisher Address</label>
      </div>
      <input type="text" id="page" name="lastname" placeholder="country"/>
      </div>
      </div>

      

     
  
      <div className='buttoncontainer'> 
    <button class="button-43" role="button" style={{marginLeft:"38.5%"}}>Submit</button>
    <button class="button-43" role="button" style={{marginRight:"30%"}}>Export</button>

    </div>

    </div>
  )

}

export default Bookchapter
