import React, { useState, useEffect } from 'react';
import { db, collection, addDoc, getDocs } from '../firebaseConfig';
import { PDFDocument } from 'pdf-lib';

function InvitedTalks({ numberOfFields, setNumberOfFields }) {
  const currKey = "InvitedTalks";
  const [required, setRequired] = useState({
    "Title of Talk*": "",
    "Date of Talk*": "",
    "Name of Skill Development Scheme*": "",
    "Name of Department": "",
    "First Name*": "",
    "Place : City*": "",
  });
  
  const [firestoreData, setFirestoreData] = useState([]); // State to store fetched data

  useEffect(() => {
    // Fetch Firestore data when the component mounts
    fetchFirestoreData();
  }, []);

  const downloadAsPDF = async () => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
  
    const text = JSON.stringify(firestoreData, null, 2);
    const font = await pdfDoc.embedFont(PDFDocument.Font.Helvetica);
  
    page.drawText(text, { x: 50, y: height - 100, font });
  
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'data.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const downloadAsText = () => {
    const textData = JSON.stringify(firestoreData, null, 2); // Convert data to JSON string
    const blob = new Blob([textData], { type: 'text/plain' }); // Create a Blob
    const link = document.createElement('a'); // Create a link element
    link.href = URL.createObjectURL(blob); // Set the link's href to the Blob's URL
    link.download = 'data.txt'; // Set the file name
    document.body.appendChild(link); // Append the link to the body
    link.click(); // Simulate a click to trigger the download
    document.body.removeChild(link); // Remove the link from the body
  };
  

  const fetchFirestoreData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'InvitedTalks'));
      const data = querySnapshot.docs.map(doc => doc.data());
      setFirestoreData(data);
      console.log('Fetched Firestore data:', data);
    } catch (error) {
      console.error('Error fetching Firestore data:', error);
    }
  };

  const handleExportPDF = () => {
    // Fetch Firestore data before exporting to PDF
    fetchFirestoreData(); // Fetch Firestore data before exporting to PDF
  downloadAsText(); // Download data as text
    console.log('Exporting PDF with data:', firestoreData);
  };


  const handleTitleChanged = (e) => {
    setRequired({ ...required, "Title of Talk*": e.target.value });
  };

  const handleDateChanged = (e) => {
    setRequired({ ...required, "Date of Talk*": e.target.value });
  };

  const handleSchemeChanged = (e) => {
    setRequired({ ...required, "Name of Skill Development Scheme*": e.target.value });
  };

  const handleDepartmentChanged = (e) => {
    setRequired({ ...required, "Name of Department": e.target.value });
  };

  const handleFirstNameChanged = (e) => {
    setRequired({ ...required, "First Name*": e.target.value });
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
        // Add data to Firestore
        const docRef = await addDoc(collection(db, 'InvitedTalks'), {
          // Replace 'your_collection_name' with the actual name of your Firestore collection
          titleOfTalk: required["Title of Talk*"],
          dateOfTalk: required["Date of Talk*"],
          nameOfScheme: required["Name of Skill Development Scheme*"],
          department: required["Name of Department"],
          firstName: required["First Name*"],
          city: required["Place : City*"],
        });

        alert("Data added successfully with ID: " + docRef.id);
      } catch (error) {
        console.error("Error adding document: ", error);
        alert("An error occurred while adding data. Please try again.");
      }
    }
  };

  return (
    <div className="containerbox1">
      <div className="title">Please Enter The Following Details :-</div>

      <div className='nametitle'>
        <div className='inputfield' style={{ marginLeft: "7%", width: 90 }}>
          <div className='inputfieldtext' style={{ marginLeft: "-95%", marginBottom: "12%" }}>
            <label for="fname">Category</label>
          </div>
          <select class="form-select" id="year" name="year" style={{ marginLeft: "-100%" }}>
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
            <label for="fname">Title of Talk*</label>
          </div>
          <input type="text" id="fname" name="lastname" placeholder="title"
            onChange={(e) => handleTitleChanged(e)} />
        </div>
        <div className='inputfield' style={{ marginLeft: "-0.3%" }}>
          <div className='inputfieldtext'>
            <label for="fname">Date of Talk*</label>
          </div>
          <input type="date" id="fname" name="lastname" placeholder="Chapter Title"
            onChange={(e) => handleDateChanged(e)} />
        </div>
      </div>

      <div className='nametitle'>
        <div className='inputfield' style={{ marginLeft: "1.8%" }} >
          <div className='inputfieldtext'>
            <label for="fname">Name of Agency</label>
          </div>
          <input type="text" id="fname" name="lastname" placeholder="Agency name" />
        </div>

        <div className='inputfield' style={{ marginLeft: "1.8%" }} >
          <div className='inputfieldtext'>
            <label for="fname">Name of Skill Development Scheme*</label>
          </div>
          <input type="text" id="fname" name="lastname" placeholder="Name"
            onChange={(e) => handleSchemeChanged(e)} />
        </div>

        <div className='inputfield' style={{ marginLeft: "1.8%" }} >
          <div className='inputfieldtext'>
            <label for="fname">Sponsoring Agency</label>
          </div>
          <input type="text" id="fname" name="lastname" placeholder="Agency name" />
        </div>
      </div>

      <p style={{ color: "white", height: "0.5px", background: "white", width: "80%", textAlign: "center", marginLeft: "14%", marginBottom: "3%", marginTop: "3%" }}></p>

      <h3 style={{ color: "white", marginLeft: "50%" }}> Expert's Detail : -</h3>

      <div className='nametitle'>
        <div className='inputfield' style={{ marginLeft: "7%", width: 90 }}>
          <div className='inputfieldtext' style={{ marginLeft: "-95%", marginBottom: "12%" }}>
            <label for="fname">Salutation</label>
          </div>
          <select class="form-select" id="year" name="year" style={{ marginLeft: "-100%" }} >
            <option value="">Salutation</option>
            <option value="1940">Mr.</option>
            <option value="1941">Ms.</option>
            <option value="1941">Mrs.</option>
            <option value="1941">Dr.</option>
            <option value="1941">Prof.</option>
          </select>
        </div>

        <div className='inputfield'>
          <div className='inputfieldtext'>
            <label for="fname">Name of Department*</label>
          </div>
          <input type="text" id="fname" name="lastname" placeholder="Department"
            onChange={(e) => handleDepartmentChanged(e)} />
        </div>

        <div className='inputfield'>
          <div className='inputfieldtext'>
            <label for="fname">Organisation</label>
          </div>
          <input type="text" id="fname" name="lastname" placeholder="Organisation" />
        </div>
      </div>

      <div className='nametitle'>
        <div className='inputfield'>
          <div className='inputfieldtext'>
            <label for="fname">First Name*:</label>
          </div>
          <input type='text' id="page" name="lastname" placeholder="Your First Name"
            onChange={(e) => handleFirstNameChanged(e)} />
        </div>

        <div className='inputfield'>
          <div className='inputfieldtext'>
            <label for="fname">Middle Name :</label>
          </div>
          <input type="text" id="page" name="lastname" placeholder="Your Middle Name" />
        </div>

        <div className='inputfield'>
          <div className='inputfieldtext'>
            <label for="fname">Last Name :</label>
          </div>
          <input type="text" id="page" name="lastname" placeholder="Your Last Name" />
        </div>
      </div>

      <div className='nametitle'>
        <div className='inputfield'>
          <div className='inputfieldtext'>
            <label for="fname">Place : City*</label>
          </div>
          <input type='text' id="page" name="lastname" placeholder="City"
            onChange={(e) => handleCityChanged(e)} />
        </div>

        <div className='inputfield'>
          <div className='inputfieldtext'>
            <label for="fname">Place : State</label>
          </div>
          <input type="text" id="page" name="lastname" placeholder="State" />
        </div>

        <div className='inputfield'>
          <div className='inputfieldtext'>
            <label for="fname">Place : Country</label>
          </div>
          <input type="text" id="page" name="lastname" placeholder="Country" />
        </div>
      </div>

      <div className="buttoncontainer">
        <button class="button-43" role="button" style={{ marginLeft: "41.5%" }} onClick={handleSubmitButtonClicked}>
          Submit
        </button>
        <button
          className="button-43"
          role="button"
          style={{ marginRight: "32%" }}
          onClick={handleExportPDF}
        >
          Export
        </button>
      </div>
    </div>
  );
}

export default InvitedTalks;
