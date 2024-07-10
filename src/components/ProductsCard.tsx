import { useNavigate } from "react-router-dom"
import Card from "./Card"
import { apiProductType } from "../helpers/types"

interface ProductsCardProps {
    products: apiProductType[]
}

const ProductsCard: React.FC<ProductsCardProps> = ({ products }) => {
  const navigate = useNavigate()
    
  // console.log(products);
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-5 px-5 md:px-10">
    {products.map((item, index) => (
      <Card index={index} onClick={()=> navigate('/products/'+ item.name)}>
        <img
            src={item.colors[0].imgUrl}
            alt={item.name}
            className="w-full h-full object-cover mb-4"
          />
          <div className="card-gradient-item ">
          <div className="flex justify-between w-full card_text_container">
            <h2 className="card-title md:text-md text-md ">{item.name}</h2>
            <div className='flex'>
                {item.colors[0].sizes.map((size, i) => (
                  <>
                    <p className="sm:text-md card_subtitle">{size}
                      {i < item.colors[0].sizes.length - 1 && (
                      <span className="">,</span>
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