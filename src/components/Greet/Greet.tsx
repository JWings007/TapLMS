import Info from "../InfoTile/Info";

function Greet(props: { setOpen: () => void, setShowPaymentModal: () => void }) {
  return (
    <div
      className="w-full flex gap-10 flex-col"
      style={{ fontFamily: "Outfit, sans-serif" }}
    >
      <div className="flex justify-between flex-col gap-3 sm:gap-0 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl sm:text-4xl font-medium">Good morning, User!</h1>
          <div className="w-16 flex items-center justify-center">
            <img src="/assets/Images/wave.gif" alt="" className=""/>
          </div>
        </div>
        <div className="hidden sm:flex items-center justify-start sm:justify-center gap-5">
          <button className="bg-[#2587c8] text-white flex items-center justify-center gap-3 px-3 py-2 rounded-lg text-base cursor-pointer hover:-translate-y-0.5 transition-all" onClick={props.setOpen}>
          <i className="fi fi-rr-gift flex items-center justify-center"></i>
            <span>Refer and Earn</span>
          </button>
          <button className="bg-red-300 text-black flex items-center justify-center gap-3 px-3 py-2 rounded-lg text-base cursor-pointer hover:-translate-y-0.5 transition-all" onClick={props.setShowPaymentModal}>
          <i className="fi fi-rr-gift flex items-center justify-center"></i>
            <span>Pay Due Amount</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 items-center gap-5 lg:grid-cols-4">
        <Info title="Remaining amount" value="₹ 28,999" type="red" icon="coin" description="Remaining out of ₹ 50,999"/>
        <Info title="Days left" value="15 days" type="blue" icon="days" description="Make your payment"/>
        <Info title="Referral Earnings" value="₹ 5000" type="green" icon="rupee" description="Your total referral earnings"/>
        <Info title="Successful Referrals" value="5" type="purple" icon="success" description="Successful referrals done"/>
      </div>
      <div className="sm:hidden flex items-center justify-center sm:justify-center gap-5">
          <button className="bg-[#2587c8] text-white flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-base cursor-pointer hover:-translate-y-0.5 transition-all" onClick={props.setOpen}>
          <i className="fi fi-rr-gift flex items-center justify-center"></i>
            <span>Refer and Earn</span>
          </button>
          <button className="bg-red-300 text-black flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-base cursor-pointer hover:-translate-y-0.5 transition-all" onClick={props.setShowPaymentModal}>
          <i className="fi fi-rr-gift flex items-center justify-center"></i>
            <span>Pay Due Amount</span>
          </button>
        </div>
    </div>
  );
}

export default Greet;
