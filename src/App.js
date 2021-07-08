import React, { useState } from 'react';
import ImageGrid from './comps/ImgGrid';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import Modal from './comps/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadForm></UploadForm>
      <ImageGrid setSelectedImg={setSelectedImg}></ImageGrid>
      {selectedImg && 
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}></Modal>
      }
    </div>
  );
}

export default App;
