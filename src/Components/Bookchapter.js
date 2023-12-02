import React, { useState, useEffect } from 'react';
import { db, collection, addDoc, getDocs } from '../firebaseConfig';
import { PDFDocument } from 'pdf-lib';

function Bookchapter({ numberOfFields, setNumberOfFields }) {
  const currKey = "Bookchapter";
  const [required, setRequired] = useState({
    "First Name*": "",
    "Title Of Book*": "",
    "Title Of Chapter*": "",
    "Editor : First Name*": "",
    "Publisher Address : City*": "",
    "Publisher : First Name*": "",
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
      const querySnapshot = await getDocs(collection(db, 'BookChapter'));
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

  const handleFirstNameChanged = (e) => {
    setRequired({ ...required, "First Name*": e.target.value });
  };

  
  const handleTitleOfBookChanged= (e) => {
    setRequired({ ...required, "Title Of Book*": e.target.value });
  };
  const handleTitleOfChapterChanged = (e) => {
    setRequired({ ...required, "Title Of Chapter*": e.target.value });
  };
  const handleEditorChanged=(e)=>{
    setRequired({...required, "Editor : First Name*": e.target.value});
  };
  const handlePublisherAddressChanged=(e)=>{
    setRequired({...required, "Publisher Address : City*": e.target.value});
  };
  const handlePublisherChanged = (e) => {
    setRequired({ ...required, "Publisher : First Name*": e.target.value });
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
        const docRef = await addDoc(collection(db, 'BookChapter'), {
          // Replace 'your_collection_name' with your actual Firestore collection name
          firstName: required["First Name*"],
          titleOfBook: required["Title Of Book*"],
          titleOfChapter: required["Title Of Chapter*"],
          editorFirstName: required["Editor : First Name*"],
          publisherCity: required["Publisher Address : City*"],
          publisherFirstName: required["Publisher : First Name*"],
        });

        console.log("Document written with ID: ", docRef.id);
        console.log("content----> ", required);
        alert("Data updated successfully");
      } catch (error) {
        console.error("Error updating data: ", error);
        alert("Error updating data");
      }
    }
  };

  

  return (
    <div className="containerbox1">
      <div className="title">Please Enter The Following Details :-</div>

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

      

      <div className="nametitle">
        <div className="inputfield">
          <div className="inputfieldtext">
            <label for="fname">Title of Chapter*</label>
          </div>
          <input type="text" id="fname" 
                  name="lastname" 
                  placeholder="Chapter Title"
                  onChange={(e) => handleTitleOfChapterChanged(e)} />
        </div>

        <div className="inputfield">
          <div className="inputfieldtext">
            <label for="fname">Title of Book*</label>
          </div>
          <input type="text" id="fname" name="lastname" placeholder="Book Title"
          onChange={(e) => handleTitleOfBookChanged(e)}/>
        </div>

        <div className="inputfield">
          <div className="inputfieldtext">
            <label for="fname">ISBN</label>
          </div>
          <input type="text" id="fname" name="lastname" placeholder="isbn" />
        </div>
      </div>

      

      <div className="nametitle">
          <div className="inputfield">
            <div className="inputfieldtext">
              <label for="fname">Editor : First Name*</label>
            </div>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your first name"
              onChange={(e) => handleEditorChanged(e)}
              />
          </div>

          <div className="inputfield">
            <div className="inputfieldtext">
              <label for="fname">Editor : Middle Name</label>
            </div>
            <input type="text" id="fname" name="lastname" placeholder="Your Middle name" />
          </div>

        
          <div className="inputfield">
            <div className="inputfieldtext">
              <label for="fname">Editor : Last Name</label>
            </div>
            <input type="text" id="fname" name="lastname" placeholder="Your last name" />
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
              <label for="fname">Publisher : First Name*</label>
            </div>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your first name"
              onChange={(e) => handlePublisherChanged(e)}
      
            />
          </div>

          <div className="inputfield">
            <div className="inputfieldtext">
              <label for="fname">Publisher : Middle Name</label>
            </div>
            <input type="text" id="fname" name="lastname" placeholder="Your Middle name" />
          </div>

        
          <div className="inputfield">
            <div className="inputfieldtext">
              <label for="fname">Publisher : Last Name</label>
            </div>
            <input type="text" id="fname" name="lastname" placeholder="Your last name" />
          </div>
        </div>


      <div className="nametitle">
      <div className="inputfield">
          <div className="inputfieldtext">
            <label for="fname">Publisher Address : City*</label>
          </div>
          <input type="text" id="page" name="lastname" placeholder="city" 
          onChange={(e) => handlePublisherAddressChanged(e)}/>
        </div>
        <div className="inputfield">
          <div className="inputfieldtext">
            <label for="fname">Publisher Address : State</label>
          </div>
          <input type="text" id="page" name="lastname" placeholder="state" />
        </div>

        <div className="inputfield">
          <div className="inputfieldtext">
            <label for="fname">Publisher Address : Country</label>
          </div>
          <input type="text" id="page" name="lastname" placeholder="country" />
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

export default Bookchapter;
