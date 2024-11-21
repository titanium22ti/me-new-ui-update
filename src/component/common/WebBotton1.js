import React from 'react';

export const WebBotton1 = (propo) => {
  return (
    <div className='hero_btn' onClick={propo.click} >
        <a href={propo.link}>{propo.WebBotton1}</a>
    </div>
  )
}