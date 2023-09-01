import React from "react"
import { useState } from "react";
import "../App.css";


function Conference({ numberOfFields, setNumberOfFields }) {
  const currKey = "Conference";
  const [required, setRequired] = useState({
    "First Name*": "",
    "Title Of Paper": "",
    "Conducted By":"",
    "Name of Conference":"",
    "Place of Conference : City*":"",
    "Conference Date : From*":"",
    "Conference Date : To*":"",
  });



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

  const handleFirstNameChanged = (e) => {
    setRequired({ ...required, "First Name": e.target.value });
  };
  const handleTitlePaperNameChanged = (e) => {
    setRequired({ ...required, "Title Of Paper": e.target.value });
  };
  const handleConductedChanged = (e) => {
    setRequired({ ...required, "Conducted By": e.target.value });
  }
  const handleConferenceChanged = (e) => {
    setRequired({ ...required, "Name of Conference": e.target.value });
  };
  const handlePlaceChanged = (e) => {
    setRequired({ ...required,  "Place of Conference : City*": e.target.value });
  };

  const handleDateFromChanged= (e) => {
    setRequired({ ...required, "Conference Date : From*": e.target.value });
  };
  const handleDateToChanged = (e) => {
    setRequired({ ...required, "Conference Date : To*": e.target.value });
  };

  const renderFields = (index) => {
    const fields = [];
    for (let i = 0; i < numberOfFields[currKey][index]; i++) {
      fields.push(
        <div className="nametitle">
          <div className="inputfield">
            <div className="inputfieldtext">
              <label for="fname">First Name*</label>
            </div>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your first name"
              onChange={(e) => handleFirstNameChanged(e)}
            />
          </div>

          <div className="inputfield">
            <div className="inputfieldtext">
              <label for="fname">Middle Name</label>
            </div>
            <input type="text" id="fname" name="lastname" placeholder="Your Middle name" />
          </div>

        
          <div className="inputfield">
            <div className="inputfieldtext">
              <label for="fname">Last Name</label>
            </div>
            <input type="text" id="fname" name="lastname" placeholder="Your last name" />
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
      <div className='title'> Please Enter The Following Details :-</div>
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
      <label for="fname">Title of Paper*</label>
      </div>
      <input type="text" id="fname" name="lastname" placeholder="Paper Title"
      onChange={(e) => handleTitlePaperNameChanged(e)}/>
      </div>

      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Conducted By*</label>
      </div>
      <input type="text" id="fname" name="lastname" placeholder="conducted by"
      onChange={(e) => handleConductedChanged(e)}/>
      </div>

      <div className='inputfield' style={{marginLeft:"7%",width:90}}>
      <div className='inputfieldtext' style={{marginLeft:"-95%",marginBottom:"12%"}}>
      <label for="fname">Category</label>
      </div>
    <select class="form-select" id="year" name="year"  style={{marginLeft:"-100%"}} >
    <option value="">Category</option>
    <option value="1940">Publisher</option>
    <option value="1941">DOI</option>

  
</select>
      </div>

      </div>

    <div className='nametitle'> 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Name of Conference*</label>
      </div>
      <input type="text" id="fname" name="lastname" placeholder="Conference Name"
      onChange={(e) => handleConferenceChanged(e)}/>
      </div>

      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Abbreviated Conference Name</label>
      </div>
      <input type="text" id="fname" name="lastname" placeholder="Abbreviation"/>
      </div>

      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Sponsoring Agency</label>
      </div>
      <input type="text" id="fname" name="lastname" placeholder="Agency Name"/>
      </div>
      </div>

        <p style={{color: "white", height:"0.5px", background:"white",width:"80%",textAlign:"center" , marginLeft:"14%", marginBottom:"3%",marginTop:"3%"}}></p>



      
      <div className='nametitle'> 

      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Place of Conference : City*</label>
      </div>
      <input type='text' id="page" name="lastname" placeholder="City"
      onChange={(e) => handlePlaceChanged(e)}/>
      </div>

      
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
      <label for="fname">Venue</label>
      </div>
      <input type='text' id="page" name="lastname" placeholder="venue of conference"/>
      </div>
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Conference Date : From*</label>
      </div>
      <input type='date' id="page" name="lastname" placeholder="From"
      onChange={(e) => handleDateFromChanged(e)}/>
      </div>
 
      <div className='inputfield'>
      <div className='inputfieldtext'>
      <label for="fname">Conference Date : To*</label>
      </div>
      <input type="date" id="page" name="lastname" placeholder="To"
      onChange={(e) => handleDateToChanged(e)}/>
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

export default Conference
