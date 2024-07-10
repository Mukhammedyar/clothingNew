import {FormEvent, useEffect, useState} from 'react'
import { categoryFetching } from '../API/helpers'
import { categoryType, createCategoryType } from '../helpers/types'
import CreateCategoryModal from './CreateCategoryModal'



export default function AdminCategories() {
  const [categories, setCategories] = useState<categoryType[]>([])
  const [value, setValue] = useState<createCategoryType>({name: '', count: 0, imgUrl: ""})
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const {data} = await categoryFetching({ type: 'get_categories', data: undefined, id: undefined })
        setCategories(data)
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, [])
  
  const createCategory = async (e: FormEvent) => {
    e.preventDefault();
   try {
     await categoryFetching({ type: 'create_category', data: value, id: undefined })
     console.log("category successfully created");
     setOpenModal(false)
   } catch (error) {
    console.log(error);
   }
  }

  return (
    <div className='text-white px-16 max-h-[500px]'>
      <div className="flex justify-between items-center px-3 py-2">
        <h1 className='text-3xl montserrat-medium'>Categories</h1>
        <div className='button-dark bg-zinc-900 ' onClick={()=> setOpenModal(true)}>Add category</div>
      </div>
      <div>
        {categories.map((category) => (
          <div key={category._id} className='text-white flex-between border-[1px] border-zinc-900 my-1 p-2 px-5'>
            <div>
              <p className="">
                <span className='text-md text-zinc-400'>Category name: </span>
                <span className="text-xl">{category.name}</span>
              </p>
              <p className="text-md">
                <span className='text-md text-zinc-400'>Category count: </span>
                <span className="text-xl">{category.count}</span>
              </p>
            </div>
            <div className='button-dark bg-zinc-900 '>edit</div>
          </div>
        ))}
      </div>
      <CreateCategoryModal 
        openModal={openModal}
        value={value}
        setValue={setValue}
        setOpenModal={setOpenModal}
        createCategory={createCategory} />
    </div>
  )
}
