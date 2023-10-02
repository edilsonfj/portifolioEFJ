import { ChildrenProps } from "../../interfaces";

export function Subtitle({ children }: ChildrenProps) {

    const mobile = 'w-full h-maxflex flex-col items-start justify-start font-serif font-bold';
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

export function SubtitleLabel({ children }: ChildrenProps) {

    const mobile = 'text-lg';
    const tablet = 'tablet:text-2xl';
    const laptop = 'laptop:text-xs';
    const notebook = 'notebook:text-sm';
    const desktop = 'desktop:text-base';
    const monitor = 'monitor:text-lg';
    const tv = 'tv:text-xl';
    const scale = 'scale:text-2xl';
    const screen = 'screen:text-3xl';

    return (
        <h2 className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </h2>
    );
};
Subtitle.Label = SubtitleLabel;

export function SubtitleDescription({ children }: ChildrenProps) {

    const mobile = 'font-sans font-light text-2xs text-slate-100';
    const tablet = 'tablet:text-base';
    const laptop = 'laptop:text-4xs';
    const notebook = 'notebook:text-3xs';
    const desktop = 'desktop:text-2xs';
    const monitor = 'monitor:text-xs';
    const tv = 'tv:text-sm';
    const scale = 'scale:text-base';
    const screen = 'screen:text-lg';

    return (
        <p className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </p>
    );
};
Subtitle.Description = SubtitleDescription;