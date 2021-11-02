import { downloadImage } from '../../helpers';
import { MovieIcon, BookIcon } from '../Icons';
import './styles.css'; 

const Form = ({ type, changeData, cardElement, posterName }) => {
  
  const handleDownload = ()=> downloadImage(cardElement, posterName);
  const handleWeight = (typeCheck)=> type === typeCheck ? 'bolder' : 'normal';

  return (
    <form className='creator__form flex flex-column'>
      
      <div className="flex flex-column mb--sm ml--sm">
        <span className="mb--sm">Tipo de poster</span>
       
        <div className='flex'>
          <div className="flex flex-vertical-center mb--sm">
            <input type="radio" className='input-checkbox hidden-checkbox' name="tipo_poster" id="tipo_pelicula" />
            <label className="cursor--pointer flex flex-vertical-center" htmlFor="tipo_pelicula">
              <MovieIcon />
              <span className='ml--sm' style={{ fontWeight: handleWeight('movie') }}> Pelicula </span>
            </label>
          </div>
        
          <div className="flex flex-vertical-center mb--sm">
            <input type='radio' className='input-checkbox hidden-checkbox' name="tipo_poster" id="tipo_libro" />
            <label className="ml--sm cursor--pointer flex flex-vertical-center" htmlFor="tipo_libro">
              <BookIcon />
              <span className='ml--sm' style={{ fontWeight: handleWeight('book') }}> Libro </span> 
            </label>
          </div>
        </div>

      </div>

      <div className="flex flex-column mb--sm">
        <label className="ml--sm cursor--pointer" htmlFor="poster">Poster</label>
        <input className='form__input form__input--file' name='poster' onChange={changeData} type="file" id="poster" accept=".jpg,.png,.webp,.jpeg" />
      </div>
      
      <div className="flex flex-column mb--sm">
        <label className="ml--sm cursor--pointer" htmlFor="nombre">Nombre</label>
        <input className='form__input' name='nombre' onChange={changeData} type="text" id="nombre" placeholder={`Ingrese el nombre ${type === 'movie' ? 'de la pelicula/serie' : 'del libro'}`} />
      </div>

      <div className="flex mb--sm flex-column-768">
        <section className="flex flex-column calc-width">
          <label className="ml--sm cursor--pointer" htmlFor="year">Año</label>
          <input className='form__input' name='año' onChange={changeData} min="1" type="number" id="year" max="2099" step="1" placeholder={`Ingrese el año de ${type === 'movie' ? 'estreno' : 'publicación'}`}/>
        </section>
    
        <section className="flex flex-column calc-width">
          <label className="ml--sm cursor--pointer" htmlFor="director">{type === 'movie' ? 'Director' : 'Escritor'}</label>
          <input className='form__input' name='directed_writed' onChange={changeData} type="text" id="director" placeholder={`Ingrese el/la ${type === 'movie' ? 'director/ra' : 'autor/a'}`}/>
        </section>
      </div>

      <section className="flex flex-column mb--sm">
        <label className="ml--sm cursor--pointer" htmlFor="genre">Generos</label>
        <input className='form__input' name='genres' onChange={changeData} type="text" id="genre" placeholder="Ej: Misterio, Terror, Suspenso"/>
      </section>

      <div className="flex mb--sm flex-column-768">
        <section className="flex flex-column calc-width">
          <label className="ml--sm cursor--pointer" htmlFor="productora">{type === 'movie' ? 'Productora' : 'Editorial'}</label>
          <input className='form__input' name='edited_produced' onChange={changeData} type="text" id="productora" placeholder={`Ingrese la/s ${type === 'movie' ? 'productora/s' : 'editorial/es'}`}/>
        </section>

        <section className="flex flex-column calc-width">
          <label className="ml--sm cursor--pointer" htmlFor="actores">{type === 'movie' ? 'Actores' : 'Personajes'}</label>
          <input className='form__input' name='personajes' onChange={changeData} type="text" id="actores" placeholder={`Ej: ${type === 'movie' ? 'Keira Knightley, Jhonny Deep' : 'Harry Potter, Voldemort, Dobby'}`}/>
        </section>
      </div>

      <button 
        type='button'
        onClick={handleDownload}
        id="btnDownload"
        className='form__input form__input--btn cursor--pointer text--uppercase'
      >
        Descargar
      </button>
    
    </form>
  )
}

export default Form
