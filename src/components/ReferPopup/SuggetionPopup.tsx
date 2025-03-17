function SuggetionPopup(props: {
  showSuggetion: boolean;
  setShowSuggetion: () => void;
  setReferralModal: () => void;
}) {
  return (
    <>
        <div className={`bg-white rounded-xl ${ props.showSuggetion ? 'translate-x-0' :' translate-x-[130%]'} max-w-3/4 sm:max-w-md w-full p-6 animate-fade-in fixed z-50 bottom-5 right-5 shadow-lg transition-all duration-500`}>
          <button
            onClick={props.setShowSuggetion}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition cursor-pointer"
          >
            <i className="fi fi-rr-cross-small flex items-center justify-center text-xl"></i>
          </button>

          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full">
              <img src="/assets/Images/coin.gif" alt="" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Refer & Earn ₹2000!
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Invite your friends to join and earn rewards for each successful
              referral. It's that simple!
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-left">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="fi fi-rr-users flex items-center justify-center"></i>
                </div>
                <p className="text-sm text-gray-600">
                  Invite your friends using your unique referral code
                </p>
              </div>
              <div className="flex items-center space-x-3 text-left">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="fi fi-rr-link flex items-center justify-center"></i>
                </div>
                <p className="text-sm text-gray-600">
                  Share your referral link via WhatsApp, Email, or SMS
                </p>
              </div>
              <div className="flex items-center space-x-3 text-left">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <i className="fi fi-rr-indian-rupee-sign flex items-center justify-center"></i>
                </div>
                <p className="text-sm text-gray-600">
                  Earn ₹2000 when your friend makes their first payment
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                props.setShowSuggetion();
                props.setReferralModal();
              }}
              className="mt-8 w-full py-3 px-4 bg-[#2587c8] text-white rounded-lg hover:from-indigo-700 hover:-translate-y-0.5 transition flex items-center justify-center cursor-pointer gap-5 text-sm sm:text-base"
            >
              <i className="fi fi-rr-users flex items-center justify-center"></i>
              Start Referring Now
            </button>
          </div>
        </div>
    </>
  );
}

export default SuggetionPopup;
