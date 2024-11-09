import Link from "next/link"

export default function Navbar(){
    return(
    <div className="w-screen h-[100px] bg-slate-400 flex gap-32 justify-around">
        <h1 className="text-gray-200 text-[60px]">Fashion.</h1>
        <ul className="flex items-center gap-[65px] text-gray-200 text-[30px]">
            <Link href={"/"}> <li>Home</li></Link>
             <Link href={"/about"}><li>About</li></Link>
             <Link href={"/contact"}><li>Contact</li></Link>
        </ul>
        <button className="text-[35px] text-slate-600 ">LOGIN</button>
        </div>
    )
}