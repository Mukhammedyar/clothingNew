import {useParams, useNavigate} from 'react-router-dom'
import { ClothingCategores, defaultColors, items } from '../helpers'
import { BackButton } from '../components/BackButton'
import ProductsCard from '../components/ProductsCard'
import { color } from '../helpers/images'
import ModalColors from '../components/ModalColors'
import { useState,useEffect } from 'react'
import { apiProductType, colorsType } from '../helpers/types'
import { productFetching } from '../API/helpers'

export const Products = () => {
  const [open, setOpen] = useState(false)
  const [lastFourColors, setLastFourColors] = useState<colorsType[]>(defaultColors);
  const [products, setProducts] = useState<apiProductType[]>([])
  
  const { id } = useParams()
  const navigate = useNavigate()
  
  useEffect(() => {
    const getData = async () => {
        try {
          const productsArray = await productFetching({ type: 'get', data: undefined, id: undefined })
          const products = productsArray.data.filter((one: apiProductType) => one.categoryType === id)
          setProducts(products)
          console.log(productsArray.data);
          
        } catch (error) {
            console.log(error);
            
        }
    }
    getData();
  }, [])

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
        <div className="flex items-center gap-2 md:gap-5 py-5">
          <BackButton onClick={()=> navigate(-1)}/>
          <h1 className="header-page montserrat-medium">
            {/* Select your {id.split(" ").pop()}look! */}
            Select your look!
          </h1>
        </div>
        {/* colors */}
        <div className='colors_display w-full mb-10 gap-3'>
          <div className="flex flex-col justify-end">
            <p className='card-subtitle ml-2 text-zinc-500 min-w-[150px] sm:min-w-[160px] md:min-w-[180px]'>Search by color:</p>
            <div className='relative w-[200px] md:w-[240px] justify-between flex items-center gap-2 border_full_rounded'>
              <img src={color} alt="color" className='w-10 h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 mr-5' onClick={()=> setOpen(!open)}/>
              <ModalColors handleColorClick={handleColorClick} className={`${open ? "flex" : "hidden"} absolute top-28 -left-24 z-10`} />
              <div className="flex items-center">
                {lastFourColors.map((color) => (
                  <div
                    style={{
                      backgroundImage: `linear-gradient(to right, ${color.color.from}, ${color.color.to})`
                      }}
                    className="-ml-4 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-zinc-800"></div>  
                ))}
              </div>
            </div>
          </div>
          {/* types */}
          <div className='flex lg:flex-center gap-2 sm:gap-2 md:gap-3 mt-5 text-zinc-500'>
              {ClothingCategores.map(type => (
                <div className="size-container text-sm sm:text-md md:text-lg px-3 lg:px-5 py-2 ">{type}</div>
            ))}
          </div>
        </div>
        <ProductsCard products={products}/>
      </div>
    </div>
    );    
}
