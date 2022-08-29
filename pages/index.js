import jobs from "../data/jobs"
import Card from "../components/Card"
import Header from "../components/Header"
import Searchbar from "../components/Searchbar"
import useWindowSize from "../hooks/useWindowSize"
import { useGlobalContext } from '../hooks/DevjobContext'
import { useState } from "react"
import Link from "next/link"
import MobileSearch from "../components/MobileSearch"
import Modal from "../components/Modal"
export default function Home() {
  const { switchChecked } = useGlobalContext();

  const [toggle, setToggle] = useState(false)
  const [data, setData] = useState(jobs)
  const [modal, setModal] = useState(false)
  const [input, setInput] = useState({
    title: "",
    location: "",
  })

  const windowSize = useWindowSize()
  let fulltime;
  const style = {
    colorTrans: "transition delay-300 duration-700 ease-in-out"
  }
  console.log("data", data)
  
  const search = jobs.filter( (item) => item.jobName.toLowerCase().includes(input.title) && item.country.toLowerCase().includes(input.location) && toggle ? fulltime = item.jobType === "Full Time" : fulltime = item.jobName.toLowerCase().includes(input.title) && item.country.toLowerCase().includes(input.location))
  return (
    <section  className={`${switchChecked ? "bg-[#121721]" : "bg-[#f5f6f8]"} min-h-screen pb-12 relative z-10 ${style.colorTrans}`}>
      <Header />
      {
        windowSize.width >= 768 ? (
          <Searchbar input={input} setInput={setInput} setData={setData} search={search} setToggle={setToggle} toggle={toggle} />
        ) : (
          <MobileSearch input={input} setInput={setInput} setData={setData} search={search} setModal={setModal} />
        )
      }
      {modal && <div className="bg-[#000] bg-opacity-50 h-full w-full top-0 absolute z-30"><Modal input={input} setInput={setInput} setData={setData} search={search} setToggle={setToggle} toggle={toggle} setModal={setModal} /></div>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[80%] lg:w-[75%] justify-center mx-auto">
        {data.map((job) => <Link key={job.id} href='/details/[id]' as={`/details/${job.companyName}`}><a><Card  job={job} /></a></Link>)}
      </div>
    </section>
  )
}
