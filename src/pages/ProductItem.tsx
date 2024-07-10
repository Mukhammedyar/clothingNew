import { useNavigate, useParams } from "react-router-dom"
import { BackButton } from "../components/BackButton"
import SelectedProduct from "../components/SelectedProduct"
import Complects from "../components/Complects"
import { useEffect, useState } from "react"
import { apiProductType } from "../helpers/types"
import { productFetching } from "../API/helpers"

const ProductItem = () => {
  const navigate = useNavigate()
  const [index, setIndex] = useState(0)
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<apiProductType>()
    
    useEffect(() => {        
        const getData = async ()=> {
          try {
            const productsArray = await productFetching({ type: 'get', data: undefined, id: undefined })
            const products = productsArray.data.filter((one: apiProductType) => one.name === id)
            // setProducts(products)
            setProduct(products[0]);
          } catch (error) {
            console.log(error);
          }
      }
      getData()

    }, [id]);
  

  return (
    <div className="bg-black min-h-screen text-white montserrat-normal">
      <div className="flex items-center gap-5 py-10 contain">
        <BackButton onClick={()=> navigate(-1)}/>
        <h1 className="header-page montserrat-medium">
          {id}
        </h1>
      </div>
      <SelectedProduct id={id || ''} setIndex={setIndex} index={index} product={product} />
      <Complects id={id || ''} index={index} setIndex={setIndex} product={product}/>
      {/* <Related/> */}
    </div>
  )
}

export default ProductItem


