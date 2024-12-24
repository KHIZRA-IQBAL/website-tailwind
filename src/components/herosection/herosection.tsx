import Link from "next/link";
import Image from "next/image";

export default function Hero(){
   // hero component
    return(
        <div className="flex 
         bg-orange-600  h-[600px] w-[100%] ">
            <div className="w-[40%]">
                <h1 className="text-6xl text-white pt-24 ml-8">
                From Casual <br />
                to Classic</h1>
                <p className="text-1xl text-white pt-24 ml-8">
                Your style speaks before you do. Discover our curated collection of mens fashion that blends comfort, durability, and cutting-edge trends. From timeless classics to bold, modern pieces, every item is designed to make you feel confident and look your best. Its time to step up your game with outfits that match your ambition and personality.
                </p>
                <Link href={"/about"}><button className="text-1xl text-white mt-24 ml-8 border w-32 h-12">EXPLORE MORE</button></Link>
            </div>
            <div className=" h-[445px]  xsm:h-[554px] md:h-[445px] w-[60%] 
             mt-20 xsm:mt-[500px] md:mt-20 ">
                <Image src="/seasons-campaignbanner-img-men-dt-data-removebg-preview.png" alt="Men's picture" width={800} height={900} />
            </div>
        
        </div>


    )
}