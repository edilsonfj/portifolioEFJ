import { ChildrenProps } from "../../interfaces";

export function Title({ children }: ChildrenProps) {

    const mobile = 'w-full h-max flex flex-col items-start justify-start font-serif font-bold';
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

export function TitleLabel({ children }: ChildrenProps) {

    const mobile = 'text-xl';
    const tablet = 'tablet:text-4xl';
    const laptop = 'laptop:text-sm';
    const notebook = 'notebook:text-base';
    const desktop = 'desktop:text-lg';
    const monitor = 'monitor:text-xl';
    const tv = 'tv:text-2xl';
    const scale = 'scale:text-3xl';
    const screen = 'screen:text-4xl';

    return (
        <h2 className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </h2>
    );
};
Title.Label = TitleLabel;

export function TitleDescription({ children }: ChildrenProps) {

    const mobile = 'font-sans font-light text-xs text-slate-100';
    const tablet = 'tablet:text-lg';
    const laptop = 'laptop:text-2xs';
    const notebook = 'notebook:text-xs';
    const desktop = 'desktop:text-sm';
    const monitor = 'monitor:text-base';
    const tv = 'tv:text-lg';
    const scale = 'scale:text-xl';
    const screen = 'screen:text-2xl';

    return (
        <p className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </p>
    );
};
Title.Description = TitleDescription;