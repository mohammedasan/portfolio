import { CircleUser } from "lucide-react";
const NavBar=({appName}) =>{
    return(
        <>
            <div className="w-full h-[4.5rem] flex items-center text-black bg-gray-950 ">
                <div className="flex w-[80%] px-4">
                   <h2 className="text-2xl text-white">Mohammed Asan</h2>
                   </div>
                   <ul className="flex flex-row gap-9 justify-center items-center px-10">
                        <li className="text-slate-50 border border-transparent hover:bg-green-500 px-2 py-2 rounded">Home</li>
                        <li className="text-slate-50 border border-transparent hover:bg-green-500 px-2 py-2 rounded">about</li>
                        <li className="text-slate-50 border border-transparent hover:bg-green-500 px-2 py-2 rounded">Project</li>
                        <li className="text-slate-50 border border-transparent hover:bg-green-500 px-2 py-2 rounded">contact</li>
                        <CircleUser size={40} color="white"/>
                    </ul>
            </div>
        </>
    )
}
export default NavBar;