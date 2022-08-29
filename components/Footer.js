import ApplyBtn from './ApplyBtn'
import { useGlobalContext } from "../hooks/DevjobContext"
const Footer = ({singlejob}) => {
    const { switchChecked } = useGlobalContext();
    const style = {
        colorTrans: "transition delay-300 duration-700 ease-in-out",
    }
  return (
    <main className={`${switchChecked ? "bg-[#19202d]" : "bg-white"} md:flex mt-12 mx-auto p-6 md:w-[100%] ${style.colorTrans}`}>
        <section className='md:w-[70%] lg:w-[55%] w-[85%] md:flex justify-between mx-auto'>
            <div className='hidden md:block'>
                <h1 className={`${switchChecked ? "text-white":"text-black"} text-[24px] font-bold ${style.colorTrans}`}>{singlejob?.jobName}</h1>
                <p className='text-[#6e90c3]'>{singlejob?.companyName}</p>
            </div>
            <span><ApplyBtn /></span>
        </section>
    </main>
  )
}

export default Footer