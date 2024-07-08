import { Link } from "react-router-dom";
import Logo from "./Logo";
import { navlinks, footerPaths } from "../lib/data";
import iconFacebook from "../assets/icons/facebook.svg";
import iconTwitter from "../assets/icons/twitter.svg";
import iconInstagram from "../assets/icons/instagram.svg";

const Footer = () => {
    return (
        <footer className='flex flex-col gap-4 xl:gap-8 bg-lightGray mt-4 px-8 xl:px-[6.25rem] py-8'>
            <Logo />
            <div className='flex flex-col-reverse items-center xl:items-start xl:flex-row gap-8'>
                <div className='grid grid-cols-3 gap-2 xl:grid-cols-[auto_auto_1fr] xl:gap-8 xl:w-[65%] text-sm xl:text-base'>
                    <div className='xl:pr-10'>
                        <h3 className='text-lg font-semibold pb-2'>
                            Quick Links
                        </h3>
                        <ul className='grid gap-2 font-medium'>
                            {navlinks.map((link) => {
                                const { id, name } = link;
                                return (
                                    <li key={id}>
                                        {name === "Products" ? (
                                            <Link to='/'>{name}</Link>
                                        ) : (
                                            name
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className='xl:pr-10'>
                        <h3 className='text-lg font-semibold pb-2'>About</h3>
                        <ul className='grid gap-2 font-medium'>
                            {footerPaths.map((path) => {
                                const { id, name } = path;
                                return <li key={id}>{name}</li>;
                            })}
                        </ul>
                    </div>
                    <div className='xl:pr-8'>
                        <h3 className='text-lg font-semibold pb-2'>
                            Social media
                        </h3>
                        <div className='grid gap-4'>
                            <p className='hidden xl:block'>
                                Follow us on social media to find out the latest
                                updates on our progress.
                            </p>
                            <p className='xl:hidden'>
                                Follow us on social media to find out
                            </p>
                            <div className='flex gap-2 xl:gap-8'>
                                <img src={iconFacebook} alt='' />
                                <img src={iconTwitter} alt='' />
                                <img src={iconInstagram} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-[50%] text-center xl:text-left xl:w-[35%]'>
                    <h3 className='text-lg font-semibold pb-2'>Newsletter</h3>
                    <div className='grid gap-4'>
                        <p>Subscribe for Latest Updates</p>
                        <div className='relative'>
                            <input
                                type='email'
                                placeholder='Your email'
                                className='py-3 px-4 placeholder:text-black bg-white w-full rounded-lg'
                            />
                            <button className='absolute top-2 right-5 text-xs xl:text-base bg-darkYellow py-2 xl:py-1 px-2 xl:px-4 text-white font-semibold rounded-md'>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[1px] bg-borderGray px-4'></div>
            <p className='xl:self-center footer-font font-bold'>
                Sneaks/All Right Reserved
            </p>
        </footer>
    );
};
export default Footer;
