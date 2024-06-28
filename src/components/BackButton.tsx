import { MouseEvent } from "react";
import { Icons } from "../helpers/icons"

interface BackButtonProps {
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
}

export const BackButton:React.FC<BackButtonProps> = ({onClick}) => {
    
  return (
    <div className="p-5 border-card rounded-full" onClick={onClick}>
        <Icons.Back width={30} height={30} />
    </div>
  )
}
