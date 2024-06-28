import { useEffect, useState } from 'react'
import { colors, items } from '../helpers'
import { Icons } from '../helpers/icons'
import { categoriesProduct } from '../helpers/types'

interface selectedProduct{
    id: string
}

const SelectedProduct: React.FC<selectedProduct> = ({id}) => {
    const customColor = colors.slice(3, 7)
    const [product, setProduct] = useState<categoriesProduct | undefined>()
    
    useEffect(() => {
        let foundProduct: categoriesProduct | undefined = undefined;
    
        for (let i = 0; i < items.length; i++) {
          const filteredProducts = items[i].products.filter((p: categoriesProduct) => p.title === id);
          if (filteredProducts.length > 0) {
            foundProduct = filteredProducts[0];
            break; // Exit loop once product is found
          }
          // const itemId = items.find(item => )
        }
    
        setProduct(foundProduct);
      }, [id]);
    
      useEffect(() => {
        if (product) {
          console.log('Filtered Product:', id);
        }
      }, [product]);
      

  return (
    <div className="grid grid-cols-12 gap-5 h-[70vh] contain">
        {/* left */}
        <div className="w-full flex-center col-start-1 col-end-7 bg-green-">
          <div className="w-full h-full border-card rounded-3xl flex-center">
            <img src={product?.imgUrl} alt="color" className='select-none h-full object-cover '/>
          </div>
        </div>
        {/* right */}
        <div className=" col-start-7 col-end-13 h-full px-10 flex flex-col justify-between py-10">
          <div>
            <header className="header">{id}</header>
            <p className="subheader">{product?.title} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, ex!</p>
          </div>
          {/* Details */}
          <div className="">
            <header className="header">Composition</header>
            <p className="subheader">Outer: Linen/Flax 60%, Viscose 26%, Polyester 14%
              Lining: Cotton 97%, Elastane 3%</p>
            <p className="subheader pt-3">
              The model is 1.77 m wearing size 36
              The model is also styled with: Jacquemus Le Petit
              Bambimou shoulder bag
            </p>
        </div>

          {/* Sizes */}
        <div className="flex items-center">
            <div className="flex items-center gap-5">
                <p className="text-3xl">Sizes</p>
                <div className="flex-center gap-5">
                    {product?.sizes.map((size) => (
                        <div className="size-container text-3xl px-16 w-36">{size}</div>
                    ))}
                </div>
            </div>
        </div> 
            {/* Colours & button */}
        <div className="flex item-center justify-between gap-5 flex-col xl:flex-row">
            <div className="flex-center gap-4">
                {customColor?.map((color)=> (
                    <div
                    style={{
                        backgroundImage: `linear-gradient(to right, ${color.color.from}, ${color.color.to})`
                    }}
                    className={`rounded-full border-2 border-zinc-700 w-16 h-16`}></div>
                ))}
            </div>
            <div className="flex-center gap-5">
                <button className=" add-to-cart-button">Add to cart <Icons.Cart width={40} height={40}/> </button>
                <button className="bg-zinc-900 hover:bg-zinc-800 rounded-full p-6"> <Icons.LikeOutlined width={40} height={40}/> </button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default SelectedProduct