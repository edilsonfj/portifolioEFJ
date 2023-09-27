import { ChildrenProps, LinkProps } from "../../interfaces";

export function ButtonProject({ href, children }: ChildrenProps & LinkProps) {

    const mobile = 'w-max h-max px-6 py-2 font-sans font-medium text-base bg-gradient-to-tr from-purple-800 to-purple-900 text-purple-50 text-shadow-md hover:bg-gradient-to-tr hover:from-purple-600 hover:to-purple-700 focus:bg-gradient-to-tr focus:from-purple-600 focus:to-purple-700 transition duration-500 ease-in-out';
    const tablet = 'tablet:px-8 tablet:py-2 tablet:text-xl';
    const laptop = 'laptop:px-8 laptop:py-2 laptop:text-xs';
    const notebook = 'notebook:px-9 notebook:py-2.5 notebook:text-sm';
    const desktop = 'desktop:px-10 desktop:py-3 desktop:text-base';
    const monitor = 'monitor:px-12 monitor:py-3.5 monitor:text-lg';
    const tv = 'tv:px-14 tv:py-4 tv:text-xl';
    const scale = 'scale:px-15 scale:py-4.5 scale:text-2xl';
    const screen = 'screen:px-16 screen:py-5 screen:text-3xl';

    return (
        <a href={href} className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </a>
    );
};