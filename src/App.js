import React, { useState } from 'react'
import './App.css';
import Modal from './components/Modal'

function App() {

  const [openModel, setOpenModel] = useState(false)
  return (
    <div className="App">
      <h1>Hey Click on the button to open Modal</h1>
      <button className="openModalBtn" onClick={() => setOpenModel(true)}>Open</button>
      { openModel && <Modal setOpenModal={setOpenModel} />}
    </div>
  );
}

export default App;
