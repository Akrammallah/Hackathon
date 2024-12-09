

import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "@/Images/google.png"
import img2 from "@/Images/AppStore.png"



const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-900 py-8 mt-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {/* Exclusive */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-blue-600">MORENT</h3>
          
          <p className="mb-4">Our vision is to provide convenience <br /> and help increase your sales business</p>
          <form className="flex">
            <input 
              type="email"
              placeholder="Enter your email"
              className="p-2 flex-1 rounded-l-md text-black w-24"
            />
            <button
              type="submit"
              className="bg-blue-600 p-1 rounded-r-md hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
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
        <div className="sm:ml-48">
          <h3 className="font-bold text-lg mb-4">Account</h3>
          <ul>
            <li className="mb-2 hover:underline cursor-pointer">My Account</li>
            <li className="mb-2 hover:underline cursor-pointer">Login/Register</li>
            <li className="mb-2 hover:underline cursor-pointer">Cart</li>
            <li className="mb-2 hover:underline cursor-pointer">Wishlist</li>
            <li className="hover:underline cursor-pointer">Shop</li>
          </ul>
        </div>

        {/* Quick Link */}
        <div className="sm:ml-24">
          <h3 className="font-bold text-lg mb-4 ">Quick Link</h3>
          <ul>
            <li className="mb-2 hover:underline cursor-pointer">Privacy Policy</li>
            <li className="mb-2 hover:underline cursor-pointer">Terms of Use</li>
            <li className="mb-2 hover:underline cursor-pointer">FAQ</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="font-bold text-lg mb-4">Download App</h3>
          <p className="mb-4">Save $3 with App New User Only</p>
          <div className="flex items-center gap-4">
            <Image
              src={img}
              alt="Google Play"
              width={50}
              className="h-50 cursor-pointer hidden sm:block"
            />
            <Image
              src={img2}
              alt="App Store"
              
              className="h-10 cursor-pointer "
            />
          </div>
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
