'use client'
import "./globals.css";
import Navbar from "@/app/componants/Navbar";
import Footer from "./componants/Footer";
import { Provider } from "react-redux";
import { store } from "../redux/store";
// import FooterSec from "./componants/Last";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
        <Navbar/>
        {children}
        
        <div className="h-[50vh]">
  <Footer/>
  
</div>
</Provider>
        </body>
    </html>
  );
}
