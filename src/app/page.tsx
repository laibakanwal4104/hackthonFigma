

import Ceramics from "@/components/ceremics";
import Features from "@/components/features";
import Features2 from "@/components/features2";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Popular from "@/components/popular";
import SignUp from "@/components/signUp";

export default function navbar(){
  return(
    <div className="w-[1440px] h-[4160px]">
    <Navbar/>
     <Hero/>
   <Features/>
   <Ceramics/> 
    <Popular/>
    <SignUp/>
    <Features2/>
    <Footer/> 
    </div>
  )
}
