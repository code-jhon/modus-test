import React from 'react'
import { BannerProps } from '../utils/entities';

const Banner: React.FC<BannerProps> = ({imageParam}) => {
  return (
    <div className="relative">
      <div 
        className='bg-local w-full' 
        style={{
        backgroundImage: `url(${`https://source.unsplash.com/1600x300/?${imageParam}`})`,
        height: '200px',
        display: 'inline-block',
      }} >
        <div className='absolute top-0 left-0 bg-gradient-to-b from-white to-transparent w-full' >
          <span 
            className="text-transparent text-9xl capitalize font-bold p-4 pt-1"
            style={{
              backgroundImage: `url(${`https://source.unsplash.com/1600x300/?${imageParam}`})`,
              WebkitTextFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              display: 'block',
            }}
          >{ imageParam }</span>
        </div>
      </div>
    </div>
  )
}

export default Banner;