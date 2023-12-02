import React, { useState, useEffect } from 'react';
import { db, collection, addDoc, getDocs } from '../firebaseConfig';
import { PDFDocument } from 'pdf-lib';

function ExpertTalks({ numberOfFields, setNumberOfFields }) {
  const currKey = 'ExpertTalks';
  const [required, setRequired] = useState({
    "Faculty's First Name*": '',
    'Title of Talk*': '',
    'Name of Programme*': '',
    'Venue of Talk*': '',
    'Date of Talk*': '',
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
      const querySnapshot = await getDocs(collection(db, 'ExpertTalks'));
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


  const handleSubmitButtonClicked = async () => {
    let flag = false;
    for (const key in required) {
      if (required[key] === '') {
        flag = true;
        break;
      }
    }

    if (flag) {
      alert('Please fill all the required fields');
    } else {
      try {
        // Add the data to Firestore
        const docRef = await addDoc(collection(db, 'ExpertTalks'), {
          'Faculty\'s First Name': required["Faculty's First Name*"],
          'Title of Talk': required['Title of Talk*'],
          'Name of Programme': required['Name of Programme*'],
          'Venue of Talk': required['Venue of Talk*'],
          'Date of Talk': required['Date of Talk*'],
        });

        console.log('Document written with ID: ', docRef.id);
        alert('Updated Successfully');
      } catch (error) {
        console.error('Error adding document: ', error);
        alert('Error updating. Please try again.');
      }
    }
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
  )
}

export default ExpertTalks
