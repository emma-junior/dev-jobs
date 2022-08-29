import { useRouter } from "next/router";
import { useGlobalContext } from "../../hooks/DevjobContext";
import Companysite from "../../components/Companysite";
// import Details from "../../components/Details";
import Header from "../../components/Header";
import jobs from "../../data/jobs";
import Footer from "../../components/Footer";
import DynamicDetails from "../../components/DynamicDetails";


const Devjob = () => {
  const { switchChecked } = useGlobalContext();
  const style = {
    colorTrans: "transition delay-300 duration-700 ease-in-out"
  }
    const router = useRouter();
    const { id } = router.query;

    const singlejob = jobs.find((item) => item.companyName === id)
    return <div className={`${switchChecked ? "bg-[#121721]" : "bg-[#f5f6f8]"} h-full ${style.colorTrans}`}> 
      <Header />      
      <Companysite singlejob={singlejob} />
      {/* <Details singlejob={singlejob} /> */}
      <DynamicDetails singlejob={singlejob} />
      <Footer singlejob={singlejob} />
      </div>;
};
export default Devjob
