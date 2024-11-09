import React from "react";
export default function Contact(){
    return(
        <div className="h-[37.5rem] w-[100] flex">
            <div className="w-[50%] border pt-40 text-center justify-center ">  
                <h1 className="text-6xl text-white   pb-4">WE ARE HERE</h1>
                <p className="text-white">OUR brand is always open for a good outfitters</p>
            </div>
            <div className="w-[50%] border bg-slate-800 text-center pt-40">
                <h1 className="text-6xl font-bold p3-4">Lets talk</h1>
                <p className="pb-5  text-[20px]">share your excitment with us</p>
                 <div className="flex justify-center"><p className="text-[1.0625rem] font-semibold">info@ABZaaT@gmail.com </p><span className="mt-2 text-[17px]"></span></div>
                <div className="flex justify-center">
                   <span className="mt-2 text-[18px]"></span> <h1 className="text-[20px]">Contact Us: </h1>
                    <p className="mt-1"> 03-0013729648</p>
                </div>
            </div>
        </div>
    )
}