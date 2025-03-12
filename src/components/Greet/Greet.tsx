import Lottie from "lottie-react";
import Button from "../Buttons/Button";
import Info from "../InfoTile/Info";
import wave from "../../assets/Lottie/wave.json";

function Greet(props: { setOpen: () => void }) {
  return (
    <div
      className="w-full pt-5 px-5 flex gap-10 flex-col"
      style={{ fontFamily: "Outfit, sans-serif" }}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-start">
          <h1 className="text-4xl font-medium">Good morning, User!</h1>
          <div className="w-20">
            <Lottie animationData={wave} loop={true} />
          </div>
        </div>
        <div>
          <Button text="Refer a friend" setOpen={props.setOpen} action="" />
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-10 font">
        <Info title="Remaining amount" value="28,999rs" type="red" />
        <Info title="Days left" value="15 days" type="blue" />
        <Info title="Referral Earnings" value="5000rs" type="green" />
        <Info title="Successful Referrals" value="5" type="green" />
      </div>
    </div>
  );
}

export default Greet;
