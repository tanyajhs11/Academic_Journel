import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';

function WorkshopSeminar({ numberOfFields, setNumberOfFields }) {
  const currKey = "WorkshopSeminar";
  const [required, setRequired] = useState({
    "Coordinator's First Name*": "",
    "Name Of WorkShop*": "",
    "Start Date:*": "",
    "End Date:*": "",
    "Name of Programme*": "",
    "Place : City*": "",
  });

  const handleFirstNameChanged = (e) => {
    setRequired({ ...required, "Coordinator's First Name*": e.target.value });
  };

  const handleWorkshopChanged = (e) => {
    setRequired({ ...required, "Name Of WorkShop*": e.target.value });
  };

  const handleDateToChanged = (e) => {
    setRequired({ ...required, "Start Date:*": e.target.value });
  };

  const handleDateFromChanged = (e) => {
    setRequired({ ...required, "End Date:*": e.target.value });
  };

  const handleProgrammeChanged = (e) => {
    setRequired({ ...required, "Name of Programme*": e.target.value });
  };

  const handleCityChanged = (e) => {
    setRequired({ ...required, "Place : City*": e.target.value });
  };

  const handleSubmitButtonClicked = async () => {
    let flag = false;
    for (const key in required) {
      if (required[key] === "") {
        flag = true;
        break;
      }
    }

    if (flag) {
      alert("Please fill all the required fields");
    } else {
      try {
        const docRef = await addDoc(collection(db, currKey), required);
        console.log("Document written with ID: ", docRef.id);
        alert("Updated Successfully");
      } catch (e) {
        console.error("Error adding document: ", e);
        alert("Error updating data");
      }
    }
  };

  return (
    <div className='containerbox1'>
      <div className='title'>
        Please Enter The Following Details :-     
      </div>

      <div className='nametitle' > 
        <div className='inputfield'>
          <div className='inputfieldtext'>
            <label htmlFor="fname">Coordinator's First Name*</label>
          </div>
          <input
            type="text"
            id="fname"
            name="lastname"
            placeholder="First Name"
            onChange={(e) => handleFirstNameChanged(e)}
          />
        </div>

        <div className='inputfield'>
          <div className='inputfieldtext'>
            <label htmlFor="fname">Coordinator's Middle Name</label>
          </div>
          <input
            type="text"
            id="fname"
            name="lastname"
            placeholder="Middle Name"
          />
        </div>

        <div className='inputfield' >
          <div className='inputfieldtext'>
            <label htmlFor="fname">Coordinator's Last Name</label>
          </div>
          <input
            type="text"
            id="fname"
            name="lastname"
            placeholder="Last name"
          />
        </div>
      </div>

      <div className='nametitle' > 
        <div className='inputfield'>
          <div className='inputfieldtext'>
            <label htmlFor="fname">Name Of WorkShop*</label>
          </div>
          <input
            type="text"
            id="fname"
            name="lastname"
            placeholder="Workshop Name"
            onChange={(e) => handleWorkshopChanged(e)}
          />
        </div>

        <div className='inputfield'>
          <div className='inputfieldtext'>
            <label htmlFor="fname">Start Date:*</label>
          </div>
          <input
            type="date"
            id="fname"
            name="lastname"
            placeholder="From"
            onChange={(e) => handleDateFromChanged(e)}
          />
        </div>

        <div className='inputfield' >
          <div className='inputfieldtext'>
            <label htmlFor="fname">End Date:*</label>
          </div>
          <input
            type="date"
            id="fname"
            name="lastname"
            placeholder="To"
            onChange={(e) => handleDateToChanged(e)}
          />
        </div>
      </div>

      <div className='nametitle'> 
        <div className='inputfield' style={{marginLeft:"7%",width:90}}>
          <div className='inputfieldtext' style={{marginLeft:"-95%",marginBottom:"12%"}}>
            <label htmlFor="fname">Category</label>
          </div>
          <select className="form-select" id="year" name="year" style={{marginLeft:"-100%"}} >
            <option value="">Category</option>
            <option value="1940">Conducted</option>
            <option value="1941">Attended</option>
          </select>
        </div>

        <div className='inputfield'>
          <div className='inputfieldtext'>
            <label htmlFor="fname">Name Of Department</label>
          </div>
          <input
            type="text"
            id="page"
            name="lastname"
            placeholder="Department Name"
          />
        </div>

        <div className='inputfield'>
          <div className='inputfieldtext'>
            <label htmlFor="fname">Number of Participants</label>
          </div>
          <input
            type="number"
            id="fname"
            name="lastname"
            placeholder="No. of participants"
          />
        </div>
      </div>

      <p style={{color: "white", height:"0.5px", background:"white",width:"80%",textAlign:"center" , marginLeft:"14%", marginBottom:"3%",marginTop:"3%"}}></p>

      <div className='nametitle'> 
        <div className='inputfield'>
          <div className='inputfieldtext'>
            <label htmlFor="fname">Name of Programme*</label>
          </div>
          <input
            type="text"
            id="fname"
            name="lastname"
            placeholder="Programme Name"
            onChange={(e) => handleProgrammeChanged(e)}
          />
        </div>

        <div className='inputfield'>
          <div className='inputfieldtext'>
            <label htmlFor="fname">Organising Agency</label>
          </div>
          <input
            type='text'
            id="page"
            name="lastname"
            placeholder="Agency Name"
          />
        </div>

        <div className='inputfield'>
          <div className='inputfieldtext'>
            <label htmlFor="fname">Sponsoring Agency</label>
          </div>
          <input
            type="text"
            id="page"
            name="lastname"
            placeholder="Agency Name"
          />
        </div>
      </div>

      <div className='nametitle'> 
        <div className='inputfield'>
          <div className='inputfieldtext'>
            <label htmlFor="fname">Place : City*</label>
          </div>
          <input
            type="text"
            id="fname"
            name="lastname"
            placeholder="City"
            onChange={(e) => handleCityChanged(e)}
          />
        </div>

        <div className='inputfield'>
          <div className='inputfieldtext'>
            <label htmlFor="fname">Place : State</label>
          </div>
          <input
            type="text"
            id="fname"
            name="lastname"
            placeholder="State"
          />
        </div>

        <div className='inputfield'>
          <div className='inputfieldtext'>
            <label htmlFor="fname">Place : Country</label>
          </div>
          <input
            type="text"
            id="fname"
            name="lastname"
            placeholder="Country"
          />
        </div>
      </div>

      <div className='nametitle'> 
        {/* ... (rest of your existing code) ... */}
      </div>

      <div className="buttoncontainer">
        <button
          className="button-43"
          role="button"
          style={{ marginLeft: "41.5%" }}
          onClick={handleSubmitButtonClicked}
        >
          Submit
        </button>
        <button className="button-43" role="button" style={{ marginRight: "32%" }}>
          Export
        </button>
      </div>
    </div>
  );
}

export default WorkshopSeminar;
