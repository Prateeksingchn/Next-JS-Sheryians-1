import React from 'react'

const page = ({params}) => {
  return (
    <div>
        <h1>{params.productId}'s product Details</h1>
    </div>
  )
}

export default page