import React from 'react'
import List2 from './List2'
const List1 = () => {
    const arr1=["Cotton","Silk","Georgette","Wool","Linen"]
    const arr2=["Nylon","Chiffon","Satin","Rayon","velvet"]
  return (
    <div>
        <h1 style={{paddingLeft:'180px'}}>Type of Fabric</h1>
        <List2 value={arr1} data={arr2}/>
    </div>
  )
}

export default List1