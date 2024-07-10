import { useNavigate } from 'react-router-dom'
import { complect1Type } from '../helpers/types'
import Card from './Card'
import { Icons } from '../helpers/icons'

interface complectsType {
    i: number, 
    item: complect1Type
}

const ComplectsCard:React.FC<complectsType> = ({ i, item }) => {
    const navigate = useNavigate()


  return (
    <Card index={i} onClick={()=> navigate(-1)}>
        <img
            src={item.imgUrl}
            alt={item.name}
            className="w-full h-full object-cover rounded-xl"
        />
        <div className="card-gradient-item">
            <div className="flex justify-between w-full px-3 mb-3 items-end gap-5">
                <div>
                    <h2 className="text-xs py-1">{item.name}</h2>
                </div>
            </div>
        </div>
        <div className="p-2 flex-center bg-zinc-900 absolute top-3 right-3 rounded-full">
            <Icons.Cart width={20} height={20}/>
        </div>
    </Card>
  )
}

export default ComplectsCard