import React from 'react'

function OrderPage({params}: {params: {category: string}}) {
  console.log(params.category)
  return (
    <div>OrderPage</div>
  )
}

export default OrderPage