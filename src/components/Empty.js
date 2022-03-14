import React from 'react'

const Empty = ({fetchTours}) => {
  return (
    <div className='mx-auto text-center mt-5'>
        <h3>No Tours</h3>
        <button type="button" className="btn btn-outline-danger" onClick={fetchTours}>refresh</button>
    </div>
  )
}

export default Empty