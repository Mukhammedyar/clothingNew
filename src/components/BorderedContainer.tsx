import { childrenProps } from "../helpers/types"

const BorderedContainer:React.FC<childrenProps> = ({children}) => {
  return (
    <div className="flex-center border-card rounded-full text-3xl px-10 p-4">{children}</div>
  )
}

export default BorderedContainer