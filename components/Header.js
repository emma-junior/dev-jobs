import Image from "next/image"
import Link from "next/link"
import SwitchBtn from "./SwitchBtn"

const Header = () => {
  return (
    <main className="bg-[url('/assets/designs/bg-pattern-header.svg')] bg-cover mb-10 pt-10 pb-20">
       <section className="flex w-[80%] justify-between mx-auto">
          <Link href="/"><Image className="cursor-pointer" src="/assets/designs/logo.svg" alt="" /></Link>  
          <div className="flex ">
            <span className="m-1.5"><Image className="w-5" src="/assets/designs/icon-sun.svg" alt="" /></span>  
            <span className=""><SwitchBtn /></span>
            <span className="m-1.5"><Image className="w-4" src="/assets/designs/icon-moon.svg" alt="" /></span>
          </div>
       </section>
    </main>
  )
}

export default Header