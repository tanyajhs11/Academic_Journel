import React, { useState } from 'react';
import { db, collection, addDoc } from '../firebaseConfig';

function PaperReviews() {
  const [required, setRequired] = useState({
    "First Name*": "",
    "Department Name*": "",
    "Name of Journal": "",
    "Name of Conference*": "",
  });

  const handleInputChange = (field, value) => {
    setRequired({ ...required, [field]: value });
  };

  const handleSubmitButtonClicked = async () => {
    try {
      const docRef = await addDoc(collection(db, 'paperReviews'), required);
      console.log('Document written with ID: ', docRef.id);
      alert('Updated Successfully');
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Error updating data. Please try again later.');
    }
  };

  return (
    <div className='containerbox1'>
      <div className='title'>Please Enter The Following Details :-</div>

      <div className='nametitle'>
        <div className='inputfield'>
          <div className='inputfieldtext'>
            <label htmlFor="fname">First Name*</label>
          </div>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your first name"
            onChange={(e) => handleInputChange("First Name*", e.target.value)}
          />
        </div>

        <div className='inputfield'>
          <div className='inputfieldtext'>
            <label htmlFor="fname">Middle Name</label>
          </div>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your Middle name"
          />
        </div>

        <div className='inputfield'>
          <div className='inputfieldtext'>
            <label htmlFor="fname">Last Name</label>
          </div>
          <input
            type="text"
            id="fname"
            name="lastname"
            placeholder="Your last name"
          />
        </div>
      </div>

      <div className='nametitle'>
        <div className='inputfield'>
          <div className='inputfieldtext'>
            <label htmlFor="fname">Department Name*</label>
          </div>
          <input
            type="text"
            id="fname"
            name="lastname"
            placeholder="name of department"
            onChange={(e) => handleInputChange("Department Name*", e.target.value)}
          />
        </div>

        <div className='inputfield'>
          <div className='inputfieldtext'>
            <label htmlFor="fname">Name of Journal*</label>
          </div>
          <input
            type="text"
            id="fname"
            name="lastname"
            placeholder="Journal Name"
            onChange={(e) => handleInputChange("Name of Journal", e.target.value)}
          />
        </div>
      </div>

      <p style={{ color: "white", height: "0.5px", background: "white", width: "80%", textAlign: "center", marginLeft: "14%", marginBottom: "3%", marginTop: "3%" }}></p>

      <div className='nametitle'>
        <div className='inputfield'>
          <div className='inputfieldtext'>
            <label htmlFor="fname">Name of Conference*</label>
          </div>
          <input
            type="text"
            id="fname"
            name="lastname"
            placeholder="Conference Name"
            onChange={(e) => handleInputChange("Name of Conference*", e.target.value)}
          />
        </div>

        <div className='inputfield'>
          <div className='inputfieldtext'>
            <label htmlFor="fname">Abbreviated Conference Name</label>
          </div>
          <input
            type="text"
            id="fname"
            name="lastname"
            placeholder="Abbreviation"
          />
        </div>
      </div>

      <div className='nametitle'>
        <div className='inputfield'>
          <div className='inputfieldtext'>
            <label htmlFor="fname">Number of Paper Reviews</label>
          </div>
          <input
            type="number"
            id="fname"
            name="lastname"
            placeholder="No. of paper review"
          />
        </div>

        <div className='inputfield' style={{ marginLeft: "7%" }}>
          <div className='inputfieldtext' style={{ marginLeft: "-95%", marginBottom: "12%" }}>
            <label htmlFor="fname">Year</label>
          </div>
          <select className="form-select" id="year" name="year" style={{ marginLeft: "-100%" }} >
            <option value="">year</option>
            {/* ... Add options for years ... */}
          </select>
        </div>
      </div>

      <p className="divider"></p>

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

export default PaperReviews;
