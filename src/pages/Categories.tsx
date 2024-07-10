import React, {useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";
import { items } from "../helpers";
import { Icons } from "../helpers/icons";
import Card from "../components/Card";
import { categoryFetching } from "../API/helpers";
import { categoryType } from "../helpers/types";

export default function Categories() {
    const navigate = useNavigate()
    const [categories, setCategories] = useState<categoryType[]>([])

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await categoryFetching({ type: 'get', data: undefined, id: undefined })
                setCategories(data)
            } catch (error) {
                console.log(error);
                
            }
        }
        getData();
    }, [])



  return (
    <div>
        <div className="min-h-screen bg-black text-white contain">
            <div className="flex flex-col gap-5 py-10 md:flex-row md:items-center md:justify-between">
                <h1 className="header-page font-bold montserrat-medium md:w-full">Select your seasonal look!</h1>
                <div className="flex-center montserrat-normal md:w-full">
                    <input
                    type="text"
                    placeholder="Enter the clothing ID..."
                    className="input-styles"
                    />
                    <button className="flex-center search-button">
                        <Icons.Search width={25} height={25}/>
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-5 px-5 md:px-10">
                {categories.map((item, index) => (
                <Card key={index} index={index} onClick={()=> navigate('/categorie/'+ item.type)}>
                    <img src={item.imgUrl} alt={item.name} className="w-full h-auto object-cover" />
                    <div className="card-gradient-item">
                        <div className="flex justify-between items-end w-full card_text_container">
                            <div>
                                <h2 className="card-title md:text-md text-md ">{item.type}</h2>
                                <h3 className="card-title md:text-md text-md ">{item.name}</h3>
                            </div>
                            <p className="sm:text-md card_subtitle">{item.count}</p>
                        </div>
                    </div>
                </Card>
                ))}
            </div>
        </div>
    </div>
  )
}
