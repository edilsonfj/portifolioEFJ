import { ChildrenProps, ItemProps } from '../../interfaces';

export function Menu({ children }: ChildrenProps) {

    const mobile = 'w-full h-full flex flex-col items-center justify-around font-logo';
    const tablet = '';
    const laptop = 'laptop:justify-start laptop:gap-2';
    const notebook = 'notebook:gap-2.5';
    const desktop = 'desktop:gap-3';
    const monitor = 'monitor:gap-3.5';
    const tv = 'tv:gap-4';
    const scale = 'scale:gap-4.5';
    const screen = 'screen:gap-5';

    return (
        <menu className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </menu>
    );
};

export function MenuPage({ children, href, isActive }: ItemProps) {

    const activeClass = isActive ? 'font-semibold text-white text-shadow-md bg-purple-50/10 border-r-2 border-purple-600 transition duration-500 ease-in-out' : '';

    const mobile = 'w-full h-12 pl-8 flex items-center text-xl text-slate-200 text-shadow-md   hover:font-bold hover:text-purple-500 hover:bg-purple-50/5 hover:border-r-2 hover:border-purple-500 focus:font-bold focus:text-purple-500 focus:bg-purple-50/5 focus:border-r-2 focus:border-purple-500 transition duration-500 ease-in-out';
    const tablet = 'tablet:h-16 tablet:pl-10 tablet:text-2xl';
    const laptop = 'laptop:h-8 laptop:pl-4 laptop:text-2xs';
    const notebook = 'notebook:h-10 notebook:pl-5 notebook:text-2xs';
    const desktop = 'desktop:h-12 desktop:pl-6 desktop:text-xs';
    const monitor = 'monitor:h-14 monitor:pl-7 monitor:text-sm';
    const tv = 'tv:h-14 tv:pl-8 tv:text-base';
    const scale = 'scale:h-18 scale:pl-9 scale:text-lg';
    const screen = 'screen:h-20 screen:pl-10 screen:text-xl';

    return (
        <a href={href} className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen} ${activeClass}`}>
            {children}
        </a>
    );
};
Menu.Page = MenuPage;