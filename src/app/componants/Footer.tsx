


import Link from "next/link";
import React from "react";




const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-900 py-8 mt-24">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-0 md:gap-8  px-4 ">
        {/* Exclusive */}
        <div className="ml-2">
          <h3 className="font-bold text-4xl lg:text-xl mb-4 text-blue-700 p-2">MORENT</h3>
          
          <p className="mb-4 text-lg ">Our vision is to provide convenience <br /> and help increase your sales business</p>
          
        </div>

        {/* Support */}
        {/* <div>
          <h3 className="font-bold text-lg mb-4">Support</h3>
          <p>11 Bijoy Sarani, Dhaka,</p>
          <p>DH 1215, Bangladesh</p>
          <p>Email: exclusive@gm.com</p>
          <p>Phone: +88015 66666 9999</p>
        </div> */}

        {/* Account */}
        <div className="md:ml-48 sm:ml-12 ml-4 sm:mb-6 text-2xl md:text-lg">
          <h3 className="font-bold   mb-4 text-4xl lg:text-2xl ">Account</h3>
          <ul>
            <li className="mb-2 hover:underline cursor-pointer ">My Account</li>
            <li className="mb-2 hover:underline cursor-pointer">Login/Register</li>
            <li className="mb-2 hover:underline cursor-pointer">Cart</li>
            <li className="mb-2 hover:underline cursor-pointer">Wishlist</li>
            <li className="hover:underline cursor-pointer">Shop</li>
          </ul>
        </div>

        {/* Quick Link */}
        <div className="md:ml-24 text-2xl ml-4 md:text-lg">
          <h3 className="font-bold  mb-4 text-4xl md:text-2xl ">Quick Link</h3>
          <ul>
            <li className="mb-2 hover:underline cursor-pointer">Privacy Policy</li>
            <li className="mb-2 hover:underline cursor-pointer">Terms of Use</li>
            <li className="mb-2 hover:underline cursor-pointer">FAQ</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Download App */}
        <div className="text-2xl ml-2 md:text-lg">
          <h3 className="font-bold  mb-4 text-4xl md:text-2xl">Download App</h3>
          <p className="mb-4">Save $3 with App New User Only</p>
          
          <div className="flex gap-4 mt-4">
            <Link href="#" className="hover:text-blue-500">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link href="#" className="hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="#" className="hover:text-pink-500">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="#" className="hover:text-blue-300">
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
