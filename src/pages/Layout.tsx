import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Layout = () => {
    return (
        <div className='flex flex-col items-center w-full max-w-[90rem] min-h-[100vh] mx-auto  bg-lightYellow'>
            <header className='fixed z-10 bg-lightYellow w-full py-8 2xl:py-16 px-8 xl:px-[6.25rem] max-w-[90rem]'>
                <Navbar />
            </header>
            <main className='relative mt-28 flex flex-1 items-center w-full pb-8 px-8 xl:px-[6.25rem]'>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};
export default Layout;
