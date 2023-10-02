import { ChildrenProps, BackgroundProps, LinkProps } from "../../interfaces";

export function Card({ children, href }: ChildrenProps & LinkProps) {

    const mobile = 'w-64 h-48 p-4 gap-2 flex flex-col itens-center justify-start border-2 border-purple-900 bg-codeBg bg-cover text-purple-50 hover:bg-codingBg focus:bg-codingBg hover:text-white focus:text-white';
    const tablet = 'tablet:w-88 tablet:h-72 tablet:p-6 tablet:gap-4';
    const laptop = 'laptop:w-40 laptop:h-28 laptop:p-3.5 laptop:gap-0.5';
    const notebook = 'notebook:w-48 notebook:h-36 notebook:p-4 notebook:gap-1';
    const desktop = 'desktop:w-52 desktop:h-40 desktop:p-4.5 desktop:gap-2';
    const monitor = 'monitor:w-60 monitor:h-48 monitor:p-5 monitor:gap-2.5';
    const tv = 'tv:w-72 tv:h-56 tv:p-5.5 tv:gap-3';
    const scale = 'scale:w-80 scale:h-60 scale:p-6 scale:gap-3.5';
    const screen = 'screen:w-80 screen:h-64 screen:p-6 screen:gap-4';

    return (
        <a href={href} className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </a>
    );
};
Card.Card = Card;

export function CardTop({ children }: ChildrenProps) {

    const mobile = 'w-full h-max flex flex-row items-center justify-between';
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
Card.Top = CardTop;

export function CardTitle({ children }: ChildrenProps) {

    const mobile = 'w-max h-max flex flex-col items-start justify-start font-logo font-bold text-xl text-shadow-xs';
    const tablet = 'tablet:text-3xl';
    const laptop = 'laptop:text-sm';
    const notebook = 'notebook:text-base';
    const desktop = 'desktop:text-lg';
    const monitor = 'monitor:text-xl';
    const tv = 'tv:text-2xl';
    const scale = 'scale:text-3xl';
    const screen = 'screen:text-3xl';

    return (
        <h5 className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </h5>
    );
};
Card.Title = CardTitle;

export function CardLevel({ children }: ChildrenProps) {

    const mobile = 'w-32 h-max gap-3 flex flex-row items-center justify-center rounded-sm font-logo text-xs shadow-xs bg-gradient-to-r from-purple-700 to-fuchsia-600';
    const tablet = 'tablet:w-44 tablet:gap-3.5 tablet:text-lg';
    const laptop = 'laptop:w-20 laptop:text-5xs';
    const notebook = 'notebook:w-24 notebook:text-4xs';
    const desktop = 'desktop:w-28 desktop:text-3xs';
    const monitor = 'monitor:w-32 monitor:text-2xs';
    const tv = 'tv:w-36 tv:text-xs';
    const scale = 'scale:w-40 scale:text-sm';
    const screen = 'screen:w-40 screen:text-sm';

    return (
        <div className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </div>
    );
};
Card.Level = CardLevel;

export function CardPercentage({ children }: ChildrenProps) {

    const mobile = 'text-shadow-xs';
    const tablet = '';
    const laptop = '';
    const notebook = '';
    const desktop = '';
    const monitor = '';
    const tv = '';
    const scale = '';
    const screen = '';

    return (
        <span className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}%
        </span>
    );
};
Card.Percentage = CardPercentage;

export function CardXp({ children }: ChildrenProps) {

    const mobile = 'text-shadow-xs';
    const tablet = '';
    const laptop = '';
    const notebook = '';
    const desktop = '';
    const monitor = '';
    const tv = '';
    const scale = '';
    const screen = '';

    return (
        <span className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}XP
        </span>
    );
};
Card.Xp = CardXp;

export function CardDivider({ children }: ChildrenProps) {

    const mobile = 'text-shadow-xs';
    const tablet = '';
    const laptop = '';
    const notebook = '';
    const desktop = '';
    const monitor = '';
    const tv = '';
    const scale = '';
    const screen = '';

    return (
        <span className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </span>
    );
};
Card.Divider = CardDivider;

export function CardIcon({ bg }: BackgroundProps) {

    const mobile = 'w-14 h-14 bg-cover';
    const tablet = 'tablet:w-20 tablet:h-20';
    const laptop = 'laptop:w-8 laptop:h-8';
    const notebook = 'desktop:w-10 desktop:h-10';
    const desktop = 'desktop:w-12 desktop:h-12';
    const monitor = 'monitor:w-14 monitor:h-14';
    const tv = 'tv:w-16 tv:h-16';
    const scale = 'scale:w-18 scale:h-18';
    const screen = 'screen:w-18 screen:h-18';

    return (
        <div className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen} ${bg}`}></div>
    );
};
Card.Icon = CardIcon;

export function CardDescription({ children }: ChildrenProps) {

    const mobile = 'w-full h-max font-sans text-sm text-slate-100 text-shadow-xs';
    const tablet = 'tablet:text-xl';
    const laptop = 'laptop:text-4xs';
    const notebook = 'notebook:text-3xs';
    const desktop = 'desktop:text-2xs';
    const monitor = 'monitor:text-xs';
    const tv = 'tv:text-sm';
    const scale = 'scale:text-base';
    const screen = 'screen:text-base';

    return (
        <p className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </p>
    );
};
Card.Description = CardDescription;
