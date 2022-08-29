import Link from "next/link";
import Image from "next/image"
import { devCase } from "../helper/helper";
import { useGlobalContext } from "../hooks/DevjobContext";
const Companysite = ({ singlejob }) => {
  const { switchChecked } = useGlobalContext();

  const style = {
    iconBg: `${singlejob?.companyName === "scoot" && "bg-[#e8920f]"} ${
      singlejob?.companyName === "blogr" && "bg-[#e54d29]"
    } ${singlejob?.companyName === "vector" && "bg-[#35353f]"} ${
      singlejob?.companyName === "office lite" && "bg-[#304FC8]"
    } ${singlejob?.companyName === "pad" && "bg-[#101e32]"} ${
      singlejob?.companyName === "creative" && "bg-[#521455]"
    } ${singlejob?.companyName === "pomodoro" && "bg-[#4722c7]"} ${
      singlejob?.companyName === "maker" && "bg-[#22427f]"
    } ${singlejob?.companyName === "coffeeroasters" && "bg-[#f2decd]"} ${
      singlejob?.companyName === "mastercraft" && "bg-[#304fc8]"
    } ${singlejob?.companyName === "crowdfund" && "bg-[#37c890]"} ${
      singlejob?.companyName === "typemaster" && "bg-[#f26818]"
    }`,
    colorTrans: "transition delay-300 duration-700 ease-in-out",
  };
  return (
    <section
      className={`${
        switchChecked ? "bg-[#19202d]" : "bg-white"
      } flex h-48 md:h-36 w-[75%] md:w-[70%] lg:w-[55%] mx-auto -mt-20 pr-3 relative ${
        style.colorTrans
      }`}
    >
      <span
        className={`${style.iconBg} w-36 h-36 md:flex justify-center hidden items-center mr-12`}
      >
        <Image className="w-16" src={singlejob?.jobIcon} alt="" />
      </span>
      <div className="absolute -top-5 left-0 right-0 ml-auto mr-auto w-[40px]">
        <span
          className={`${style.iconBg} w-12 h-10 rounded-lg  flex md:hidden justify-center items-center`}
        >
          <Image className="" src={singlejob?.jobIcon} alt="" />
        </span>
      </div>
      <div className="block md:flex w-[70%] md:justify-between mt-7 md:mt-0 mx-auto ">
        <span className="my-auto ">
          <h2
            className={`${
              switchChecked ? "text-white" : "text-black"
            } capitalize text-[20px] md:text-[28px] font-bold text-center  ${style.colorTrans}`}
          >
            {singlejob?.companyName}
          </h2>
          <p className="text-[#538098] text-center py-2 lg:py-0">
            {devCase(singlejob?.companyName.replaceAll(" ", ""))}.com
          </p>
        </span>
        <Link href={`https://example.com/${singlejob?.companyName}`}>
          <button
            className={`${
              switchChecked
                ? "text-white hover:bg-[#696e76]"
                : "text-[#7564e0] hover:bg-[#c5c9f4]"
            } bg-[#c5c9f4] bg-opacity-25 w-40 h-12 md:w-36 md:h-16 flex justify-center items-center font-bold rounded-md mt-3 md:my-auto mx-auto md:mx-0  ${
              style.colorTrans
            }`}
          >
            Company Site
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Companysite;
