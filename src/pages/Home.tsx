import { useState } from "react";
import Greet from "../components/Greet/Greet";
import Navbar from "../components/Navbar/Navbar";
import ReferForm from "../components/ReferPopup/ReferForm";
import Sidebar from "../components/Sidebar/Sidebar";
import ReferDetails from "../components/ReferDetails/ReferDetails";
import PaymentDetails from "../components/PaymentHistory/PaymentDetails";
import SuccessModal from "../components/SuccessModal/SuccessModal";
import TopReferrals from "../components/TopReferrals/TopReferrals";
import QuickTips from "../components/QuickTips/QuickTips";
import { Toaster } from "sonner";
import PaymentDialog from "../components/PaymentDialog/PaymentDialog";

function Home() {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
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
  return (
    <>
      <Toaster />
      <Sidebar />
      <div className="w-full min-h-screen relative backdrop-blur-3xl pb-20 pr-0 sm:pr-5 overflow-hidden">
        <div className="min-h-screen ml-0 lg:ml-24">
          {/* <Navbar /> */}
          <div className="flex items-start flex-col pt-8 gap-10 lg:gap-0 lg:flex-row ">
            <div className="flex flex-col gap-10 w-full lg:w-3/4">
              <Greet setOpen={setOpenState} setShowPaymentModal={setShowPaymentModalState}/>
              <ReferDetails />
              <PaymentDetails />
            </div>
            <div className="w-full flex flex-col gap-5 lg:w-1/4 lg:px-0 px-5">
              <TopReferrals setOpen={setOpenState} />
              <QuickTips />
            </div>
          </div>
          <ReferForm
            open={open}
            setOpen={setOpenState}
            setSuccess={setSuccessState}
          />
        </div>
        <PaymentDialog
          setShowPaymentModal={setShowPaymentModalState}
          showPaymentModal={showPaymentModal}
        />
        {success && (
          <SuccessModal success={success} setSuccess={setSuccessState} />
        )}
      </div>
    </>
  );
}

export default Home;
