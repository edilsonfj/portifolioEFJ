import { ChildrenProps } from "../../interfaces";

export function Text({ children }: ChildrenProps) {

    const mobile = 'w-full h-max gap-2 flex flex-col font-sans text-base text-slate-400';
    const tablet = 'tablet:text-2xl';
    const laptop = 'laptop:text-sm laptop:gap-2';
    const notebook = 'notebook:text-base notebook:gap-2.5';
    const desktop = 'desktop:text-lg desktop:gap-3';
    const monitor = 'monitor:text-xl monitor:gap-3.5';
    const tv = 'tv:text-2xl tv:gap-4';
    const scale = 'scale:text-3xl scale:gap-4.5';
    const screen = 'screen:text-4xl screen:gap-5';

    return (
        <p className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </p>
    );
};