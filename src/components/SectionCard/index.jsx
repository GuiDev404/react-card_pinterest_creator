import React from "react"
import List from "../List"

const SectionCard = ({ name, data, defData, formatter }) => {

  return (
    <div className="card-content__text flex fw-light">
      {name}
      <ul className="ml--sm text--uppercase ls--none flex" id="card_genres"> 
        <List items={data ? formatter(data) : defData} />
      </ul>
    </div>
  )
}

export default React.memo(SectionCard)
