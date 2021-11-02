import { useRef, useState } from 'react';

import AlertModal from './components/AlertModal';
import Form from './components/Form';
import Poster from './components/Poster';
import ToggleTheme from './components/ToggleTheme';

function App() {
  const [posterType, setPosterType] = useState('movie');
  const [posterData, setPosterData] = useState(null);
  const cardElement = useRef(null);

  const handleChange = (e)=>{
    setPosterData({
      ...posterData,
      [e.target.name]: e.target.type === 'file' ? e.target.files[0] : e.target.value
    })
  }

  return (
    <div className="flex flex-wrap">
      <ToggleTheme />
      <AlertModal changeType={setPosterType} />
      <Form 
        type={posterType} 
        changeData={handleChange} 
        cardElement={cardElement.current}
        posterName={posterData?.nombre}
      />

      <Poster 
        type={posterType}
        data={posterData}
        refCardElement={cardElement}
      />
    </div>
  );
}

export default App;
