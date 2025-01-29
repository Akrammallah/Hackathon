'use client'
import { ToastContainer, toast, Bounce } from 'react-toastify';
const Confirmation: React.FC = () => {

  const handleOrder = () => {
    toast('Order succesfully submitted', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
   
  }
  return (
    <>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    
    />
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Confirmation</h2>
      <p className="text-sm text-gray-600">
        We are getting to the end. Just a few clicks and your rental is ready!
      </p>
      <div className="space-y-2">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="text-blue-500" />
          <span>I agree with sending marketing emails. No spam, promised!</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="text-blue-500" />
          <span>I agree with the terms and conditions.</span>
        </label>
      </div>
      <button onClick={()=>handleOrder()} className="w-full bg-blue-500 text-white py-2 rounded-lg">
        Rent Now
      </button>
    </div>
    </>
  );
};

export default Confirmation;
