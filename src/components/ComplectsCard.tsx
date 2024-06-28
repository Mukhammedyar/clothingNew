import { useNavigate } from 'react-router-dom'
import { complectsType } from '../helpers/types'
import Card from './Card'
import { Icons } from '../helpers/icons'

interface complectsCardType {
    index: number, 
    item: complectsType
}

const ComplectsCard:React.FC<complectsCardType> = ({ index, item }) => {
    const navigate = useNavigate()
  return (
    <Card index={index} onClick={()=> navigate(-1)}>
        <img
            src={item.imgUrl}
            alt={item.name}
            className="w-full h-full object-cover mb-4"
        />
        <div className="card-gradient-item pt-10">
            <div className="flex justify-between w-full mb-5 items-end gap-5">
                <div>
                    <h2 className="text-lg 2xl:text-3xl py-2">{item.name}</h2>
                    <p className="text-xl montserrat-normal">{item.describtion}</p>
                </div>
                <div className="flex justify-center items-end flex-col">
                    <p className="text-3xl montserrat-normal">${item.price}</p>
                    <p className=" montserrat-normal flex gap-3">
                        <span className="line-through text-red-500 text-2xl">${item.priceOff}</span>
                        <span className='text-xl'>20% off</span>
                    </p>
                </div>
            </div>
        </div>
        <div className="p-5 flex-center bg-zinc-900 absolute top-5 right-5 rounded-full">
            <Icons.Cart width={30} height={30}/>
        </div>
    </Card>
  )
}

export default ComplectsCard