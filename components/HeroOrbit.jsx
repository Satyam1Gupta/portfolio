import React from 'react'

export default function HeroOrbit({children, size, rotation}) {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className=""
        style={{
            width:`${size}px`,
            height:`${size}px`,
            transform:`rotate(${rotation}deg)`
            }}>
               {children}
        </div>
    </div>
  )
}
