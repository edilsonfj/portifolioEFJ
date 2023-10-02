import { ItemProps, ChildrenProps } from "../../interfaces";

export function Contact({ children }: ChildrenProps) {

    const mobile = 'w-max h-max gap-4 flex flex-row items-center justify-start font-logo';
    const tablet = 'tablet:gap-6';
    const laptop = 'laptop:gap-2';
    const notebook = 'notebook:gap-3';
    const desktop = 'desktop:gap-4';
    const monitor = 'monitor:gap-5';
    const tv = 'tv:gap-6';
    const scale = 'scale:gap-7';
    const screen = 'screen:gap-8';

    return (
        <div className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </div>
    );
};

function ContactRoot({ children, href }: ItemProps) {

    const mobile = 'flex flex-row justify-start items-center text-purple-50 hover:text-purple-500 focus:text-purple-500 transition duration-500 ease-in-out';
    const tablet = '';
    const laptop = 'laptop:gap-0.5';
    const notebook = 'notebook:gap-1';
    const desktop = 'desktop:gap-1.5';
    const monitor = 'monitor:gap-2';
    const tv = 'tv:gap-2.5';
    const scale = 'scale:gap-3';
    const screen = 'screen:gap-3.5';

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
    const laptop = 'laptop:text-xs';
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

    const mobile = 'hidden font-medium';
    const tablet = '';
    const laptop = 'laptop:flex laptop:text-3xs';
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
