import { Link } from "react-router-dom";
import NavBarDrawer from "./NavBarDrawer";
import { useEffect, useState } from "react";



const NavBar = () => {
    const [bg, setBg] = useState(false)
    const navLinks = <>
        <a href="#why-us"><li className={`${bg ? 'hover:text-[#FAAF40]' : 'hover:underline'}`}>Why us?</li></a>
        <a href="#how-it-works"><li className={`${bg ? 'hover:text-[#FAAF40]' : 'hover:underline'}`}>How it works</li></a>
        <a href="#about-us"><li className={`${bg ? 'hover:text-[#FAAF40]' : 'hover:underline'}`}>About us</li></a>
        <a href="#blog"><li className="hover:text-[#FAAF40] text-black">Blog</li></a>
    </>

    useEffect(() =>{
        window.onscroll = () => {
            console.log(window.pageYOffset);
            if(window.pageYOffset > 200){
                setBg(true)
            }
            else{
                setBg(false)
            }
        }
    },[])
    return (
        <div
        className={`py-5 z-20  fixed w-screen ${bg ? 'bg-[#FFF] shadow-xl' : 'text-white'}`}>
            <nav className="flex items-center justify-between px-5 md:px-8 lg:px-0 lg:w-[calc(100%-150px)] mx-auto">
                {/* logo */}
                <div className="text-xl font-bold lg:w-4/5">LOGO</div>
                {/* links for large devices*/}
                <div className="hidden lg:flex justify-between w-full">
                    <ul className="flex gap-10 text-lg items-center">
                        {navLinks}
                    </ul>
                    <div className="text-lg">
                        {/* sign up btn */}
                        <Link>
                            <button className="text-[#F16633]/85 font-semibold">Sign up</button>
                        </Link>

                        {/* log in btn */}
                        {/* linear-gradient(222.07deg, #FAAF40 -3.74%, #F16633 99.62%) */}
                        <Link>
                            <button className="border-2 rounded-lg font-bold ml-5 text-[#FAAF40] hover:text-white border-[#FAAF40] px-10 py-2
                        hover:bg-gradient-to-r from-[#F16633] to-[#FAAF40]">Log in</button>
                        </Link>
                    </div>
                </div>
                {/* drawer for small and medium devices */}
                <div className="lg:hidden">
                    <NavBarDrawer></NavBarDrawer>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;