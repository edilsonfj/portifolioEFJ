import { ChildrenProps, ButtonProps, ItemProps } from "../../interfaces";

export function Slider({ children }: ChildrenProps) {

    const mobile = 'w-full h-max flex flex-col items-center justify-center';
    const tablet = '';
    const laptop = '';
    const notebook = '';
    const desktop = '';
    const monitor = '';
    const tv = '';
    const scale = '';
    const screen = '';

    return (
        <div className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </div>
    );
};

export function SliderArrow({ children, onClick }: ChildrenProps & ButtonProps) {

    const mobile = 'w-max h-max font-bold text-xl text-purple-700 rounded-sm hover:text-purple-400 focus:text-purple-400';
    const tablet = 'tablet:text-2xl';
    const laptop = 'laptop:text-base';
    const notebook = 'notebook:text-lg';
    const desktop = 'desktop:text-lg';
    const monitor = 'monitor:text-xl';
    const tv = 'tv:text-2xl';
    const scale = 'scale:text-3xl';
    const screen = 'screen:text-4xl';

    return (
        <button onClick={onClick} className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </button>
    );
};
Slider.Arrow = SliderArrow;

export function SliderWrapper({ children }: ChildrenProps) {

    const mobile = 'w-full h-full gap-2 flex flex-row items-center justify-center';
    const tablet = 'tablet:gap-5';
    const laptop = 'laptop:gap-1';
    const notebook = 'desktop:gap-2';
    const desktop = 'desktop:gap-3';
    const monitor = 'monitor:gap-4';
    const tv = 'tv:gap-5';
    const scale = 'scale:gap-6';
    const screen = 'screen:gap-4';

    return (
        <div className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </div>
    );
};
Slider.Wrapper = SliderWrapper;

export function SliderContent({ children }: ChildrenProps) {

    const mobile = 'w-full h-full flex flex-row items-center justify-between';
    const tablet = '';
    const laptop = '';
    const notebook = '';
    const desktop = '';
    const monitor = '';
    const tv = '';
    const scale = '';
    const screen = '';

    return (
        <div className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </div>
    );
};
Slider.Content = SliderContent;

export function SliderNavbar({ children }: ChildrenProps) {

    const mobile = 'w-full h-max gap-1 flex flex-row items-center justify-center';
    const tablet = 'tablet:gap-3';
    const laptop = 'laptop:p-0.5';
    const notebook = 'notebook:p-1';
    const desktop = 'desktop:p-1.5';
    const monitor = 'monitor:p-2';
    const tv = 'tv:p-2.5';
    const scale = 'scale:p-3';
    const screen = 'screen:p-3.5';

    return (
        <div className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </div>
    );
};
Slider.Navbar = SliderNavbar;

export function SliderPagelocation({ isActive }: ItemProps) {

    const activeClass = isActive ? "bg-purple-700" : "bg-purple-50/20";

    const mobile = 'w-2 h-2 rounded-full';
    const tablet = 'tablet:w-4 tablet:h-4';
    const laptop = 'laptop:w-0.5 laptop:h-0.5';
    const notebook = 'notebook:w-1 notebook:h-1';
    const desktop = 'desktop:w-1.5 desktop:h-1.5';
    const monitor = 'monitor:w-2 monitor:h-2';
    const tv = 'tv:w-2.5 tv:h-2.5';
    const scale = 'scale:w-3 scale:h-3';

    return (
        <div className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen} ${activeClass}`}></div>
    );
};
Slider.Pagelocation = SliderPagelocation;
