import { ItemProps } from "../../interfaces";
import { useLocation } from 'react-router-dom';

export function ButtonTop({ children, href }: ItemProps) {
    const location = useLocation();
    const currentPage = location.pathname;

    const isHome = currentPage === '/';

    const Home = "font-sans font-semibold text-slate-100 text-shadow-md border-2 border-purple-700 hover:bg-purple-700 hover:font-bold hover:text-white focus:bg-purple-700 focus:font-bold focus:text-white transition duration-500 ease-in-out";

    const notHome = "font-sans font-semibold text-purple-50 text-shadow-md bg-gradient-to-tr from-purple-800 to-purple-900 hover:bg-gradient-to-tr hover:from-purple-600 hover:to-purple-700 hover:font-bold transition duration-500 ease-in-out";

    const mobile = 'py-1 px-6 hidden text-3xs';
    const tablet = 'tablet:text-2xs';
    const laptop = 'laptop:flex laptop:px-4 laptop:text-xs';
    const notebook = 'notebook:px-2.5 notebook:text-2xs';
    const desktop = 'desktop:px-3 desktop:text-xs';
    const monitor = 'monitor:px-4.5 monitor:text-sm';
    const tv = 'tv:px-5 tv:text-base';
    const scale = 'scale:px-5.5 scale:text-lg';
    const screen = 'screen:px-6 screen:text-xl';

    const buttonClass = isHome
        ? `${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen} ${Home}`
        : `${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen} ${notHome}`;

    return (
        <a href={href} className={buttonClass}>
            {children}
        </a>
    );
};
