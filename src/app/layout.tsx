
import "./globals.css";
import Navbar from "@/app/componants/Navbar";
import Footer from "./componants/Footer";
// import FooterSec from "./componants/Last";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        
        <div className="h-[50vh]">
  <Footer/>
  
</div>

        </body>
    </html>
  );
}
