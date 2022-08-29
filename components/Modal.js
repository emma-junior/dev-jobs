import { useGlobalContext } from "../hooks/DevjobContext"

const Modal = ({input, setInput, setData, search, toggle, setToggle, setModal}) => {
    const { switchChecked } = useGlobalContext();
  return (
    <main className={`${switchChecked ? "bg-[#19202d]" : "bg-white "} w-[80%] mx-auto mt-56 py-5 px-2 rounded-md`}>
        <div className="flex py-2 ">
          <img className="mx-3 w-5 h-6" src="assets/designs/icon-location.svg" alt="" />
          <input value={input.location} onChange={(e) => setInput({...input, location: e.target.value})} placeholder="Filter by location" className={`${switchChecked ? "bg-[#19202d] text-white" : "bg-white"} h-6 outline-none`}  />
        </div>
        <div className="h-[0.25px] my-3 bg-[#D5D8F7]"></div>
        <div className="flex py-2">
          <input className="mx-3" type="checkbox" onChange={() => setToggle(!toggle)} checked={toggle} />
          <h1 className={`${switchChecked ? "text-white" : "text-black"} mr-16 font-bold`}>Full Time Only</h1>
        </div>
        <button onClick={() => {setData(search), setModal(false)}} className="bg-[#5964E0] flex h-11 w-full justify-center items-center my-3 text-white rounded-lg font-bold hover:bg-[#939BF4]">Search</button>
    </main>
  )
}

export default Modal