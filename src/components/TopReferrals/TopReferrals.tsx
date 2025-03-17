import { useRef, useState } from "react";

interface Referrer {
  id: number;
  name: string;
  referrals: number;
}

const referrers: Referrer[] = [
  { id: 1, name: "Kim Taehyung", referrals: 12 },
  { id: 2, name: "Kim Seok Jin", referrals: 8 },
  { id: 3, name: "Min Yoongi", referrals: 2 },
  { id: 4, name: "Jeon Heoseok", referrals: 1 },
  { id: 5, name: "Park Jimin", referrals: 10 },
];

function TopReferrals(props: { setOpen: () => void }) {
  const [showHoverInfo, setShowHoverInfo] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div
        className="bg-white px-6 rounded-lg w-full shadow py-5 relative"
        onMouseEnter={() => setShowHoverInfo(true)}
        onMouseLeave={() => setShowHoverInfo(false)}
      >
        <div
          className={`absolute scale-0 ${
            showHoverInfo && "scale-100"
          } bg-white rounded-xl shadow-xl border border-gray-100 p-6 z-50 w-96 right-0 sm:right-full top-0 transition-all duration-400 delay-500 origin-right h-fit flex items-center justify-center gap-3 flex-col `}
          ref={popupRef}
        >
          <div>
            <h1 className="text-xl font-semibold mb-1">
              Refer a friend and get ₹ 1000 refer bonus.
            </h1>
            <p>Here's how it works</p>
          </div>
          <div className="flex items-center justify-between gap-8 flex-row-reverse bg-gray-50 px-4 py-4 rounded-2xl">
            <div className="bg-purple-200 rounded-full p-3">
              <i className="fi fi-rr-ticket flex items-center justify-center text-3xl text-purple-400"></i>
            </div>
            <div>
              <div className="bg-gray-200 w-8 flex items-center justify-center h-8 rounded-full mb-2">
                1
              </div>
              <h1 className="font-medium">Share your referral code.</h1>
              <p className="text-sm text-gray-500">
                Invite your friend to join using your unique referral code.
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-center justify-between gap-8 bg-gray-50 px-4 py-4 rounded-2xl">
            <div className="bg-yellow-200 rounded-full p-3">
              <i className="fi fi-rr-user flex items-center justify-center text-3xl text-yellow-400"></i>
            </div>
            <div>
              <div className="bg-gray-200 w-8 flex items-center justify-center h-8 rounded-full mb-2">
                2
              </div>
              <h1 className="font-medium">Friend completes registration.</h1>
              <p className="text-sm text-gray-500">
                Your friend signs up and completes their profile.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-8 flex-row-reverse bg-gray-50 px-4 py-4 rounded-2xl">
            <div className="bg-green-200 rounded-full p-3">
              <i className="fi fi-rr-coins flex items-center justify-center text-3xl text-green-400"></i>
            </div>
            <div>
              <div className="bg-gray-200 w-8 flex items-center justify-center h-8 rounded-full mb-2">
                3
              </div>
              <h1 className="font-medium">Earn rewards.</h1>
              <p className="text-sm text-gray-500">
                Get ₹2000 when your friend makes their first payment.
              </p>
            </div>
          </div>
          <button
            className="bg-[#2587c8] w-full mt-4 text-white flex items-center justify-center gap-3 px-3 py-2 rounded-lg text-base cursor-pointer hover:-translate-y-0.5 transition-all"
            onClick={() => {
              props.setOpen();
              setShowHoverInfo(false);
            }}
          >
            <i className="fi fi-rr-gift flex items-center justify-center"></i>
            <span>Refer Now and Earn</span>
          </button>
        </div>
        <h3 className="text-2xl font-semibold mb-1">Top Referrers</h3>
        <p className="text-sm mb-4">Top referrals made by others.</p>
        <div className="space-y-2 w-full">
          {referrers.map((referrer) => (
            <div
              key={referrer.id}
              className="flex items-center gap-3 border border-gray-200 py-3 px-4 rounded-full bg-gray-50 cursor-pointer"
            >
              <div className="bg-[#30acfb]/20 w-12 h-10 rounded-full flex items-center justify-center">
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

{
  /* <div className="w-full">
            <img src="/assets/Images/refer.gif" alt="" className="w-full"/>
          </div>
          <div className="px-4">
            <h1 className="text-xl font-semibold mb-2">
              Refer a friend and get ₹ 1000 refer bonus.
            </h1>
            <p>Here's how it works</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Share your unique referral code with friends and family.</li>
              <li>Your friend enters the referral code while signing up.</li>
              <li>They must purchase any course using your referral code.</li>
              <li>
                Once the purchase is successful, both you and your friend
                receive ₹1000 bonus.
              </li>
              <li>
                The bonus can be used as a discount on future course purchases.
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
          </div> */
}
