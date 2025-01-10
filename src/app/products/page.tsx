
import Navbar from "./component/navbar";
import Allproducts from "./component/allproducts";
import Filters from "./component/filters";
import Listings from "./component/listings";
import Listings2 from "./component/listings2";
import Listings3 from "./component/Listings3";
import Footer from "@/components/footer";





export default function Products (){
    return (
        <div className="w-[1440px] h-[2439px]">
        <Navbar/>
        <Allproducts/>
        <Filters/>
        <Listings/>
        <Listings2/>
        <Listings3/>
        <Footer/>
    </div>
    )
}