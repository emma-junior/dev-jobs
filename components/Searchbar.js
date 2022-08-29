import { useGlobalContext } from "../hooks/DevjobContext"

const Searchbar = ({input, setInput, setData, search, toggle, setToggle }) => {
  const { switchChecked } = useGlobalContext();
  
  // const merged = [...searchedTitle, ...searchedLocation];
  // const unique = [...new Set(merged)];

  const style = {
    colorTrans: "transition delay-300 duration-700 ease-in-out"
  }
  return (
    <main className={`${switchChecked ? "bg-[#19202d]" : "bg-white"} flex w-[78%]   lg:w-[72%] mx-auto px-4 -mt-20 rounded-lg mb-16 ${style.colorTrans}`}>
        <div className="flex  items-center">
            <img className="mx-3 w-6 h-6" src="assets/designs/icon-search.svg" alt="" />
            <input value={input.title}
            onChange={(e) =>
              setInput({ ...input, title: e.target.value })
            } placeholder="Filter by title.." className={`${switchChecked ? "bg-[#19202d] text-white" : "bg-white"} w-[150px] lg:w-[240px] h-6 outline-none ${style.colorTrans}`} />
        </div>
        <div className="w-[1px] h-20 bg-[#D5D8F7]"></div>
        <div className="flex items-center">
            <img className="mx-3 w-5 h-6" src="assets/designs/icon-location.svg" alt="" />
            <input value={input.location} onChange={(e) => setInput({...input, location: e.target.value})} placeholder="Filter by location" className={`${switchChecked ? "bg-[#19202d] text-white" : "bg-white"}  w-[140px] lg:w-[240px] h-6 outline-none ${style.colorTrans}`}  />
        </div>
        <div className="w-[1px] h-20 bg-[#D5D8F7]"></div>
        <div className="flex items-center">
            <input className="mx-3" type="checkbox" onChange={() => setToggle(!toggle)} checked={toggle} />
            <h1 className={`${switchChecked ? "text-white" : "text-black"} mr-6 lg:mr-16 font-bold ${style.colorTrans}`}>Full Time Only</h1>
            <button onClick={() => setData(search)} className="bg-[#5964E0] px-5 py-2 lg:px-7 lg:py-3 text-white rounded-lg font-bold hover:bg-[#939BF4]">Search</button>
        </div>
    </main>
  )
}

export default Searchbar