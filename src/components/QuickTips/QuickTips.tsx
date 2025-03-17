function QuickTips() {
  return (
    <div className="space-y-3 shadow p-5 rounded-lg bg-white">
      <h1 className="text-2xl font-semibold mb-1">Know how Referral work</h1>
      <p className="text-sm mb-4">Follow below steps to earn referral bonus.</p>
      <div className="flex items-start space-x-4 bg-gray-50 p-4 rounded-xl border border-gray-200">
        <div className="p-2 bg-indigo-100 rounded-full">
          <i className="fi fi-rr-link-alt flex items-center justify-center"></i>
        </div>
        <div>
          <h3 className="font-medium text-gray-900">
            Share your referral Code
          </h3>
          <p className="text-sm text-gray-500">
            Invite your friend to join using your unique referral code
          </p>
        </div>
      </div>

      <div className="flex items-start space-x-4 bg-gray-50 p-4 rounded-xl border border-gray-200">
        <div className="p-2 bg-purple-100 rounded-full">
          <i className="fi fi-rr-user flex items-center justify-center"></i>
        </div>
        <div>
          <h3 className="font-medium text-gray-900">
            Friend completes registration
          </h3>
          <p className="text-sm text-gray-500">
            Your friend signs up and completes their profile
          </p>
        </div>
      </div>

      <div className="flex items-start space-x-4 bg-gray-50 p-4 rounded-xl border border-gray-200">
        <div className="p-2 bg-green-100 rounded-full">
          <i className="fi fi-rr-usd-circle flex items-center justify-center"></i>
        </div>
        <div>
          <h3 className="font-medium text-gray-900">Earn rewards</h3>
          <p className="text-sm text-gray-500">
            Get ₹2000 when your friend makes their first payment
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuickTips;
