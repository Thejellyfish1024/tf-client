import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavBarDrawer = () => {
    const navLinks = <>
        <a href="#why-us"><li className="hover:text-[#FAAF40]">Why us?</li></a>
        <a href="#how-it-works"><li className="hover:text-[#FAAF40]">How it works</li></a>
        <a href="#about-us"><li className="hover:text-[#FAAF40]">About us</li></a>
        <a href="#blog"><li className="hover:text-[#FAAF40]">Blog</li></a>
    </>

    const handleClose = () => {

    }
    return (
        <div className="drawer ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="w-fit lg:hidden">
                    <div style={{ background: "linear-gradient(45deg, #f26e35, #f9a83f 50%, #f26e35)" }} className="p-2 w-fit h-fit rounded-full">
                        <IoMenu className="text-3xl text-white "></IoMenu>
                    </div>
                </label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-[#FFF] text-base-content">
                    {/* Sidebar content here */}
                    <div>
                        <div className="flex justify-between items-center mb-6">
                            <h4 className="text-2xl  font-bold">LOGO</h4>
                            <button onClick={handleClose}>
                                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay">
                                    <IoClose className="text-4xl text-[#F16633]"></IoClose>
                                </label>

                            </button>
                        </div>

                        <div className="text-lg w-fit gap-2 items-center flex flex-col">
                            {/* log in btn */}
                            {/* linear-gradient(222.07deg, #FAAF40 -3.74%, #F16633 99.62%) */}
                            <Link to={'/login'}>
                                <button className="border-2 rounded-lg font-bold text-[#FAAF40] hover:text-white border-[#FAAF40] px-6 py-1
                            hover:bg-gradient-to-r from-[#F16633] to-[#FAAF40]">
                                    Log in
                                </button>
                            </Link>

                            {/* sign up btn */}
                            <Link to={'/register'}>
                            <button className="text-[#F16633]/85 font-semibold">
                                Sign up
                            </button>
                            </Link>

                        </div>

                        <div className="divider"></div>
                        {/* navLinks */}
                        <ul className="flex flex-col gap-2 text-lg text-gray-500">
                            {navLinks}
                        </ul>
                    </div>

                </ul>

            </div>
        </div>
    );
};

export default NavBarDrawer;