import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState("");
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility

  const images = [
    '/public/pharmacists1.png',
    '/public/pharmacists2.png',
    '/public/pharmacists3.png',
    '/public/pharmacists4.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const [formData, setFormData] = useState({
    patientName: '',
    drugName: '',
    patientWeight: '',
    prescribedDose: '',
    availableTabletStrength: '',
    administeredDose: '',
    frequencyOfUse: '',
    durationOfUse: '',
  });

  const formSteps = Object.keys(formData);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, formSteps.length - 1));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const calculateTotalNumberOfTablets = (prescribedDose, frequencyOfUse, durationOfUse, availableTabletStrength) => {
    return (prescribedDose * frequencyOfUse * durationOfUse) / availableTabletStrength;
  };

  const calculateTotalVolume = (prescribedDose, frequencyOfUse, durationOfUse, administeredDose) => {
    return (prescribedDose * frequencyOfUse * durationOfUse * administeredDose) / prescribedDose;
  };

  const handleCalculate = () => {
    const { prescribedDose, frequencyOfUse, durationOfUse, availableTabletStrength, administeredDose } = formData;
    const totalNumberOfTablets = calculateTotalNumberOfTablets(prescribedDose, frequencyOfUse, durationOfUse, availableTabletStrength);
    const totalVolume = calculateTotalVolume(prescribedDose, frequencyOfUse, durationOfUse, administeredDose);

    const result = `Total number of tablets: ${totalNumberOfTablets}\nTotal volume: ${totalVolume}`;
    setResults(result);
    setShowResults(true); // Show results modal
  };

  const handleShowModal = () => {
    setShowModal(true);
    updateDate();
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const updateDate = () => {
    const currentDate = new Date();
    const dateString = currentDate.toLocaleString();
    const createdDateElement = document.getElementById("created_date");
    if (createdDateElement) {
      createdDateElement.innerText = dateString;
    }
  };

  const handleDownload = () => {
    const modalContent = document.querySelector('.modal-content');
    html2canvas(modalContent).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/jpeg');
      link.download = 'modal-content.jpg';
      link.click();
    });
  };

    // JavaScript for flipping flashcards every 5 seconds
    document.addEventListener('DOMContentLoaded', function () {
      const flashcards = document.querySelectorAll('.flashcard-inner');
      
      flashcards.forEach((flashcard) => {
          flashcard.addEventListener('click', () => {
          flashcard.style.transform = flashcard.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
          });
      });
  });

  return (
    <div className="app">
      <ul id="menu">
        <div className="menu-group left">
          <li><a href="https://studixshare.com/login" target="_blank" rel="noopener noreferrer">Log-In</a></li>
          <li><a href="https://example.com">Blog-Post</a></li>
          <li><a href="https://studixshare.com/login"target="_blank" rel="noopener noreferrer">Try Flashcards</a></li>
        </div>
        <div className="menu-group center">
          <li><a href="https://example.com">Generate Instructions</a></li>
          <li><a href="https://example.com" onClick={handleShowModal}>Create Label</a></li>
          <li><a href="https://example.com" onClick={() => setShowForm(true)}>Calculate Quantities</a></li>
        </div>
        <div className="menu-group right">
          <li><a href="https://studixshare.com/contact" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
          <li><a href="https://example.com">FAQ</a></li>
          <li><a href="https://studixshare.com/support" target="_blank" rel="noopener noreferrer">Support</a></li>
        </div>
      </ul>

      <div className="slider">
        <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
      </div>

      <div className="content">
        <h1>Extempo-Plus</h1>
        <p>
          Extempo-Plus is a web application that helps pharmacists to perform extemporaneous preparations quickly and accurately.
          <br></br>It also helps to create automated labels for these preparations.
        </p>
      </div>

      <div className="calculate-quantities">
        <div className="quantities">
          <h2>Calculate Quantities</h2>
          <p>Calculate the quantities of drugs to be administered to patients.</p>
          <p>Quantities are calculated based on the patient's weight, prescribed dose, and other factors.</p>
          <p>Quantities are easy to calculate.</p>
        </div>
      </div>

      <div className="info-graphics-data1">
        <div className="info-graphics">
          <div className="info-graphic">
            <p id="save-over-text">Save over</p>
            <img src="/timer1.png" alt="6 minutes info graphics" />
            <p id="on-each">On each compounding with extempo app</p>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="feature">
          <h2>Generate Instructions</h2>
          <p>Generate compounding instructions for each patients with the click of a button.</p>
          <p>Instructions are generated based on the dosage form, type of medications, patient's weight, prescribed dose, and other factors.</p>
          <p>Instructions are easy to understand and follow.</p>
          <p>Instructions can be customized to suit the patient's needs.</p>
          <p>Instructions can be generated for different types of drugs.</p>
          <p>Instructions can be generated for different types of patients.</p>
          <p>Instructions can be generated for different types of diseases.</p>
          <p>Instructions can be generated for different types of treatments.</p>
          <p>Click below to start</p>
        </div>
      </div>

      <button onClick={handleShowModal} className="generate-instructions-button">Generate Instructions</button>

      <div className="flashcard-header"> 
        <p>Try Our Flashcard App</p>
      </div>


      <section class="flashcard-section">
        <div class="flashcard">
            <div class="flashcard-inner">
                <div class="flashcard-front">A 35-year-old with appendicitis requires surgery. He has a family history of malignant hyperthermia. The agent most appropriate is? Isoflurane or Propofol</div>
                <div class="flashcard-back">Propofol is safe in patients susceptible to malignant hyperthermia. Isoflurane, sevoflurane, desflurane and succinylcholine are considered triggering agents</div>
            </div>
        </div>
      </section>
    
      <div class="try-flashcards">Click <a href="https://studixshare.com/login" target="_blank" rel="noopener noreferrer">here</a> to sign-up for flashcards</div>

      {/* Modal for displaying results */}
      {showResults && (
        <div className="results-modal">
          <div className="results-content">
            <h2>Result Sheet</h2>
            <pre>{results}</pre>
            <button onClick={() => setShowResults(false)} id="result-close-button">X</button>
          </div>
        </div>
      )}

      {/* Modal for AI-Generate form */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={handleCloseModal} className="close-button">X</button>
            <button onClick={handleDownload} className="download-button">Download</button>
            <div id="Drug-label">
              <div id="label-ID-container">
                <input type="text" id="label-ID" name="label-ID" placeholder="Label-ID" /><br />
              </div>
              <div id="DrugName">
                <input type="text" name="DrugName" placeholder="Drug Name" /><br />
              </div>
              <div id="shake-the-mixture">
                <p><strong>Shake The Mixture</strong></p>
              </div>
              <div id="instructions">
                <div style={{ display: 'inline-block' }}>
                  Give
                  <form style={{ display: 'inline-block' }}>
                    <input type="number" name="dose" size="2" placeholder="Dose" />
                  </form>
                  <form style={{ display: 'inline-block' }}>
                    <input type="number" name="frequency" size="2" placeholder="Frequency" />
                  </form>
                  Time(s) daily
                </div>
              </div>
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Patient Name"/>
                <div id="date">
                  <p>Date Of Manufacture: <span id="created_date">{new Date().toLocaleString()}</span></p>
                </div>
                <div id="primInstructions">
                  <p><strong>Discard after 14 days <br />Keep Drug Away from Children </strong></p>
                </div>
                <div id="place-of-manufacture">
                  <input type="text" placeholder="Place of Manufacture" />
                </div>
              </div>
            </div>
            <button onClick={() => alert('Connect device to printer')} className="print-button">Print</button>
          </div>
        </div>
      )}

      {/* Modal for form */}
      {showForm && (
        <div className="modal">
          <div className="form-modal">
            <button onClick={() => setShowForm(false)} className="close-button">X</button>
            <div className="form-container">
              <div className="form-group">
                <input
                  type="text"
                  id={formSteps[currentStep]}
                  value={formData[formSteps[currentStep]]}
                  onChange={handleInputChange}
                  placeholder={formSteps[currentStep].replace(/([A-Z])/g, ' $1').toUpperCase()}
                  className="form-input"
                />
              </div>
              <div className="navigation-buttons">
                {currentStep > 0 && <button onClick={handlePrevious} className="nav-button">Previous</button>}
                {currentStep < formSteps.length - 1 ? (
                  <button onClick={handleNext} className="nav-button">Next</button>
                ) : (
                  <button onClick={handleCalculate} className="submit-button">Submit</button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="footer">
        <p>&copy; 2024 extempo-plus app | Powered by Studixshare</p>
      </div>
    </div>
  );
}

export default App;
