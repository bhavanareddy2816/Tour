import React, { useState } from 'react'

const Tour = ({id, image, name, info, price , removeTour}) => {
    const [readMore, setReadMore] = useState(false);
    return (
        <div className='card mt-4'>
            <div className="card shadow border-0" >
                <img src={image} alt="place"/>
                <div className="card-body d-flex flex-row justify-content-between">
                    <h5 className="text-left pt-1">{name}</h5>
                    <h6 className='text-wrap tour-price'>${price}</h6>
                </div>
                <div className="card-body">
                    <p>{readMore ? info : `${info.substring(0, 200)}...`}
                        <button className="button" onClick={() => setReadMore(!readMore)}>
                            {readMore ? 'show less' : ' read more'}
                        </button></p>
                        <div className="text-center">
                        <button className="btn btn-outline-success" onClick={() => removeTour(id)}>Not interested</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Tour