import { useEffect } from "react";
import { toast } from "sonner";

function SuccessModal(props: { success: boolean; setSuccess: () => void }) {
  const copyReferralCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard.");
  };

  useEffect(() => {
    if (props.success) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [props.success]);
  return (
    <div>
      {props.success && (
        <div className="fixed w-full h-screen top-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div
          className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <i className="fi fi-rr-badge-check text-green-500 text-xl flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Referral Code Generated!
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Share this code with your friend to earn rewards when they join.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-dashed border-gray-400">
                <p className="text-lg font-mono font-semibold text-gray-900">
                  REF3054
                </p>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => copyReferralCode("REF3054")}
                  className="flex-1 px-4 py-2 bg-[#2587c8] text-white rounded-lg hover:-translate-y-0.5 transition flex items-center justify-center gap-3 cursor-pointer text-sm sm:text-base"
                >
                  <i className="fi fi-rr-copy-alt flex items-center justify-center"></i>
                  Copy Code
                </button>
                <button className="flex-1 px-4 py-2 bg-[#2587c8] text-white rounded-lg hover:-translate-y-0.5 transition flex items-center justify-center gap-3 cursor-pointer text-sm sm:text-base">
                  <i className="fi fi-rr-share flex items-center justify-center"></i>
                  Share
                </button>
              </div>
              <button
                onClick={props.setSuccess}
                className="w-full mt-4 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 cursor-pointer transition text-sm sm:text-base"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SuccessModal;
