import { ChildrenProps, LinkProps } from "../../interfaces";

export function Logo({ href, children }: ChildrenProps & LinkProps) {

    const mobile = 'w-[10%] h-full hidden justify-center items-center font-logo font-bold text-3xs text-purple-50 hover:text-purple-500 focus:text-purple-500 transition duration-500 ease-in-out';
    const tablet = '';
    const laptop = 'laptop:flex laptop:text-2xs';
    const notebook = 'notebook:text-xs';
    const desktop = 'desktop:text-sm';
    const monitor = 'monitor:text-base';
    const tv = 'tv:text-lg';
    const scale = 'scale:text-xl';
    const screen = 'screen:text-2xl';

    return (
        <a href={href} className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </a>
    );
};