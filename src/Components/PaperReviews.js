import React, { useState, useEffect } from 'react';
import { db, collection, addDoc, getDocs } from '../firebaseConfig';
import { PDFDocument } from 'pdf-lib';

function PaperReviews() {
  const [required, setRequired] = useState({
    "First Name*": "",
    "Department Name*": "",
    "Name of Journal": "",
    "Name of Conference*": "",
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
      const querySnapshot = await getDocs(collection(db, 'paperReviews'));
      const data = querySnapshot.docs.map(doc => doc.data());
      setFirestoreData(data);
      console.log('Fetched Firestore data:', data);
    } catch (error) {
      console.error('Error fetching Firestore data:', error);
    }
  };
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
  const handleExportPDF = () => {
    // Fetch Firestore data before exporting to PDF
    fetchFirestoreData(); // Fetch Firestore data before exporting to PDF
  downloadAsText(); // Download data as text
    console.log('Exporting PDF with data:', firestoreData);
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

export default PaperReviews;