import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import referralAnimation from "../../assets/Lottie/refer.json";

interface Referrer {
  id: number;
  name: string;
  referrals: number;
}

const referrers: Referrer[] = [
  { id: 1, name: "Sarah Johnson", referrals: 12 },
  { id: 2, name: "Michael Chen", referrals: 8 },
  { id: 3, name: "Jhon Cena", referrals: 2 },
  { id: 4, name: "Shane McMahon", referrals: 1 },
  { id: 5, name: "Travis Scout", referrals: 10 },
];

function TopReferrals(props: { setOpen: () => void}) {
  const [showHoverInfo, setShowHoverInfo] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div
        className="bg-white px-6 rounded-lg w-full shadow py-5 relative"
        onMouseEnter={() => setShowHoverInfo(true)}
        onMouseLeave={() => setShowHoverInfo(false)}
      >
        <AnimatePresence>
          {showHoverInfo && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ delay: 0.5 }}
              className="absolute bg-white rounded-xl shadow-xl border border-gray-100 p-6 z-50 w-80 right-full top-0"
              ref={popupRef}
            >
              <div>
                <Lottie animationData={referralAnimation} loop={true} />
              </div>
              <div className="px-4">
                <h1 className="text-xl font-semibold mb-2">
                  Refer a friend and get ₹ 1000 refer bonus.
                </h1>
                <p>Here's how it works</p>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    Share your unique referral code with friends and family.
                  </li>
                  <li>
                    Your friend enters the referral code while signing up.
                  </li>
                  <li>
                    They must purchase any course using your referral code.
                  </li>
                  <li>
                    Once the purchase is successful, both you and your friend
                    receive ₹1000 bonus.
                  </li>
                  <li>
                    The bonus can be used as a discount on future course
                    purchases.
                  </li>
                </ul>
                <button
                  className="bg-[#2587c8] w-full mt-4 text-white flex items-center justify-center gap-3 px-3 py-2 rounded-lg text-base cursor-pointer hover:-translate-y-0.5 transition-all"
                  onClick={() => {
                    props.setOpen();
                    setShowHoverInfo(false);
                  }}
                >
                  <i className="fi fi-rr-gift flex items-center justify-center"></i>
                  <span>Refer and Earn</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <h3 className="text-2xl font-semibold mb-1">Top Referrers</h3>
        <p className="text-sm mb-4">Top referrals made by others.</p>
        <div className="space-y-2 w-full">
          {referrers.map((referrer) => (
            <div
              key={referrer.id}
              className="flex items-center gap-3 border border-gray-200 py-3 px-4 rounded-full bg-gray-50"
            >
              <div className="bg-white w-12 h-10 rounded-full flex items-center justify-center">
                <span className="text-sm w-fit font-medium">
                  {referrer.name.slice(0, 1)}
                </span>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="text-sm">{referrer.name}</p>
                <p className="text-sm text-gray-500">
                  {referrer.referrals} referrals
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TopReferrals;
