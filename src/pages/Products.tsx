import {useParams, useNavigate} from 'react-router-dom'
import { ClothingCategores, defaultColors, items } from '../helpers'
import { BackButton } from '../components/BackButton'
import ProductsCard from '../components/ProductsCard'
import { color } from '../helpers/images'
import ModalColors from '../components/ModalColors'
import { useState } from 'react'
import { colorsType } from '../helpers/types'

export const Products = () => {
  const [open, setOpen] = useState(false)
  const [lastFourColors, setLastFourColors] = useState<colorsType[]>(defaultColors);
  
  const { id } = useParams()
  const navigate = useNavigate()
  
  const item = items.filter(item => item.title === id)
  const products = item[0].products

  const handleColorClick = (color : colorsType) => {
    setLastFourColors((prevColors:colorsType[]) => {
      const newColors = [...prevColors, color];
      if (newColors.length > 4) {
        newColors.shift(); // Remove the oldest color to keep only the last four
      }
      return newColors;
    });
  };
  
      
    return (
    <div className="bg-black min-h-screen text-white contain montserrat-normal">
      <div className="container mx-auto">
        <div className="flex items-center gap-5">
          <BackButton onClick={()=> navigate(-1)}/>
          <h1 className="text-7xl font-bold mb-8 pt-10 montserrat-medium">
            Select your {item[0].title.split(" ").pop()} look!
          </h1>
        </div>
        {/* colors */}
        <div className='flex items-center w-full mb-24 justify-between'>
          <p className='text-3xl min-w-[250px] mr-5'>Search by colors:</p>
          <div className='relative w-full flex items-center gap-5'>
            <img src={color} alt="color" className='w-24 h-24' onClick={()=> setOpen(!open)}/>
            <ModalColors handleColorClick={handleColorClick} className={`${open ? "flex" : "hidden"} absolute top-28 -left-24 z-10`} />
            <div className="flex items-center">
              {lastFourColors.map((color) => (
                <div
                  style={{
                    backgroundImage: `linear-gradient(to right, ${color.color.from}, ${color.color.to})`
                    }}
                  className="w-16 h-16 rounded-full border-4 border-zinc-800"></div>  
              ))}
            </div>
          </div>
          {/* types */}
          <div className='flex-center gap-5'>
              {ClothingCategores.map(type => (
                <div className="size-container text-2xl">{type}</div>
            ))}
          </div>
        </div>
        <ProductsCard products={products}/>
      </div>
    </div>
    );    
}
