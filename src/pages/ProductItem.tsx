import { useNavigate, useParams } from "react-router-dom"
import { BackButton } from "../components/BackButton"
import SelectedProduct from "../components/SelectedProduct"
import Complects from "../components/Complects"
import Related from "../components/RelatedProducts"

const ProductItem = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  return (
    <div className="bg-black min-h-screen text-white montserrat-normal">
      <div className="flex items-center gap-5 py-16 contain">
        <BackButton onClick={()=> navigate(-1)}/>
        <h1 className="text-6xl font-bold montserrat-medium">
          {id}
        </h1>
      </div>
      <SelectedProduct id={id || ''} />
      <Complects />
      <Related/>

       
        
    </div>
  )
}

export default ProductItem


