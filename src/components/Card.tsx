import { CardProps } from "../helpers/types"
  
const Card:React.FC<CardProps> = ({children, index, onClick}) => {
  return (
    <div key={index} className="relative bg-zinc-950 p-1 rounded-md md:rounded-xl lg:rounded-3xl" onClick={onClick}>
        {children}
    </div>
  )
}

export default Card
