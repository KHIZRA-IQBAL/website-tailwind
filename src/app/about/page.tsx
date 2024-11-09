import Image from "next/image"
export default function About(){
    return(
        <div>
            <h1 className="text-white text-center mt-10 text-5xl mb-10">OUR COLLECTION</h1>
            <div className="grid grid-cols-4 grid-rows-2 border h-[700px] w-[100] gap-10 p-4 text-white">
                <div className="border w-[300px] h-[300px] pl-10" ><Image src="/card1.png" alt="men picture" width={200} height={150} /></div>
                <div className="border w-[300px] h-[300px] pl-10"><Image src="/card2.png" alt="men's picture"  width={200} height={150}/></div>
                <div className="border w-[300px] h-[300px] pl-10"><Image src="/card3.png" alt="men's picture" width={200} height={150}/></div>
                <div className="border w-[300px] h-[300px] pl-10"><Image src="/card4.png" alt="men's picture"width={200} height={150} /></div>
                <div className="border w-[300px] h-[300px] pl-10"><Image src="/card5.png" alt="men's picture" width={200} height={150}/></div>
                <div className="border w-[300px] h-[300px] pl-10"><Image src="/card6.png" alt="men's picture"width={200} height={150} /></div>
                <div className="border w-[300px] h-[300px] pl-10"><Image src="/card7.png" alt="men's picture"width={200} height={150} /></div>
                <div className="border w-[300px] h-[300px] pl-10"><Image src="/card8.png" alt="men's picture"width={200} height={150} /></div>
            </div>
        </div>
    )
}