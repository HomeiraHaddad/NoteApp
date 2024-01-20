import React from 'react'
import styles from './color.module.css'
const ColorBox = ({color,onClick}) => {
  return (
    <div className='d-flex align-items-center'>
        <div style={{backgroundColor: color }} className={styles['div-color']} onClick={onClick}></div>
    </div>
  )
}

export default ColorBox