import { ChildrenProps, ColorProps } from "../../interfaces";

export function Name({ children }: ChildrenProps) {

    const mobile = 'w-full h-max gap-1 flex flex-row items-center justify-start';
    const tablet = 'tablet:gap-3';
    const laptop = 'laptop:gap-1';
    const notebook = 'notebook:gap-1.5';
    const desktop = 'desktop:gap-2';
    const monitor = 'monitor:gap-2.5';
    const tv = 'tv:gap-3';
    const scale = 'scale:gap-3.5';
    const screen = 'screen:gap-4';

    return (
        <div className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </div>
    );
};

export function NameText({ children, color }: ChildrenProps & ColorProps) {

    const mobile = 'w-full h-max flex font-sans font-normal text-xl text-slate-200';
    const tablet = 'tablet:text-3xl';
    const laptop = 'laptop:text-base';
    const notebook = 'notebook:text-xl';
    const desktop = 'desktop:text-2xl';
    const monitor = 'monitor:text-3xl';
    const tv = 'tv:text-4xl';
    const scale = 'scale:text-5xl';
    const screen = 'screen:text-6xl';

    return (
        <span className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen} ${color}`}>
            {children}
        </span>
    );
};
Name.Text = NameText;

export function NameTracer() {

    const mobile = 'w-[24px] h-[2px] bg-slate-200 rounded-sm';
    const tablet = 'tablet:w-[48px] tablet:h-[4px]';
    const laptop = 'laptop:w-[24px] laptop:h-[1px]';
    const notebook = 'notebook:w-[28px] notebook:h-[1.5px]';
    const desktop = 'desktop:w-[32px] desktop:h-[2px]';
    const monitor = 'monitor:w-[36px] monitor:h-[2.5px]';
    const tv = 'tv:w-[40px] tv:h-[3px]';
    const scale = 'scale:w-[44px] scale:[3.5px]';
    const screen = 'screen:w-[48px] screen:h-[4px]';

    return (
        <div className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}></div>
    );
};
Name.Tracer = NameTracer;