import React from "react"

const List = ({ items })=> {
  return items.map(item=> <li key={item} className="ml--sm"> {item} </li>)
}

export default React.memo(List)
