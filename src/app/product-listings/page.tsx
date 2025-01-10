


import Ceramics from "@/components/ceremics";
import Product from "./components/product";
import Features from "@/components/features";

import SignUp from "@/components/signUp";
import Footer from "@/components/footer";
import Header from "./components/header";

export default function product(){
    return(
<div className="w-[1440px] h[2970px]">
    <div className="w-[1440px] h-[41px] bg-[#2a254b]">
    <div className="w-[407px] h-[19px] text-white pt-2 text-sm justify-center mx-[516px] ">
        
    Free delivery on all orders over £50 with code easter checkout
    </div>
   
    </div>
    
   <Header/>
    <Product/>
    <Ceramics/>
  <Features/>
    <SignUp/>
  <Footer/>
 
</div>
    );
}