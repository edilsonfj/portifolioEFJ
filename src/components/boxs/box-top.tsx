import { ChildrenProps } from "../../interfaces";

export function BoxTop({ children }: ChildrenProps) {

    const mobile = 'w-[80%] h-full px-6 flex items-center justify-end';
    const tablet = 'tablet:px-8';
    const laptop = 'laptop:w-[90%] laptop:justify-between laptop:px-10';
    const notebook = 'notebook:px-12';
    const desktop = 'desktop:px-14';
    const monitor = 'monitor:px-16';
    const tv = 'tv:px-18';
    const scale = 'scale:px-20';
    const screen = 'screen:px-22';

    return (
        <div className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </div>
    );
};