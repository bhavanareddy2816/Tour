import React from 'react'
import Tour from './Tour'

const Tours = ({tours , removeTour}) => {
  return (
    <div className='container mx-auto col-md-5'>
        {tours.map((tour)=> <Tour key={tour.id} id={tour.id} image={tour.image} info={tour.info} name={tour.name} price={tour.price} removeTour={removeTour}/>)}
    </div>
  )
}

export default Tours