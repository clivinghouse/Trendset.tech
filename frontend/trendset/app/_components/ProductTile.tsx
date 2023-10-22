import React from 'react'

const ProductTile = ({name}: {name: string}) => {
  return (
    <div className='flex justify-between max-w-3xl'>
        <h2>{name}</h2>
        <div>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    </div>
  )
}

export default ProductTile