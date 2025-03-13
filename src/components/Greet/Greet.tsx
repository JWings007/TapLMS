import Lottie from "lottie-react";
import Info from "../InfoTile/Info";
import wave from "../../assets/Lottie/wave.json";
import arrow from "../../assets/Lottie/arrow.json";

function Greet(props: { setOpen: () => void, setShowPaymentModal: () => void }) {
  return (
    <div
      className="w-full px-5 flex gap-10 flex-col"
      style={{ fontFamily: "Outfit, sans-serif" }}
    >
      <div className="flex justify-between flex-col gap-3 sm:gap-0 sm:flex-row sm:items-center">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl sm:text-4xl font-medium">Good morning, User!</h1>
          <div className="w-10 sm:w-16 flex items-center justify-center">
            <Lottie animationData={wave} loop={true} />
          </div>
        </div>
        <div className="flex items-center justify-start sm:justify-center gap-5">
          <div className="w-10 -rotate-90">
            <Lottie animationData={arrow} loop={true} />
          </div>
          <button className="bg-[#2587c8] text-white flex items-center justify-center gap-3 px-3 py-2 rounded-lg text-base cursor-pointer hover:-translate-y-0.5 transition-all" onClick={props.setOpen}>
          <i className="fi fi-rr-gift flex items-center justify-center"></i>
            <span>Refer and Earn</span>
          </button>
          <button className="bg-red-200 text-black flex items-center justify-center gap-3 px-3 py-2 rounded-lg text-base cursor-pointer hover:-translate-y-0.5 transition-all" onClick={props.setShowPaymentModal}>
          <i className="fi fi-rr-gift flex items-center justify-center"></i>
            <span>Pay Due Amount</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 items-center gap-5 lg:grid-cols-4">
        <Info title="Remaining amount" value="₹ 28,999" type="red" icon="coin"/>
        <Info title="Days left" value="15 days" type="blue" icon="days"/>
        <Info title="Referral Earnings" value="₹ 5000" type="green" icon="rupee"/>
        <Info title="Successful Referrals" value="5" type="green" icon="success"/>
      </div>
    </div>
  );
}

export default Greet;
