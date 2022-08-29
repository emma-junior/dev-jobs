import React from 'react'
import ApplyBtn from './ApplyBtn'
import { useGlobalContext } from "../hooks/DevjobContext"
import { LoremIpsum } from 'react-lorem-ipsum';

const Details = ({singlejob}) => {
    const { switchChecked } = useGlobalContext();
    const style = {
        colorTrans: "transition delay-300 duration-700 ease-in-out",
        textChange: `${switchChecked ? "text-white" : "text-[#111]"}`
    }
  return (
    <main className={`${switchChecked ? "bg-[#19202d]" : "bg-white"} w-[85%] md:w-[70%] lg:w-[55%] mx-auto mt-8 p-8 ${style.colorTrans}`}>
        <section>
            <div className="space-x-2 text-[#667891] text-[18px]">
                <span >{singlejob?.timePosted}</span>
                <span className="text-[40px]">.</span>
                <span>{singlejob?.jobType}</span>
            </div>
            <div className='lg:flex justify-between'>
                <div className='mb-8 md:mb-3 lg:mb-0'>
                    <h1 className={`lg:text-[24px] text-[20px] font-bold ${style.textChange} ${style.colorTrans}`}>{singlejob?.jobName}</h1>
                    <p className='font-bold text-[#5e64e0]'>{singlejob?.country}</p>
                </div>
                <span className=''><ApplyBtn /></span>
            </div>
            
            <p className='text-[#6e90c3] my-10'>{singlejob?.description}</p>
        </section>
        <section>
            <h1 className={`text-[20px] font-bold ${style.textChange} ${style.colorTrans}`}>Requirements</h1>
            <p className='my-5 text-[#6e90c3]'><LoremIpsum  /></p>
            <ul className='p-4'>
            {LoremIpsum({ p: 6, avgSentencesPerParagraph: 1 }).map(text => (
                <li className="list-disc p-1 text-[#6e90c3]" key={text}>
                    {text}
                </li>
            ))}
            </ul>
        </section>
        <section className='mt-2'>
            <h1 className={`text-[20px] font-bold ${style.textChange} ${style.colorTrans}`}>What You will Do</h1>
            <p className='my-5 text-[#6e90c3]'><LoremIpsum  /></p>
            <ul className='p-4'>
            {LoremIpsum({ p: 4, avgSentencesPerParagraph: 1 }).map(text => (
                <li className="list-decimal p-1 text-[#6e90c3]" key={text}>
                    {text}
                </li>
            ))}
            </ul>
        </section>
    </main>
  )
}

export default Details