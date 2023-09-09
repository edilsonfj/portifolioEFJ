import { ItemProps, ChildrenProps } from "../../interfaces";

export function Contact({ children }: ChildrenProps) {

    const mobile = 'w-max h-max gap-4 flex flex-row items-center justify-start font-logo';
    const tablet = 'tablet:gap-6';
    const laptop = 'laptop:gap-3';
    const notebook = 'notebook:gap-4';
    const desktop = 'desktop:gap-5';
    const monitor = 'monitor:gap-6';
    const tv = 'tv:gap-7';
    const scale = 'scale:gap-8';
    const screen = 'screen:gap-9';

    return (
        <div className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </div>
    );
};

function ContactRoot({ children, href }: ItemProps) {

    const mobile = 'flex flex-row justify-start items-center text-purple-50 hover:text-purple-500 focus:text-purple-500 transition duration-500 ease-in-out';
    const tablet = '';
    const laptop = 'laptop:gap-1';
    const notebook = 'notebook:gap-1.5';
    const desktop = 'desktop:gap-2';
    const monitor = 'monitor:gap-2.5';
    const tv = 'tv:gap-3';
    const scale = 'scale:gap-3.5';
    const screen = 'screen:gap-4';

    return (
        <a href={href} className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`} target="_blank">
            {children}
        </a>
    );
};
Contact.Root = ContactRoot;


export function ContactIcon({ children }: ChildrenProps) {

    const mobile = 'flex items-center justify-center text-2xl text-purple-700 hover:text-inherit focus:text-inherit';
    const tablet = 'tablet:text-4xl';
    const laptop = 'laptop:text-sm';
    const notebook = 'notebook:text-base';
    const desktop = 'desktop:text-lg';
    const monitor = 'monitor:text-xl';
    const tv = 'tv:text-2xl';
    const scale = 'scale:text-3xl';
    const screen = 'screen:text-4xl';

    return (
        <div className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </div>
    );
};
Contact.Icon = ContactIcon;

export function ContactLabel({ children }: ChildrenProps) {

    const mobile = 'hidden';
    const tablet = '';
    const laptop = 'laptop:flex laptop:font-medium laptop:text-3xs';
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
Contact.Label = ContactLabel;
