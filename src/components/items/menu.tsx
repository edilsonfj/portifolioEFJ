import { ChildrenProps, ItemProps } from '../../interfaces';

export function Menu({ children }: ChildrenProps) {

    const mobile = 'w-full h-full flex flex-col gap-2 justify-start items-start font-logo';
    const tablet = 'tablet:gap-2.5';
    const laptop = 'laptop:gap-3';
    const notebook = 'notebook:gap-3.5';
    const desktop = 'desktop:gap-4';
    const monitor = 'monitor:gap-4.5';
    const tv = 'tv:gap-5';
    const scale = 'scale:gap-5.5';
    const screen = 'screen:gap-6';

    return (
        <menu className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </menu>
    );
};

export function MenuPage({ children, href, isActive }: ItemProps) {

    const activeClass = isActive ? 'font-semibold text-white bg-purple-50/5 border-r tablet:border-2 mobile:border-2 border-purple-500 text-shadow-md transition duration-500 ease-in-out' : '';

    const mobile = 'w-full h-12 pl-8 flex items-center text-xl text-slate-200 hover:font-bold hover:text-purple-500 hover:bg-purple-50/5 hover:border-r hover:border-purple-500 focus:font-bold focus:text-purple-500 focus:bg-purple-50/5 focus:border-r focus:border-purple-500 transition duration-500 ease-in-out';
    const tablet = 'tablet:h-24 tablet:pl-20 tablet:text-2xl';
    const laptop = 'laptop:h-10 laptop:pl-6 laptop:text-2xs';
    const notebook = 'notebook:h-12 notebook:pl-8 notebook:text-xs';
    const desktop = 'desktop:h-14 desktop:pl-10 desktop:text-sm';
    const monitor = 'monitor:h-16 monitor:pl-12 monitor:text-base';
    const tv = 'tv:h-18 tv:pl-14 tv:text-lg';
    const scale = 'scale:h-20 scale:pl-16 scale:text-xl';
    const screen = 'screen:h-22 screen:pl-18 screen:text-2xl';

    // const tablet = "tablet:focus:border-b tablet:focus:border-b";

    return (
        <a href={href} className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen} ${activeClass}`}>
            {children}
        </a>
    );
};
Menu.Page = MenuPage;