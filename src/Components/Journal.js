import React, { useState, useEffect } from 'react';
import { db, collection, addDoc, getDocs } from '../firebaseConfig';
import { PDFDocument } from 'pdf-lib';

function Journal({ numberOfFields, setNumberOfFields }) {
  const currKey = "Journal";
  const [required, setRequired] = useState({
    "First Name": "",
    "Name Of Journal": "",
    "Title Of Paper": "",
    Publisher: "",
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
      const querySnapshot = await getDocs(collection(db, 'Journal'));
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
        <div className="nametitle" key={i}>
          <div className="inputfield">
            <div className="inputfieldtext">
              <label htmlFor="fname">First Name*</label>
            </div>
            <input
              type="text"
              id={`fname-${i}`}
              name={`firstname-${i}`}
              placeholder="Your first name"
              onChange={(e) => handleFirstNameChange(e)}
            />
          </div>

          <div className="inputfield">
            <div className="inputfieldtext">
              <label htmlFor="mname">Middle Name</label>
            </div>
            <input type="text" id={`mname-${i}`} name={`middlename-${i}`} placeholder="Your Middle name" />
          </div>

          <div className="inputfield">
            <div className="inputfieldtext">
              <label htmlFor="lname">Last Name</label>
            </div>
            <input type="text" id={`lname-${i}`} name={`lastname-${i}`} placeholder="Your last name" />
          </div>
        </div>
      );
    }
    return fields;
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
        // Store data in Firestore
        const docRef = await addDoc(collection(db, 'Journal'), {
          firstName: required["First Name"],
          nameOfJournal: required["Name Of Journal"],
          titleOfPaper: required["Title Of Paper"],
          publisher: required["Publisher"],
        });

        console.log("Document written with ID: ", docRef.id);
        alert("Data updated successfully");
      } catch (error) {
        console.error("Error updating data: ", error);
        alert("Error updating data");
      }
    }
  };

  const addOptions = (start, end) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
  };

  return (
    <div className="containerbox1">
      <div className="title">Please Enter The Following Details :-</div>

     
      <div>
        <button style={{ position: "relative", left: "1120px", top: "22px" }} onClick={() => handleAddMoreClicked(0)}>Add More</button>
      </div>

      <div>
        <button style={{ marginLeft: "85%", position: "relative", left: "100px" }} onClick={() => handleRemoveClicked(0)}>Remove</button>
      </div>
     
     

      <div className="nametitle">
        <div className="inputfield">
          <div className="inputfieldtext">
            <label htmlFor="titleOfPaper">Title Of Paper*</label>
          </div>
          <input
            type="text"
            id="titleOfPaper"
            name="titleOfPaper"
            placeholder="Paper Title"
            onChange={(e) => handlePaperTitleChanged(e)}
          />
        </div>

        <div className="inputfield">
          <div className="inputfieldtext">
            <label htmlFor="journalName">Name of Journal*</label>
          </div>
          <input
            type="text"
            id="journalName"
            name="journalName"
            placeholder="Journal Name"
            onChange={(e) => handleJournalNameChanged(e)}
          />
        </div>

        <div className="inputfield">
          <div className="inputfieldtext">
            <label htmlFor="doi">DOI</label>
          </div>
          <input type="text" id="doi" name="doi" placeholder="Doi" />
        </div>
      </div>

      <div className="nametitle">
        <div className="inputfield">
          <div className="inputfieldtext">
            <label htmlFor="pubFirstName">Publisher : First Name*</label>
          </div>
          <input
            type="text"
            id="pubFirstName"
            name="pubFirstName"
            placeholder="Your first name"
            onChange={(e) => handlePublisherChanged(e)}
          />
        </div>

        <div className="inputfield">
          <div className="inputfieldtext">
            <label htmlFor="pubMiddleName">Publisher : Middle Name</label>
          </div>
          <input type="text" id="pubMiddleName" name="pubMiddleName" placeholder="Your Middle name" />
        </div>

        <div className="inputfield">
          <div className="inputfieldtext">
            <label htmlFor="pubLastName">Publisher : Last Name</label>
          </div>
          <input type="text" id="pubLastName" name="pubLastName" placeholder="Your last name" />
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
            <label htmlFor="pageFrom">Page From</label>
          </div>
          <input type="number" id="pageFrom" name="pageFrom" placeholder="From" />
        </div>

        <div className="inputfield">
          <div className="inputfieldtext">
            <label htmlFor="pageTo">Page To</label>
          </div>
          <input type="number" id="pageTo" name="pageTo" placeholder="To" />
        </div>
        <div className="inputfield" style={{ marginLeft: "7%", width: 90 }}>
          <div className="inputfieldtext" style={{ marginLeft: "-95%", marginBottom: "12%" }}>
            <label htmlFor="year">Year</label>
          </div>
          <select className="form-select" id="year" name="year" style={{ marginLeft: "-100%" }}>
            <option value="">year</option>
            {addOptions(1940, 2023)}
          </select>
        </div>
      </div>

      <div className="nametitle">
        <div className="inputfield">
          <div className="inputfieldtext">
            <label htmlFor="numAuthors">Number Of Authors</label>
          </div>
          <input type="number" id="numAuthors" name="numAuthors" placeholder="Number" />
        </div>

        <div className="inputfield">
          <div className="inputfieldtext">
            <label htmlFor="volume">Volume : </label>
          </div>
          <input type="text" id="volume" name="volume" placeholder="Volume no." />
        </div>
        <div className="inputfield">
          <div className="inputfieldtext">
            <label htmlFor="volumeNumber">Volume Number : </label>
          </div>
          <input type="number" id="volumeNumber" name="volumeNumber" placeholder="Number." />
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

export default Journal;