import React from 'react'
import { useState } from "react";

function ExpertTalks({ numberOfFields, setNumberOfFields }) {
  const currKey = "ExpertTalks";
  const [required, setRequired] = useState({
    "Faculty's First Name*": "",
    "Title of Talk*": "",
    "Name of Programme*":"",
    "Venue of Talk*":"",
    "Date of Talk*":"",
  });
  const handleFirstNameChanged = (e) => {
    setRequired({ ...required, "Faculty's First Name*": e.target.value });
  };
  const handleTitleTalkChanged = (e) => {
    setRequired({ ...required, "Title of Talk*": e.target.value });
  };
  const handleProgrammeChanged = (e) => {
    setRequired({ ...required, "Name of Programme*": e.target.value });
  };
  const handleVenueChanged = (e) => {
    setRequired({ ...required, "Venue of Talk*": e.target.value });
  };

  const handleDateChanged = (e) => {
    setRequired({ ...required, "Date of Talk*": e.target.value });
  };



  const handleAddMoreClicked = (index) => {
    const newNumberOfFields = [...numberOfFields[currKey]];
    newNumberOfFields[index] += 1;
    setNumberOfFields({ ...numberOfFields, [currKey]: newNumberOfFields });
  };

  const handleRemoveClicked = (index) => {
    const newNumberOfFields = [...numberOfFields[currKey]];
    newNumberOfFields[index] != 1
      ? (newNumberOfFields[index] -= 1)
      : (newNumberOfFields[index] = 1);

    setNumberOfFields({ ...numberOfFields, [currKey]: newNumberOfFields });
  };
  const renderFields = (index) => {
    const fields = [];
    for (let i = 0; i < numberOfFields[currKey][index]; i++) {
      fields.push(
      <div className='nametitle'> 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Faculty's First Name*</label>
      </div>
      <input type="text" id="fname" name="firstname" placeholder="Your first name"
      onChange={(e) => handleFirstNameChanged(e)}
      />
      </div>

      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Faculty's Middle Name</label>
      </div>
      <input type="text" id="fname" name="firstname" placeholder="Your Middle name"/>
      </div>

      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Faculty's Last Name</label>
      </div>
      <input type="text" id="fname" name="lastname" placeholder="Your last name"/>
      </div>
      </div>
        
      );
    }
    return fields;
  };


  const handleSubmitButtonClicked = () => {
    let flag = false;
    for (const key in required) {
      if (required[key] === "") {
        flag = true;
        break;
      }
    }
    flag ? alert("Please fill all the required fields") : alert("Updated Successfully");
  };
  return (
    <div className='containerbox1'>
      <div className='title'> Please Enter The Following Details :- </div>

      <div>
        
        </div>
        
        <div>
          <button
            style={{position:"relative",left:"1120px",top:"22px"}} onClick={() => handleAddMoreClicked(0)}>Add More</button>
        </div>
  
        <div>
          <button 
            style={{ marginLeft: "85%",position:"relative",left:"100px"}}onClick={() => handleRemoveClicked(0)}>Remove</button>
        </div>
        {renderFields(0)}
  

    
      
      <div className='nametitle'> 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Name of Department</label>
      </div>
      <input type="text" id="fname" name="lastname" placeholder="Department Name"/>
      </div>

      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Title of Talk*</label>
      </div>
      <input type="text" id="fname" name="lastname" placeholder="title"
      onChange={(e) => handleTitleTalkChanged(e)}/>
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
      <label for="fname">Name of Programme*</label>
      </div>
      <input type="text" id="fname" name="lastname" placeholder="Programme Name"
      onChange={(e) => handleProgrammeChanged(e)}/>
      </div>

      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Sponsoring Agency</label>
      </div>
      <input type='text' id="page" name="lastname" placeholder="Agency name"/>
      </div>
 
      <div className='inputfield' style={{marginLeft:"7%",width:90}}>
      <div className='inputfieldtext' style={{marginLeft:"-95%",marginBottom:"12%"}}>
      <label for="fname">Category:Progamme</label>
      </div>
    <select class="form-select" id="year" name="year" style={{marginLeft:"-100%"}} >
    <option value="">Category</option>
    <option value="1940">Short term Training Programme</option>
    <option value="1941">Faculty Dev Programme</option>
    <option value="1941">WorkShop</option>
  
</select>
      </div>

      

      </div>

      <p style={{color: "white", height:"0.5px", background:"white",width:"80%",textAlign:"center" , marginLeft:"14%", marginBottom:"3%",marginTop:"3%"}}></p>
      
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

      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Organising Body</label>
      </div>
      <input type='text' id="page" name="lastname" placeholder="Body"/>
      </div>
      </div>

      <div className='nametitle'> 

      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Venue of Talk*</label>
      </div>
      <input type='text' id="page" name="lastname" placeholder="Venue"
      onChange={(e) => handleVenueChanged(e)}/>
      </div>

      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Date Of Talk*</label>
      </div>
      <input type="date" id="page" name="lastname" placeholder="To"
      onChange={(e) => handleDateChanged(e)}/>
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



      

     
  
      <div className="buttoncontainer">
        <button
          class="button-43"
          role="button"
          style={{ marginLeft: "41.5%" }}
          onClick={handleSubmitButtonClicked}
        >
          Submit
        </button>
        <button class="button-43" role="button" style={{ marginRight: "32%" }}>
          Export
        </button>
      </div>
    </div>
  )
}

export default ExpertTalks
