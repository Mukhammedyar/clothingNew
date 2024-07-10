import { MouseEvent } from "react";
import { Icons } from "../helpers/icons"

interface BackButtonProps {
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
}

export const BackButton:React.FC<BackButtonProps> = ({onClick}) => {
    
  return (
    <div className="p-2 border-card rounded-full" onClick={onClick}>
        <Icons.Back width={25} height={25} />
    </div>
  )
}
