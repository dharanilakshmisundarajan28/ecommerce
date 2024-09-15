import React from 'react'

const List2 = (props) => {
  return (
    <div style={{paddingLeft:'230px'}}>
    <h3 style={{fontFamily:''}}>Order List</h3>
    <ol>
        {props.value.map((value,ind)=>(
                <li key={ind}>{value}</li>
            ))}
    </ol>
    <h3>Unorder List</h3>
    <ul>{props.data.map((value,ind)=>(
        <li key={ind}>{value}</li>
    )
    )}
    </ul>
</div>
  )
}

export default List2