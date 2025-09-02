import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sabin Nayaju",
  description: "",

 
  
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
  
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black pt-[130.8px]  selection:bg-white selection:rounded-md selection:p-4 selection:text-black italic `}
    >
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7853115776583128"
     crossOrigin="anonymous"></script>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>


    

       <Navbar/>
        {children}
   
      </body>
    </html>
  );
}
