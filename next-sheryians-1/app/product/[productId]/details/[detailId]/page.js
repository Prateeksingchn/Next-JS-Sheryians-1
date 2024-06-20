import React from 'react'

const page = ({params}) => {
  return (
    <div>
        <h1>{params.detailId} related details of {params.productId} Product</h1>
    </div>
  )
}

export default page