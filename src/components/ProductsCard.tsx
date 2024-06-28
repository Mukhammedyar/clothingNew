import { useNavigate } from "react-router-dom"
import Card from "./Card"
import { categoriesProduct } from "../helpers/types"

interface ProductsCardProps {
    products: categoriesProduct[]
}

const ProductsCard: React.FC<ProductsCardProps> = ({ products }) => {
    const navigate = useNavigate()
    

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {products.map((item, index) => (
      <Card index={index} onClick={()=> navigate('/products/'+ item.title)}>
        <img
            src={item.imgUrl}
            alt={item.title}
            className="w-full h-full object-cover mb-4"
          />
          <div className="card-gradient-item ">
          <div className="flex justify-between w-full mb-5 items-center">
            <h2 className="text-lg 2xl:text-4xl">{item.title}</h2>
            <div className='flex'>
                {item.sizes.map((size, i) => (
                  <>
                    <p className="text-3xl montserrat-normal">{size}
                      {i < item.sizes.length - 1 && (
                      <span className="mx-2">,</span>
                      )}
                    </p>
                  </>  
                ))}
            </div>
          </div>
        </div>
      </Card>
  ))}
</div>
  )
}

export default ProductsCard