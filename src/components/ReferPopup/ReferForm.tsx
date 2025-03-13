import Lottie from "lottie-react";
import { useEffect, useRef } from "react";
import coin from "../../assets/Lottie/coin.json";

function ReferForm(props: {
  open: boolean;
  setOpen: () => void;
  setSuccess: () => void;
}) {
  const formRef = useRef<HTMLDivElement | null>(null);

  const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
    if (formRef.current && !formRef.current.contains(event.target as Node)) {
      props.setOpen();
    }
  };

  useEffect(() => {
    if (props && props.open) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [props.open]);

  if (!props.open) return null;
  return (
    <div
      className="fixed top-0 right-0 w-full h-screen bg-black/60 flex items-center justify-center px-3"
      onClick={handleClose}
    >
      <div
        className="bg-white flex rounded-lg overflow-hidden w-full sm:w-1/2 items-center flex-col lg:flex-row"
        ref={formRef}
      >
        <div className="px-5 sm:px-8 flex flex-col items-center justify-between bg-gradient-to-r from-[#2587c8] to-[#30acff] text-white py-8 gap-8">
          <div className="flex items-center">
            <div className="flex flex-col gap-4">
              <div>
                <p>Refer your Friends</p>
                <h1 className="text-4xl font-medium mb-3">Earn Upto ₹ 1000</h1>
              </div>
            </div>
            <div className="w-48">
              <Lottie animationData={coin} loop={true} />
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <i className="fi fi-rr-link-alt flex items-center justify-center text-black"></i>
              </div>
              <div>
                <h3 className="font-medium text-lg">
                  Share your referral Code
                </h3>
                <p className="text-sm text-gray-200">
                  Invite your friend to join using your unique referral code
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <i className="fi fi-rr-user flex items-center justify-center text-black"></i>
              </div>
              <div>
                <h3 className="font-medium text-lg">
                  Friend completes registration
                </h3>
                <p className="text-sm text-gray-200">
                  Your friend signs up and completes their profile
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <i className="fi fi-rr-usd-circle flex items-center justify-center text-black"></i>
              </div>
              <div>
                <h3 className="font-medium text-lg">Earn rewards</h3>
                <p className="text-sm text-gray-200">
                  Get ₹2000 when your friend makes their first payment
                </p>
              </div>
            </div>
          </div>
        </div>
        <form
          action=""
          className="mt-3 w-full flex flex-col gap-3 px-5 sm:px-8"
          onSubmit={(e) => {
            e.preventDefault();
            props.setOpen();
            props.setSuccess();
          }}
        >
          <div className="w-full">
            <label htmlFor="name" className="text-sm pb-2">
              Full name *
            </label>
            <input
              type="text"
              id="name"
              className="w-full h-10 border-gray-300 border rounded-lg text-sm pl-4 hover:border-[#2160ad] outline-[#2160ad]"
              placeholder="eg., John, joe"
              required
            />
            <p className="text-xs text-gray-300">Enter your friend's name</p>
          </div>
          <div className="w-full">
            <label htmlFor="email" className="text-sm">
              Email *
            </label>
            <input
              type="email"
              id="email"
              className="w-full h-10 border-gray-300 border rounded-lg text-sm pl-4 hover:border-[#2160ad] outline-[#2160ad]"
              placeholder="eg., today@imhappy.com"
              required
            />
            <p className="text-xs text-gray-300">Enter your friend's email</p>
          </div>
          <div className="w-full">
            <label htmlFor="phone" className="text-sm">
              Phone *
            </label>
            <input
              type="text"
              id="phone"
              className="w-full h-10 border-gray-300 border rounded-lg text-sm pl-4 hover:border-[#2160ad] outline-[#2160ad]"
              placeholder="eg., +91 1234567890"
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="Message"
              className="w-full h-10 border-gray-300 border rounded-lg text-sm pl-4 pt-2 hover:border-[#2160ad] outline-[#2160ad]"
              placeholder="eg., Hey!!"
              rows={3}
            />
          </div>
          <div className="flex gap-2 sm:gap-3 text-sm sm:text-base">
            <button
              className="w-1/4 bg-white border border-gray-300 py-2 rounded-lg mt-5 cursor-pointer hover:bg-gray-100 transition-all hover:-translate-y-0.5"
              onClick={props.setOpen}
            >
              Close
            </button>
            <button
              className="w-full bg-[#2587c8] text-white  py-2 rounded-lg mt-5 cursor-pointer hover:-translate-y-0.5 transition-all"
              type="submit"
            >
              Refer Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReferForm;
