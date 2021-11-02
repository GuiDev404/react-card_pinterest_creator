import React, { useState } from 'react';
import { MovieIcon, BookIcon,CloseIcon } from '../Icons';
import './styles.css'; 

const AlertModal = ({ changeType }) => {
  const [visibility, setVisibility] = useState(true);

  const handleClose = (e)=>{
    const isModal = e.target.classList.contains('modal');
    const isBtnClose = e.currentTarget.classList.contains('close_btn');
    
    if(isModal || isBtnClose) {
      setVisibility(!visibility);
    }
  }

  return (
    <div className={`modal flex flex-center ${!visibility && 'd--none'}`} onClick={handleClose}>
      <div className='modal__choose'>
        <div className='flex flex-space-between'>
          <h2>Seleccione el tipo de poster</h2>
          <button className='close_btn flex flex-center cursor--pointer' onClick={handleClose}> 
            <CloseIcon />
          </button>
        </div>
        <div className="flex flex-vertical-center mb--sm mt--md">
          <input type="radio" className='input-checkbox hidden-checkbox' onChange={()=> changeType('movie')} name="tipo_poster" id="tipo_pelicula" defaultChecked />
          <label className="ml--sm cursor--pointer type_label flex flex-vertical-center" htmlFor="tipo_pelicula">
            <MovieIcon /> 
            <span className='ml--sm'> Pelicula </span>
          </label>
        </div>
        <div className="flex flex-vertical-center mb--sm">
          <input type='radio' className='input-checkbox hidden-checkbox' onChange={()=> changeType('book')} name="tipo_poster" id="tipo_libro" />
          <label className="ml--sm cursor--pointer type_label flex flex-vertical-center" htmlFor="tipo_libro">
            <BookIcon /> 
            <span className='ml--sm'> Libro </span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default React.memo(AlertModal)
