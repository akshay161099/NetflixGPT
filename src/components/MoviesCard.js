import React from 'react'
import { poster_url } from '../utils/constants'
const MoviesCard = ({poster_path}) => {
  return (
    <div className='pr-2 flex-shrink-0 w-32 hover:w-36 px-2'>
        <img className='w-full' src={poster_url+poster_path}></img>
    </div>
  )
}

export default MoviesCard;