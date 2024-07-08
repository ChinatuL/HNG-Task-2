import { navlinks } from "../lib/data";
import { Link, useLocation } from "react-router-dom";

const Navlinks = () => {
    const { pathname } = useLocation();
    return (
        <ul className='hidden lg:flex gap-12 text-xl'>
            {navlinks.map((link) => {
                const { id, name } = link;
                return (
                    <li key={id}>
                        {name === "Products" ? (
                            <Link
                                to='/'
                                className={`${
                                    pathname === "/"
                                        ? "text-darkYellow font-semibold"
                                        : ""
                                }`}
                            >
                                {name}
                            </Link>
                        ) : (
                            name
                        )}
                    </li>
                );
            })}
        </ul>
    );
};
export default Navlinks;
