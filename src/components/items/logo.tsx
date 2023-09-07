import { ChildrenProps, LinkProps } from "../../interfaces";

export function Logo({ href, children }: ChildrenProps & LinkProps) {

    const mobile = 'w-[10%] h-full hidden justify-center items-center font-logo font-bold text-3xs text-purple-50 border-r border-purple-50/10 hover:text-purple-500 focus:text-purple-500 transition duration-500 ease-in-out';
    const tablet = '';
    const laptop = 'laptop:flex laptop:text-xs';
    const notebook = 'notebook:flex notebook:text-sm';
    const desktop = 'desktop:flex desktop:text-base';
    const monitor = 'monitor:flex monitor:text-lg';
    const tv = 'tv:flex tv:text-xl';
    const scale = 'scale:flex scale:text-2xl';
    const screen = 'screen:flex screen:text-3xl';

    return (
        <a href={href} className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </a>
    );
};