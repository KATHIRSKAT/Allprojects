import React from 'react'

const Listitem = ({item}) => {
  return (
    <li>
        {JSON.stringify(item)}
    </li>
  )
}

export default Listitem