import { useState } from "react";
import Greet from "../components/Greet/Greet";
import Navbar from "../components/Navbar/Navbar";
import ReferForm from "../components/ReferPopup/ReferForm";
import Sidebar from "../components/Sidebar/Sidebar";
import ReferDetails from "../components/ReferDetails/ReferDetails";
import PaymentDetails from "../components/PaymentHistory/PaymentDetails";
import SuccessModal from "../components/SuccessModal/SuccessModal";

function Home() {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const setOpenState = () => {
    setOpen(!open);
  };

  const setSuccessState = () => {
    setSuccess(!success);
  };
  return (
    <>
      <Sidebar />
      <div className="w-full min-h-screen relative backdrop-blur-3xl pb-20">
        <div className="min-h-screen ml-24">
          <Navbar />
          <div className="flex flex-col gap-10">
            <Greet setOpen={setOpenState} />
            <ReferDetails />
            <PaymentDetails />
          </div>
          <ReferForm
            open={open}
            setOpen={setOpenState}
            setSuccess={setSuccessState}
          />
        </div>
        {success && <SuccessModal success={success} setSuccess={setSuccessState}/>}
      </div>
    </>
  );
}

export default Home;
