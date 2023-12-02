import React, { useState } from "react";
import { db, collection, addDoc } from '../firebaseConfig'; // Adjust the path accordingly

function Conference({ numberOfFields, setNumberOfFields }) {
  const currKey = "Conference";
  const [formData, setFormData] = useState({
    "First Name": "",
    "Title Of Paper": "",
    "Conducted By": "",
    "Name of Conference": "",
    "Place of Conference : City*": "",
    "Conference Date : From*": "",
    "Conference Date : To*": "",
  });

  const handleAddMoreClicked = (index) => {
    const newNumberOfFields = [...numberOfFields[currKey]];
    newNumberOfFields[index] += 1;
    setNumberOfFields({ ...numberOfFields, [currKey]: newNumberOfFields });
  };

  const handleRemoveClicked = (index) => {
    const newNumberOfFields = [...numberOfFields[currKey]];
    newNumberOfFields[index] !== 1
      ? (newNumberOfFields[index] -= 1)
      : (newNumberOfFields[index] = 1);

    setNumberOfFields({ ...numberOfFields, [currKey]: newNumberOfFields });
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const renderFields = (index) => {
    const fields = [];
    for (let i = 0; i < numberOfFields[currKey][index]; i++) {
      fields.push(
        <div className="nametitle" key={i}>
          <div className="inputfield">
            <div className="inputfieldtext">
              <label htmlFor="fname">First Name*</label>
            </div>
            <input
              type="text"
              id={`fname-${i}`}
              name="firstname"
              placeholder="Your first name"
              onChange={(e) => handleChange("First Name", e.target.value)}
            />
          </div>

          <div className="inputfield">
            <div className="inputfieldtext">
              <label htmlFor="fname">Middle Name</label>
            </div>
            <input
              type="text"
              id={`mname-${i}`}
              name="middlename"
              placeholder="Your middle name"
            />
          </div>

          <div className="inputfield">
            <div className="inputfieldtext">
              <label htmlFor="fname">Last Name</label>
            </div>
            <input
              type="text"
              id={`lname-${i}`}
              name="lastname"
              placeholder="Your last name"
            />
          </div>
        </div>
      );
    }
    return fields;
  };

  const handleSubmitButtonClicked = async () => {
    try {
      const docRef = await addDoc(collection(db, currKey), formData);
      alert("Updated Successfully. Document ID: " + docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error updating data. Please try again later.");
    }
  };





  
  return (
    <div className="containerbox1">
      <div className="title"> Please Enter The Following Details :-</div>
      <div>
        <div>
          <button
            style={{ position: "relative", left: "1120px", top: "22px" }}
            onClick={() => handleAddMoreClicked(0)}
          >
            Add More
          </button>
        </div>

        <div>
          <button
            style={{ marginLeft: "85%", position: "relative", left: "100px" }}
            onClick={() => handleRemoveClicked(0)}
          >
            Remove
          </button>
        </div>
        {renderFields(0)}
      </div>

      <div className="nametitle">
        <div className="inputfield">
          <div className="inputfieldtext">
            <label htmlFor="fname">Title of Paper*</label>
          </div>
          <input
            type="text"
            id="title-paper"
            name="titlepaper"
            placeholder="Paper Title"
            onChange={(e) => handleChange("Title Of Paper", e.target.value)}
          />
        </div>

        <div className="inputfield">
          <div className="inputfieldtext">
            <label htmlFor="fname">Conducted By*</label>
          </div>
          <input
            type="text"
            id="conducted-by"
            name="conductedby"
            placeholder="conducted by"
            onChange={(e) => handleChange("Conducted By", e.target.value)}
          />
        </div>

        <div className="inputfield" style={{ marginLeft: "7%", width: 90 }}>
          <div className="inputfieldtext" style={{ marginLeft: "-95%", marginBottom: "12%" }}>
            <label htmlFor="fname">Category</label>
          </div>
          <select
            className="form-select"
            id="category"
            name="category"
            style={{ marginLeft: "-100%" }}
          >
            <option value="">Category</option>
            <option value="1940">Publisher</option>
            <option value="1941">DOI</option>
          </select>
        </div>
      </div>

      <div className="nametitle">
        <div className="inputfield">
          <div className="inputfieldtext">
            <label htmlFor="fname">Name of Conference*</label>
          </div>
          <input
            type="text"
            id="conference-name"
            name="conferencename"
            placeholder="Conference Name"
            onChange={(e) => handleChange("Name of Conference", e.target.value)}
          />
        </div>

        <div className="inputfield">
          <div className="inputfieldtext">
            <label htmlFor="fname">Abbreviated Conference Name</label>
          </div>
          <input
            type="text"
            id="abbr-conference-name"
            name="abbrconferencename"
            placeholder="Abbreviation"
          />
        </div>

        <div className="inputfield">
          <div className="inputfieldtext">
            <label htmlFor="fname">Sponsoring Agency</label>
          </div>
          <input
            type="text"
            id="sponsoring-agency"
            name="sponsoringagency"
            placeholder="Agency Name"
          />
        </div>
      </div>

      <p
        style={{
          color: "white",
          height: "0.5px",
          background: "white",
          width: "80%",
          textAlign: "center",
          marginLeft: "14%",
          marginBottom: "3%",
          marginTop: "3%",
        }}
      ></p>

      <div className="nametitle">
        <div className="inputfield">
          <div className="inputfieldtext">
            <label htmlFor="fname">Place of Conference : City*</label>
          </div>
          <input
            type="text"
            id="conference-city"
            name="conferencecity"
            placeholder="City"
            onChange={(e) => handleChange("Place of Conference : City*", e.target.value)}
          />
        </div>

        <div className="inputfield">
          <div className="inputfieldtext">
            <label htmlFor="fname">Place of Conference : State</label>
          </div>
          <input
            type="text"
            id="conference-state"
            name="conferencestate"
            placeholder="state"
          />
        </div>

        <div className="inputfield">
          <div className="inputfieldtext">
            <label htmlFor="fname">Place of Conference : Country</label>
          </div>
          <input
            type="text"
            id="conference-country"
            name="conferencecountry"
            placeholder="country"
          />
        </div>
      </div>

      <div className="nametitle" style={{ marginLeft: "-1.5%" }}>
        <div className="inputfield">
          <div className="inputfieldtext">
            <label htmlFor="fname">Venue</label>
          </div>
          <input
            type="text"
            id="conference-venue"
            name="conferencevenue"
            placeholder="venue of conference"
          />
        </div>
        <div className="inputfield">
          <div className="inputfieldtext">
            <label htmlFor="fname">Conference Date : From*</label>
          </div>
          <input
            type="date"
            id="date-from"
            name="datefrom"
            placeholder="From"
            onChange={(e) => handleChange("Conference Date : From*", e.target.value)}
          />
        </div>

        <div className="inputfield">
          <div className="inputfieldtext">
            <label htmlFor="fname">Conference Date : To*</label>
          </div>
          <input
            type="date"
            id="date-to"
            name="dateto"
            placeholder="To"
            onChange={(e) => handleChange("Conference Date : To*", e.target.value)}
          />
        </div>
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

export default Conference;
