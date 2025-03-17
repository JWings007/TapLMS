import { useEffect, useRef } from "react";

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

  return (
    <>
      {props.open && (
        <div
          className="fixed top-0 right-0 z-50 w-full h-screen bg-black/60 flex items-center justify-center px-3"
          onClick={handleClose}
        >
          <div
            className={`bg-white flex ${
              props.open ? "scale-100" : "scale-0"
            } rounded-2xl overflow-hidden w-full sm:w-1/2 items-center flex-col lg:flex-row transition-all`}
            ref={formRef}
          >
            <div className="px-5 sm:px-10 flex flex-col justify-between bg-gradient-to-r from-[#2587c8] to-[#30acff] text-white py-4 sm:py-8 sm:gap-8">
              <div className="flex items-center">
                <div className="flex flex-col gap-4">
                  <div>
                    <p>Refer your Friends</p>
                    <h1 className="text-2xl font-medium mb-3 sm:text-4xl">
                      Earn Upto ₹ 1000
                    </h1>
                  </div>
                </div>
                <div className="w-24 sm:w-48">
                  <img src="/assets/Images/coin.gif" alt="" />
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-indigo-100 rounded-full">
                    <i className="fi fi-rr-link-alt flex items-center justify-center text-black"></i>
                  </div>
                  <div>
                    <h3 className="font-medium">
                      Share your referral Code
                    </h3>
                    <p className="text-sm text-gray-100">
                      Invite your friend to join using your unique referral code
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-purple-100 rounded-full">
                    <i className="fi fi-rr-user flex items-center justify-center text-black"></i>
                  </div>
                  <div>
                    <h3 className="font-medium">
                      Friend completes registration
                    </h3>
                    <p className="text-sm text-gray-100">
                      Your friend signs up and completes their profile
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-green-100 rounded-full">
                    <i className="fi fi-rr-usd-circle flex items-center justify-center text-black"></i>
                  </div>
                  <div>
                    <h3 className="font-medium">Earn rewards</h3>
                    <p className="text-sm text-gray-100">
                      Get ₹2000 when your friend makes their first payment
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <form
              action=""
              className="mt-3 w-full flex flex-col gap-3 px-5 sm:px-8 sm:py-0 py-4"
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
                  className="w-full h-10 border-gray-300 border rounded-lg text-sm pl-4 hover:border-[#2160ad] outline-[]"
                  placeholder="eg., John, joe"
                  required
                />
                <p className="text-xs text-gray-300">
                  Enter your friend's name
                </p>
              </div>
              <div className="w-full">
                <label htmlFor="email" className="text-sm">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full h-10 border-gray-300 border rounded-lg text-sm pl-4 hover:border-[#2160ad] outline-[]"
                  placeholder="eg., today@imhappy.com"
                  required
                />
                <p className="text-xs text-gray-300">
                  Enter your friend's email
                </p>
              </div>
              <div className="w-full">
                <label htmlFor="phone" className="text-sm">
                  Phone *
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full h-10 border-gray-300 border rounded-lg text-sm pl-4 hover:border-[#2160ad] outline-[]"
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
                  className="w-full h-10 border-gray-300 border rounded-lg text-sm pl-4 pt-2 hover:border-[#2160ad] outline-[]"
                  placeholder="eg., Hey!!"
                  rows={3}
                />
              </div>
              <div className="flex gap-2 sm:gap-3 text-sm sm:text-base">
                <button
                  className="w-1/4 bg-white border border-gray-300 py-2 rounded-lg mt-5 cursor-pointer hover:bg-gray-100 transition-all hover:-translate-y-0.5"
                  onClick={(e) => {
                    e.preventDefault();
                    props.setOpen();
                  }}
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
      )}
    </>
  );
}

export default ReferForm;
