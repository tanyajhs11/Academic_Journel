import React from "react";
import { useState } from "react";

function Journal({ numberOfFields, setNumberOfFields }) {
  const currKey = "Journal";
  const [required, setRequired] = useState({
    "First Name": "",
    "Name Of Journal": "",
    "Title Of Paper": "",
    Publisher: "",
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

  const handleFirstNameChange = (e) => {
    setRequired({ ...required, "First Name": e.target.value });
  };

  const handlePublisherChanged = (e) => {
    setRequired({ ...required, Publisher: e.target.value });
  };

  const handleJournalNameChanged = (e) => {
    setRequired({ ...required, "Name Of Journal": e.target.value });
  };
  const handlePaperTitleChanged = (e) => {
    setRequired({ ...required, "Title Of Paper": e.target.value });
  };

  const renderFields = (index) => {
    const fields = [];
    for (let i = 0; i < numberOfFields[currKey][index]; i++) {
      fields.push(
        <div className="nametitle">
          <div className="inputfield">
            <div className="inputfieldtext">
              <label for="fname">First Name</label>
            </div>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your first name"
              onChange={(e) => handleFirstNameChange(e)}
            />
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

  const addOptions = (start, end) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      options.push(<option value={i}>{i}</option>);
    }
    return options;
  };

  return (
    <div className="containerbox1">
      <div className="title">Please Enter The Following Details :-</div>

      <div>
        <button onClick={() => handleAddMoreClicked(0)}>Add more</button>
      </div>

      {renderFields(0)}
      <div>
        <button onClick={() => handleRemoveClicked(0)}>Remove</button>
      </div>

      <div className="nametitle">
        <div className="inputfield">
          <div className="inputfieldtext">
            <label for="fname">Title Of Paper</label>
          </div>
          <input
            type="text"
            id="fname"
            name="lastname"
            placeholder="Paper Title"
            onChange={(e) => handlePaperTitleChanged(e)}
          />
        </div>

        <div className="inputfield">
          <div className="inputfieldtext">
            <label for="fname">Name Of Journal</label>
          </div>
          <input
            type="text"
            id="fname"
            name="lastname"
            placeholder="Journal Name"
            onChange={(e) => handleJournalNameChanged(e)}
          />
        </div>
      </div>

      <div className="nametitle">
        <div className="inputfield">
          <div className="inputfieldtext">
            <label for="fname">Publisher</label>
          </div>
          <input
            type="text"
            id="fname"
            name="lastname"
            placeholder="Publisher"
            onChange={(e) => handlePublisherChanged(e)}
          />
        </div>

        <div className="inputfield">
          <div className="inputfieldtext">
            <label for="fname">DOI</label>
          </div>
          <input type="text" id="fname" name="lastname" placeholder="Doi" />
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
            <label for="fname">Page From</label>
          </div>
          <input type="number" id="page" name="lastname" placeholder="From" />
        </div>

        <div className="inputfield">
          <div className="inputfieldtext">
            <label for="fname">Page To</label>
          </div>
          <input type="number" id="page" name="lastname" placeholder="To" />
        </div>
      </div>

      <div className="nametitle">
        <div className="inputfield">
          <div className="inputfieldtext">
            <label for="fname">Volume Number</label>
          </div>
          <input type="text" id="fname" name="lastname" placeholder="Volume no." />
        </div>

        <div className="inputfield" style={{ marginLeft: "7%", width: 90 }}>
          <div className="inputfieldtext" style={{ marginLeft: "-95%", marginBottom: "12%" }}>
            <label for="fname">Year</label>
          </div>
          <select class="form-select" id="year" name="year" style={{ marginLeft: "-100%" }}>
            <option value="">year</option>
            {addOptions(1940, 2023)}
          </select>
        </div>
      </div>

      <div className="buttoncontainer">
        <button
          class="button-43"
          role="button"
          style={{ marginLeft: "38.5%" }}
          onClick={handleSubmitButtonClicked}
        >
          Submit
        </button>
        <button class="button-43" role="button" style={{ marginRight: "30%" }}>
          Export
        </button>
      </div>
    </div>
  );
}

export default Journal;
