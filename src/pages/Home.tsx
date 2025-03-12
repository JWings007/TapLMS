import { useState } from "react";
import Greet from "../components/Greet/Greet";
import Navbar from "../components/Navbar/Navbar";
import ReferForm from "../components/ReferPopup/ReferForm";
import Sidebar from "../components/Sidebar/Sidebar";
import ReferDetails from "../components/ReferDetails/ReferDetails";

function Home() {
  const [open, setOpen] = useState(false);

  const setOpenState = () => {
    setOpen(!open);
  };
  return (
    <div className="w-full min-h-screen relative backdrop-blur-3xl">
      <Sidebar />
      <div className="min-h-screen ml-24">
        <Navbar />
        <div className="flex flex-col gap-10">
        <Greet setOpen={setOpenState} />
        <ReferDetails />
        </div>
        <ReferForm open={open} setOpen={setOpenState} />
      </div>
    </div>
  );
}

export default Home;
