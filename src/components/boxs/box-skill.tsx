import { ChildrenProps } from "../../interfaces";

export function BoxSkill({ children }: ChildrenProps) {

    const mobile = 'w-full h-max gap-6 flex flex-col items-start justify-start';
    const tablet = 'tablet:gap-8';
    const laptop = 'laptop:gap-4';
    const notebook = 'notebook:gap-5';
    const desktop = 'desktop:gap-6';
    const monitor = 'monitor:gap-7';
    const tv = 'tv:gap-8';
    const scale = 'scale:gap-9';
    const screen = 'screen:gap-10';

    return (
        <div className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </div>
    );
};

export function BoxSkillHard({ children }: ChildrenProps) {

    const mobile = 'w-full h-max ';
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
BoxSkill.Hard = BoxSkillHard;

export function BoxSkillSoft({ children }: ChildrenProps) {

    const mobile = 'w-full p-6 gap-6 h-max flex flex-col items-center justify-between rounded-md bg-purple-600/5';
    const tablet = 'tablet:p-8 tablet:gap-6';
    const laptop = 'laptop:p-4 laptop:gap-3';
    const notebook = 'notebook:p-3 notebook:gap-6';
    const desktop = 'desktop:p-4 desktop:gap-6';
    const monitor = 'monitor:p-5 monitor:gap-6';
    const tv = 'tv:p-6 tv:gap-5';
    const scale = 'scale:p-7 scale:gap-5.5';
    const screen = 'screen:p-8 screen:gap-6';

    return (
        <div className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </div>
    );
};
BoxSkill.Soft = BoxSkillSoft;

export function BoxTag({ children }: ChildrenProps) {

    const mobile = 'w-full h-full flex flex-col items-start justify-between';
    const tablet = '';
    const laptop = 'laptop:flex-row';
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
BoxSkill.Tag = BoxTag;
