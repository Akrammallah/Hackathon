import Image from "next/image";
import img from '@/Images/PayPal.png'
import img1 from '@/Images/Visa.png'
import img2 from '@/Images/Bitcoin.png'
const PaymentMethod: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Payment Method</h2>
      <p className="text-sm text-gray-600">Please enter your payment method</p>
      <div className="space-y-4">
        <label className="flex items-center space-x-3">
          <input type="radio" name="payment" className="text-blue-500" />
          <span className="flex justify-between gap-x-72 items-center font-semibold">Credit Card <p><Image src={img1} alt="img" width={100} height={100}/></p></span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" placeholder="Card Number" className="input-field" />
          <input type="text" placeholder="Expiration Date" className="input-field" />
          <input type="text" placeholder="Card Holder" className="input-field" />
          <input type="text" placeholder="CVC" className="input-field" />
        </div>
        
      </div>
      <div className="mt-12">
      <label className="flex items-center space-x-3 mt-12">
          <input type="radio" name="payment" className="text-blue-500" />
          <span className="flex justify-between sm:gap-x-96 gap-x-72 items-center font-semibold">BitCoin <p><Image src={img2} alt="img" width={100} height={100}/></p></span>
        </label>
        <br />
        <label className="flex items-center space-x-3 mt-4">
          <input type="radio" name="payment" className="text-blue-500" />
          <span className="flex justify-between sm:gap-x-96 gap-x-72 font-semibold items-center">PayPal <p><Image src={img} alt="img" width={100} height={100}/></p></span>
        </label>
        </div>
    </div>
  );
};

export default PaymentMethod;