import { useState } from "react";
import Greet from "../components/Greet/Greet";
import ReferForm from "../components/ReferPopup/ReferForm";
import Sidebar from "../components/Sidebar/Sidebar";
import ReferDetails from "../components/ReferDetails/ReferDetails";
import PaymentDetails from "../components/PaymentHistory/PaymentDetails";
import SuccessModal from "../components/SuccessModal/SuccessModal";
import TopReferrals from "../components/TopReferrals/TopReferrals";
import QuickTips from "../components/QuickTips/QuickTips";
import { Toaster } from "sonner";
import PaymentDialog from "../components/PaymentDialog/PaymentDialog";
import SuggetionPopup from "../components/ReferPopup/SuggetionPopup";

function Home() {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [suggetion, setSuggetion] = useState(true);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const setOpenState = () => {
    setOpen(!open);
  };

  const setSuccessState = () => {
    setSuccess(!success);
  };

  const setShowPaymentModalState = () => {
    setShowPaymentModal(!showPaymentModal);
  };

  const setSuggetionModalState = () => {
    setSuggetion(!suggetion);
  };

  return (
    <>
      <Toaster />
      <Sidebar />
      <div className="w-full min-h-screen relative backdrop-blur-3xl pb-20 pr-0 sm:pr-5 overflow- bg-[#f5f5f5]">
        <div className="min-h-screen ml-0 lg:ml-24">
          <div className="flex items-start flex-col pt-8 gap-10 lg:gap-0 lg:flex-row ">
            <div className="flex flex-col gap-10 px-5 w-full lg:w-3/4">
              <Greet
                setOpen={setOpenState}
                setShowPaymentModal={setShowPaymentModalState}
              />
              <ReferDetails />
              <PaymentDetails />
            </div>
            <div className="w-full flex flex-col gap-5 lg:w-1/4 lg:px-0 px-5">
              <TopReferrals setOpen={setOpenState} />
              <QuickTips />
            </div>
          </div>
        </div>
      </div>
      <SuggetionPopup
        setReferralModal={setOpenState}
        setShowSuggetion={setSuggetionModalState}
        showSuggetion={suggetion}
      />
      <ReferForm
        open={open}
        setOpen={setOpenState}
        setSuccess={setSuccessState}
      />
      <PaymentDialog
        setShowPaymentModal={setShowPaymentModalState}
        showPaymentModal={showPaymentModal}
      />
      {success && (
        <SuccessModal success={success} setSuccess={setSuccessState} />
      )}
    </>
  );
}

export default Home;
