import { Icons } from '../helpers/icons'
import { apiProductType } from '../helpers/types';

export interface selectedProduct {
  id: string
  product: apiProductType,
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  index: number
}

const SelectedProduct: React.FC<selectedProduct> = ({id, setIndex, index, product}) => {

  return (
    <div className="contain">
        <div className="md:grid md:grid-cols-12 gap-5">
          {/* left */}
          <div className="w-full flex-center col-start-1 col-end-6 h-[50vh] md:h-[40vh]">
            <div className="w-auto md:w-full h-full flex-center border-card rounded-3xl f6lex-center">
              <img src={product?.colors[index].imgUrl} alt="color" className='w-full h-full select-none object-cover '/>
            </div>
          </div>
          {/* right */}
          <div className="col-start-6 col-end-13 h-full flex flex-col justify-between py-5 sm:px-5">
            <div>
            <div className="flex-between mb-3">
              <header className="header_card md:text-xl montserrat-medium text-zinc-300">{id}</header>
              <div className="flex items-center gap-3 md:hidden">
                <p className="subheader">Colors:</p>
                <div className="flex items-center">
                  {product?.colors.map((color, id) => (
                    <div
                      key={color.name}
                      onClick={()=> setIndex(id)}
                      style={{
                        backgroundImage: `linear-gradient(to right, ${color.colorCode[0]}, ${color.colorCode[1]})`
                        }}
                      className=" w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-zinc-800"></div>  
                  ))}
                </div>
              </div>
              </div>
              <p className="subheader md:text-md">{product?.colors[index].description}</p>
            </div>
            {/* Details */}
            <div className="mt-5 md:mt-0">
              <header className="header_card md:text-xl montserrat-medium pb-3 text-zinc-300">{product?.colors[index].detailsTitle}</header>
              <p className="subheader md:text-md">{product?.colors[index].detailsText}</p>
            
            </div>
            {/* Composition */}
            <div className="mt-5 md:mt-0">
              <header className="header_card md:text-xl montserrat-medium pb-3 text-zinc-300">{product?.colors[index].compositionTitle}</header>
              <p className="subheader pt-3">{product?.colors[index].compositionText}</p>
            </div>

          {/* Sizes */}
            <div className="flex flex-between mt-5 md:mt-0 gap-3">
              <div className="flex items-center gap-2">
                  <p className="header-card md:text-lg text-zinc-300">Sizes:</p>
                  <div className="flex-center gap-1 md:gap-3">
                      {product?.colors[index].sizes.map((size) => (
                          <div key={size} className="size-container text-lg px-2 w-10 md:w-20 md:py-1">{size}</div>
                      ))}
                  </div>
              </div>
              <div className="flex-center gap-2 md:hidden">
                <button className="add-to-cart-button ">Add to cart <Icons.Cart width={25} height={25}/> </button>
                <button className="bg-zinc-900 hover:bg-zinc-800 rounded-full p-2"> <Icons.LikeOutlined width={30} height={30}/> </button>
              </div>
            </div> 
          {/* Colours & button */}
          <div className="hidden md:flex-between gap-5">
            <div className="items-center gap-3 flex">
              <p className="subheader">Colors:</p>
              <div className="flex items-center">
                {product?.colors.map((color, id) => (
                  <div
                    onClick={()=> setIndex(id)}
                    key={color.name}
                    style={{
                      backgroundImage: `linear-gradient(to right, ${color.colorCode[0]}, ${color.colorCode[1]})`
                      }}
                    className=" w-10 h-10 md:w-8 lg:w-10 md:h-8 lg:h-10 rounded-full border-2 border-zinc-800"></div>  
                ))}
              </div>
            </div>
            <div className="flex-center gap-2">
                <button className="add-to-cart-button">Add to cart <Icons.Cart width={22} height={22}/> </button>
                <button className="bg-zinc-900 hover:bg-zinc-800 rounded-full p-2"> <Icons.LikeOutlined width={25} height={25}/> </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectedProduct