import React from 'react'
import { useGlobalContext } from "../hooks/DevjobContext"

const MobileSearch = ({input, setInput, setData, search, setModal}) => {
    const { switchChecked } = useGlobalContext();
    const style = {
        colorTrans: "transition delay-300 duration-700 ease-in-out"
      }
  return (
    <section className={`${switchChecked ? "bg-[#19202d]" : "bg-white"} -mt-20 mb-12 h-20 w-[80%] mx-auto rounded-md ${style.colorTrans}`}>
        <div className='flex w-[100%] h-[100%] justify-center items-center'>
            <input value={input.title}  onChange={(e) =>
              setInput({ ...input, title: e.target.value })
            } placeholder="Filter by title" className={`${switchChecked ? "bg-[#19202d] text-white" : "bg-white"} w-[60%] p-1 outline-none ${style.colorTrans}`}   />
            <img onClick={() => setModal(true)} className='mx-2 h-6' src='/assets/designs/icon-filter.svg' alt='filter icon' />
            <button onClick={() => setData(search)} className='bg-[#525dcf] p-3 rounded'><img src='/assets/designs/search-mobile.svg' alt='search' /></button>
        </div>
    </section>
  )
}

export default MobileSearch