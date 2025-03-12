import Lottie from "lottie-react";
import coin from "../../assets/Lottie/coin.json";
import { useRef } from "react";

function ReferForm(props: { open: boolean; setOpen: () => void }) {
  const formRef = useRef<HTMLDivElement | null>(null);

  const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
    if (formRef.current && !formRef.current.contains(event.target as Node)) {
      props.setOpen();
    }
  };

  if (!props.open) return null;
  return (
    <div
      className="fixed top-0 right-0 w-full h-screen bg-black/80 backdrop-blur-3xl flex items-center justify-center"
      onClick={handleClose}
    >
      <div className="bg-white pb-8 rounded-3xl overflow-hidden w-1/2" ref={formRef}>
        <div className="flex items-center justify-center flex-col">
          <div className="w-18">
            <Lottie animationData={coin} loop={true} />
          </div>
          <h1 className="text-xl font-medium">Refer a friend and earn</h1>
        </div>
        <form action="" className="mt-3 w-full flex flex-col gap-3 px-8">
          <div className="w-full">
            <label htmlFor="name" className="text-sm font-medium">
              Full name
            </label>
            <input
              type="text"
              id="name"
              className="w-full outline-none h-10 border-gray-300 border rounded-lg text-sm pl-4"
              placeholder="eg., John, joe"
            />
            <p className="text-xs text-gray-300">Enter your friend's name</p>
          </div>
          <div className="w-full">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full outline-none h-10 border-gray-300 border rounded-lg text-sm pl-4"
              placeholder="eg., today@imhappy.com"
            />
            <p className="text-xs text-gray-300">Enter your friend's email</p>
          </div>
          <div className="w-full">
            <label htmlFor="phone" className="text-sm font-medium">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              className="w-full outline-none h-10 border-gray-300 border rounded-lg text-sm pl-4"
              placeholder="eg., +91 1234567890"
            />
          </div>
          <div className="w-full">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="Message"
              className="w-full outline-none h-10 border-gray-300 border rounded-lg text-sm pl-4"
              placeholder="eg., Hey, join im in this course"
              rows={3}
            />
          </div>
          <button className="w-full bg-blue-400 py-2 rounded-lg mt-5">
            Refer
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReferForm;
