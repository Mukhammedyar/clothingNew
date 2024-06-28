import { useNavigate } from "react-router-dom";
import { items } from "../helpers";
import { Icons } from "../helpers/icons";
import Card from "../components/Card";

export default function Categories() {
    const navigate = useNavigate()
  return (
    <div>
        <div className="min-h-screen bg-black text-white contain">
            <h1 className="text-7xl font-bold mb-8 pt-10 montserrat-medium">Select your seasonal look!</h1>
            <div className="flex-center mb-8 montserrat-normal">
                <input
                type="text"
                placeholder="Enter the clothing ID..."
                className="input-styles"
                />
                <button className="flex-center search-button">
                    <Icons.Search width={30} height={30}/>
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 box-border gap-10">
                {items.map((item, index) => (
                <Card index={index} onClick={()=> navigate('/categorie/'+ item.title)}>
                    <img src={item.imageUrl} alt={item.title} className="w-full h-auto object-cover" />
                    <div className="card-gradient-item">
                        <div className="flex justify-between w-full mb-5 items-center px-5">
                            <h2 className="text-lg 2xl:text-3xl">{item.title}</h2>
                            <p className="text-3xl montserrat-normal">{item.count}</p>
                        </div>
                    </div>
                </Card>
                ))}
            </div>
        </div>
    </div>
  )
}
