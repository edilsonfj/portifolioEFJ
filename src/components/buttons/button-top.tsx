import { ItemProps } from "../../interfaces";
import { useLocation } from 'react-router-dom';

export function ButtonTop({ children, href }: ItemProps) {
    const location = useLocation();
    const currentPage = location.pathname;

    const isHome = currentPage === '/';

    const Home = "font-sans text-slate-100 text-shadow-xs border-2 border-purple-700 hover:bg-purple-700 hover:text-white focus:bg-purple-700 focus:text-white transition duration-500 ease-in-out";

    const notHome = "font-sans text-purple-50 text-shadow-xs border-none bg-gradient-to-tr from-purple-800 to-purple-900 hover:bg-gradient-to-tr hover:from-purple-600 hover:to-purple-700 transition duration-500 ease-in-out";

    const mobile = 'hidden';
    const tablet = '';
    const laptop = 'laptop:flex laptop:px-2 laptop:py-[2px] laptop:text-2xs laptop:border-[1px]';
    const notebook = 'notebook:px-3 notebook:py-[3px] notebook:text-xs notebook:border-[1.5px]';
    const desktop = 'desktop:px-4 desktop:py-[4px] desktop:text-sm desktop:border-[2px]';
    const monitor = 'monitor:px-5 monitor:[5px] monitor:text-base monitor:border-[2.5px]';
    const tv = 'tv:px-6 tv:py-[6px] tv:text-lg tv:border-[3px]';
    const scale = 'scale:px-7 scale:py-[7px] scale:text-xl scale:border-[3.5px]';
    const screen = 'screen:px-8 screen:py-[8px] screen:text-2xl screen:border-[4px]';

    const buttonClass = isHome
        ? `${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen} ${Home}`
        : `${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen} ${notHome}`;

    return (
        <a href={href} className={buttonClass}>
            {children}
        </a>
    );
};
