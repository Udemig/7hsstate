import React from 'react'
import './PersonalCardInfoSection.css'
const PersonalCardInfoSection = (props) => {
    console.log('cardprops',props)
  return (
    <div className='infoBox'>
        <span className='title'>{props.sectionTitle} : </span>
        <span className='value'>{props.sectionValue}</span>
    </div>
  )
}

export default PersonalCardInfoSection