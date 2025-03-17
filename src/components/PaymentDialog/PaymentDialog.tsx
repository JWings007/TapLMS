import { useEffect, useRef } from "react";
import upi from "../../assets/images/upi.svg";
import visa from "../../assets/images/visa.svg";

function PaymentDialog(props: {
  setShowPaymentModal: () => void;
  showPaymentModal: boolean;
}) {
  const closeRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (props.showPaymentModal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [props.showPaymentModal]);

  const handleClose = (e: React.MouseEvent) => {
    if (closeRef.current && !closeRef.current.contains(e.target as Node))
     props.setShowPaymentModal()
  };
  return (
    <>
      {props.showPaymentModal && (
        <div
          className="fixed top-0 w-full h-screen bg-black/50 bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={handleClose}
        >
          <div
            className="bg-white rounded-xl max-w-md w-full p-6"
            ref={closeRef}
          >
            <h3 className="text-xl font-semibold">Make Payment</h3>
            <p className="mb-3 text-sm">
              Select one of the payment methods to proceed
            </p>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Amount Due</p>
                <p className="text-2xl font-bold text-gray-900">₹ 28,999</p>
              </div>
              <div className="space-y-2">
                <button className="relative w-full py-3 bg-[#2587c8] text-white rounded-lg cursor-pointer hover:-translate-y-0.5 transition flex items-center justify-center gap-5">
                  <i className="fi fi-rr-credit-card flex items-center"></i>
                  <span>Pay with Card</span>
                  <span className="absolute right-5">
                    <img src={visa} alt="" />
                  </span>
                </button>
                <button className="relative w-full py-3 bg-orange-300 text-white rounded-lg hover:-translate-y-0.5 cursor-pointer transition flex items-center justify-center gap-5">
                  <i className="fi fi-rr-indian-rupee-sign flex items-center justify-center"></i>
                  <span>Pay with UPI</span>
                  <span className="absolute right-7">
                    <img src={upi} alt="" className="w-8" />
                  </span>
                </button>
              </div>
              <button
                onClick={props.setShowPaymentModal}
                className="w-full py-2 bg-white border border-gray-300 rounded-lg hover:text-gray-900 transition hover:bg-gray-100 cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PaymentDialog;
