import React from 'react'
import { colors } from '../helpers'
import { ClassNameProps } from '../helpers/types'

const ModalColors:React.FC<ClassNameProps> = ({className, handleColorClick}) => {
  return (
    <div className={`grid grid-cols-5 bg-[rgba(33,33,33,.5)] backdrop-blur-lg gap-2 p-3 rounded-xl ${className}`}>
        {colors.map((color, index) => (
        <div
            onClick={()=> handleColorClick(color)}
            style={{
            backgroundImage: `linear-gradient(to right, ${color.color.from}, ${color.color.to})`
            }}
            key={index}
            className={`bg-gradient-to-r w-12 h-12 rounded-xl`}></div>
    ))}
    </div>
  )
}

export default ModalColors