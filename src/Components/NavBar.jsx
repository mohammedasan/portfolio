// import {Link} from 'react-scroll';
// const NavBar=({appName}) =>{
//     return(
//         <>
//             <div className="w-screen h-[3.5rem] flex flex-col bg-slate-900">
//                 <div className="w-full h-full flex justify-between items-center px-4">
//                     <h1 className="text-green-50 md:text-2xl sm:text-xl flex justify-start items-center">PORTFOLIO</h1>
//                     <ul className="text-white flex justify-end items-center gap-5">
//                         <li className="hover:bg-green-900 rounded md:px-2 sm:px-1"><a href="#home" className="hover:text-yellow-500">Home</a></li>
//                         <li className="hover:bg-green-900 rounded md:px-2 sm:px-1"><a href="#project" className="hover:text-yellow-500">Projects</a></li>
//                         <li className="hover:bg-green-900 rounded md:px-2 sm:px-1"><a href="#skill" className="hover:text-yellow-500">Skills</a></li>
//                         <li className="hover:bg-green-900 rounded md:px-2 sm:px-1"><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
//                     </ul>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default NavBar;
import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';

const NavBar = ({ appName }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`w-screen h-[3.5rem] flex flex-col fixed top-0 z-10 transition-all duration-300 ${isScrolled ? 'bg-slate-900' : 'bg-transparent'} z-40`}>
            <div className="w-full h-full flex justify-between items-center px-4">
                <h1 className="text-pink-500 md:text-2xl sm:text-xl flex justify-start items-center">
                    {appName || 'PORTFOLIO'}
                </h1>
                <ul className="text-pink-500 flex justify-end items-center gap-5">
                    <li className="hover:bg-green-900 rounded md:px-2 sm:px-1">
                        <Link to="home" smooth={true} duration={500} className="hover:text-yellow-500">Home</Link>
                    </li>
                    <li className="hover:bg-green-900 rounded md:px-2 sm:px-1">
                        <Link to="project" smooth={true} duration={500} className="hover:text-yellow-500">Projects</Link>
                    </li>
                    <li className="hover:bg-green-900 rounded md:px-2 sm:px-1">
                        <Link to="skill" smooth={true} duration={500} className="hover:text-yellow-500">Skills</Link>
                    </li>
                    <li className="hover:bg-green-900 rounded md:px-2 sm:px-1">
                        <Link to="contact" smooth={true} duration={500} className="hover:text-yellow-500">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
