import React from 'react';
import defaultImg from '../../assets/default_img.jpg';
import { fileToUrl, strToArray } from '../../helpers';
import { CHARACTERS, EDITED_PRODUCED, GENRES, PRODUCED_WRITED } from '../../helpers/const';
import SectionCard from '../SectionCard';
import './styles.css';

const CardMovie = ({ type, data, refCardElement }) => {
  const sectionCards = [
    { name: 'genres', data: data?.genres, defData: GENRES },
    { name: type === "movie" ? "directed" : "writed", data: data?.directed_writed, defData: PRODUCED_WRITED },
    { name: `${type === "movie" ? "produced" : "published"} by`, data: data?.edited_produced, defData: EDITED_PRODUCED },
    { name: `${type === "movie" ? "starring by" : "characters"}`, data: data?.personajes, defData: CHARACTERS },
  ];

  const posterURL = data?.poster ? fileToUrl(data.poster) : defaultImg;

  return (
    <div ref={refCardElement} className="creator__result flex flex-center">
      <div className="card_container" id="card">
        <img src={posterURL} className="card__img" id="card_img" alt={data?.nombre} />
     
        <div className="card-content">
          <h2 className="text--uppercase">
            <span className="card-content__title" id="card_title">
              {data?.nombre ? data.nombre : "Peste Negra"}
            </span>
            <span className="card-content__title__year fw-light" id="card_year">
              {" "}
              {data?.año ? data.año : "1346"}
            </span>
          </h2>

          {sectionCards.map(section=> 
            <SectionCard
              key={section.name}
              name={section.name}
              formatter={strToArray}
              data={section.data}
              defData={section.defData}
            />
          )}

        </div>
      </div>
    </div>
  );
}

export default React.memo(CardMovie)
