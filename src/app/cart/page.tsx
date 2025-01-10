"use client"
import { useState } from 'react'
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function cart() {
    const [count, setCount] = useState(1);

    return (
        <div>
            <div className="w-[1440px] h-[1261px]">
                <Navbar />
                <div className="w-[1440px] h-[749px] text-[#494565] bg-[#F1F1F1]">
                    <h1 className="w-[328px] h-[50px] mx-[188px] py-14 font-mono font-extralight text-2xl">
                        Your shopping cart
                    </h1>
                    <div className="flex gap-x-80">
                        <h6 className="mx-[188px]">Products</h6>
                        <h6 className="mx-[5px]">Quantity</h6>
                        <h6>Total</h6>
                    </div>
                    <div className="mx-[304px] my-[10px] w-[1064px]">
                        <hr />
                    </div>
                    <div className="w=[309px] my-[10px] flex items-center justify-between  h-[139px]">
                        <div className="mx-[188px] flex space-x-5">
                            <Image
                                src={"/assests/Product Image.png"}
                                alt="marble pot"
                                width={109}
                                height={134}
                            />
                            <div className="w-[179px] h-[110px] px-3">
                                <h1 className="text-xl h-[28px]">Graystone vase</h1>
                                <p className="h-[42px] my-[6px]">
                                    A timeless ceramic vase with a tri color grey glaze.
                                </p>
                                <h4 className="h-[24px] my-[30px]">£85</h4>
                            </div>
                        </div>
                        <div className="w-[138px]  h-[46px] flex items-center justify-center">
                            <div className="flex items-center space-x-4">
                                <button onClick={() => setCount(count - 1)}>-</button>
                                <p>{count}</p>
                                <button onClick={() => setCount(count + 1)}>+</button>
                            </div>
                        </div>
                        <div className="mx-[280px]">
                            <h6>£85</h6>
                        </div>
                    </div>
                    <br />
                    
                    <div className="w=[309px] my-[10px] flex items-center justify-between  h-[139px]">
                        <div className="mx-[188px] flex space-x-5">
                            <Image
                                src={"/assests/Product Image 2.png"}
                                alt="marble pot"
                                width={109}
                                height={134}
                            />
                            <div className="w-[179px] h-[110px] px-3">
                                <h1 className="text-xl h-[28px]">Basic white vase</h1>
                                <p className="h-[42px] my-[6px]">
                                Beautiful and simple this is
                                one for the classics
                                </p>
                                <h4 className="h-[24px] my-[30px]">£85</h4>
                            </div>
                        </div>
                        <div className="w-[138px]  h-[46px] flex items-center justify-center">
                            <div className="flex items-center space-x-4">
                                <button onClick={() => setCount(count - 1)}>-</button>
                                <p>{count}</p>
                                <button onClick={() => setCount(count + 1)}>+</button>
                            </div>
                        </div>
                        <div className="mx-[280px]">
                            <h6>£85</h6>
                        </div>
                    </div>
                    <div className="mx-[304px] my-[10px] w-[1064px]">
                        <hr />
                    </div>
                    <div className="w-[282px] h-[67px] mx-[1090px] my-[35px] ">
                        <div className="w-[150px] h-[34px] mx-[130px] ">

                            <div className="gap-x-8 font-mono text-xl "> Subtotal
                                £210</div>

                        </div>
                        <h6>Taxes and shipping are calculated at...</h6>
                    </div>
                    <div className="w-[172px] h-[56px] mx-[1190px] text-white bg-[#2a254b]">
                <button className="w-[108px] pt-4 mx-[28px] h-[24px]"> Go to checkout</button>
               </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
