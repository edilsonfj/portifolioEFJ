import { ChildrenProps, BackgroundProps } from "../../interfaces";

export function Tag({ children }: ChildrenProps) {

    const mobile = 'w-68 h-max flex flex-col items-start justfy-center';
    const tablet = 'tablet:w-68';
    const laptop = 'laptop:w-24';
    const notebook = 'notebook:w-48';
    const desktop = 'desktop:w-52';
    const monitor = 'monitor:w-52';
    const tv = 'tv:w-60';
    const scale = 'scale:w-64';
    const screen = 'screen:w-68';

    return (
        <div className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </div>
    );
};

export function TagWrapper({ children }: ChildrenProps) {

    const mobile = 'w-full h-max gap-1 flex flex-row items-start justify-start';
    const tablet = 'tablet:gap-2.5';
    const laptop = 'laptop:gap-0.5';
    const notebook = 'notebook:gap-1';
    const desktop = 'desktop:gap-1.5';
    const monitor = 'monitor:gap-2';
    const tv = 'tv:gap-2.5';
    const scale = 'scale:gap-3';
    const screen = 'screen:gap-3.5';

    return (
        <div className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </div>
    );
};
Tag.Wrapper = TagWrapper;

export function TagImg({ bg }: BackgroundProps) {

    const mobile = 'w-4 h-4 bg-cover';
    const tablet = 'tablet:w-8 tablet:h-8';
    const laptop = 'laptop:w-1 laptop:h-1';
    const notebook = 'notebook:w-2 notebook:h-2';
    const desktop = 'desktop:w-3 desktop:h-3';
    const monitor = 'monitor:w-4 monitor:h-4';
    const tv = 'tv:w-5 tv:h-5';
    const scale = 'scale:w-6 scale:h-6';
    const screen = 'screen:w-7 screen:h-7';

    return (
        <div className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen} ${bg}`}></div>
    );
};
Tag.Img = TagImg;


export function TagName({ children }: ChildrenProps) {

    const mobile = 'w-full h-full font-logo text-sm text-slate-100';
    const tablet = 'tablet:text-xl';
    const laptop = 'laptop:text-3xs';
    const notebook = 'notebook:text-2xs';
    const desktop = 'desktop:text-xs';
    const monitor = 'monitor:text-sm';
    const tv = 'tv:text-base';
    const scale = 'scale:text-lg';
    const screen = 'screen:text-xl';

    return (
        <span className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </span>
    );
};
Tag.Name = TagName;

export function TagDescription({ children }: ChildrenProps) {

    const mobile = 'font-sans font-light text-2xs text-shadow-sm text-slate-200';
    const tablet = 'tablet:text-base';
    const laptop = 'laptop:text-4xs';
    const notebook = 'notebook:text-3xs';
    const desktop = 'desktop:text-2xs';
    const monitor = 'monitor:text-xs';
    const tv = 'tv:text-sm';
    const scale = 'scale:text-base';
    const screen = 'screen:text-lg';

    return (
        <div className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </div>
    );
};
Tag.Description = TagDescription;