import Input from "../UI/input"
import { createCategoryType } from "../helpers/types";


interface CreateCategoryModalProps {
    openModal: boolean;
    value: createCategoryType;
    setValue: React.Dispatch<React.SetStateAction<createCategoryType>>;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    createCategory: (e: React.FormEvent) => void;
  }
  
  const CreateCategoryModal: React.FC<CreateCategoryModalProps> = ({ openModal, value, setValue, setOpenModal, createCategory }) => {
      return (
    <div className={` ${openModal ? "flex-center" : "hidden"} absolute bg-[rgba(0,0,0,.5)] top-0 left-0 right-0 bottom-0 w-full h-full `}>
        <div className=' bg-zinc-900 w-1/3 h-[400px] p-3 flex flex-col'>
          <h1 className="text-xl text-center my-4">Create category</h1>
          <form action="" className='w-full flex flex-col' onSubmit={createCategory}>
            <label htmlFor="">Name:</label>
            <Input
              value={value.name}
              className='mb-3'
              placeholder='for example: Reynly'
              onchange={(e) => setValue({ ...value, name: e.target.value })} />
            <label htmlFor="">Count:</label>
            <Input
              value={value.count}
              className='mb-3'
              placeholder='123'
              onchange={(e) => setValue({ ...value, count: e.target.value })} />
            <label htmlFor="">Image url:</label>
            <Input
              className='mb-3'
              value={value.imgUrl}
              placeholder='https://image.jpg'
              onchange={(e) => setValue({ ...value, imgUrl: e.target.value })} />
            <div className="flex-between gap-2 mt-5">
              <button type='submit' className=" w-full px-4 py-2 rounded-md hover:bg-zinc-200 transition-all bg-zinc-100 my-4 text-zinc-900 font-medium ">create</button>
              <button onClick={()=> setOpenModal(false)} className="w-full button-dark bg-zinc-950 my-4 ">close</button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default CreateCategoryModal