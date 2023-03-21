import { useGlobalContext } from "../hooks/DevjobContext";
import { motion } from "framer-motion";

const Card = ({ job }) => {
  const { switchChecked } = useGlobalContext();

  const style = {
    iconBg: `${job.companyName === "scoot" && "bg-[#e8920f]"} ${
      job.companyName === "blogr" && "bg-[#e54d29]"
    } ${job.companyName === "vector" && "bg-[#35353f]"} ${
      job.companyName === "office lite" && "bg-[#304FC8]"
    } ${job.companyName === "pad" && "bg-[#101e32]"} ${
      job.companyName === "creative" && "bg-[#521455]"
    } ${job.companyName === "pomodoro" && "bg-[#4722c7]"} ${
      job.companyName === "maker" && "bg-[#22427f]"
    } ${job.companyName === "coffeeroasters" && "bg-[#f2decd]"} ${
      job.companyName === "mastercraft" && "bg-[#304fc8]"
    } ${job.companyName === "crowdfund" && "bg-[#37c890]"} ${
      job.companyName === "typemaster" && "bg-[#f26818]"
    }`,
    colorTrans: "transition delay-300 duration-700 ease-in-out",
  };

  return (
    <motion.section
      whileHover={{ scale: 1.1 }}
      className={`${
        switchChecked ? "bg-[#19202d]" : "bg-white"
      } p-4 w-72 rounded-lg mx-auto cursor-pointer ${style.colorTrans}`}
    >
      <motion.div
        animate={{ rotate: 360, transition: { duration: 1 } }}
        className={`${style.iconBg} w-12 h-10 rounded-lg -mt-8 flex justify-center items-center`}
      >
        <img className="" src={job.jobIcon} alt="job-logo" />
      </motion.div>
      <div className="space-x-2 text-[#667891]">
        <span>{job.timePosted}</span>
        <span className="text-[40px]">.</span>
        <span>{job.jobType}</span>
      </div>
      <h3
        className={`${
          switchChecked ? "text-white" : "text-black"
        } my-2 font-bold ${style.colorTrans} `}
      >
        {job.jobName}
      </h3>
      <p className="mb-5 text-[#667891] capitalize">{job.companyName}</p>
      <p className="text-[#5964E0] font-semibold">{job.country}</p>
    </motion.section>
  );
};

export default Card;
