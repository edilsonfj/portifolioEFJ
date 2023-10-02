import { ChildrenProps, LinkProps } from "../../interfaces";

export function Profile({ children, href }: ChildrenProps & LinkProps) {

    const screen = "w-max h-max gap-2 flex flex-row items-center justify-end";
    const monitor = "monitor:gap-1.5";
    const desktop = "desktop:gap-1";
    const laptop = "laptop:gap-0.5";
    const tablet = "tablet:hidden";
    const mobile = "mobile:hidden";

    return (
        <a href={href} className={`${screen} ${monitor} ${desktop} ${laptop} ${tablet} ${mobile}`}>
            {children}
        </a>
    );
};

export function ProfileInfo({ children }: ChildrenProps) {

    const screen = "w-max h-max gap-2 flex flex-col";
    const monitor = "monitor:gap-1.5";
    const desktop = "desktop:gap-1";
    const laptop = "laptop:gap-0.5";
    const tablet = "tablet:gap-2.5";
    const mobile = "mobile:gap-1";

    return (
        <div className={`${screen} ${monitor} ${desktop} ${laptop} ${tablet} ${mobile}`}>
            {children}
        </div>
    );
};
Profile.Info = ProfileInfo;

export function ProfileName({ children }: ChildrenProps) {

    const screen = "w-max h-max font-serif text-base font-semibold";
    const monitor = "monitor:text-sm";
    const desktop = "desktop:text-xs";
    const laptop = "laptop:text-2xs";
    const tablet = "tablet:text-lg";
    const mobile = "mobile:text-xs";

    return (
        <h5 className={`${screen} ${monitor} ${desktop} ${laptop} ${tablet} ${mobile}`}>
            {children}
        </h5>
    );
};
Profile.Name = ProfileName;

export function ProfileLevel({ children }: ChildrenProps) {

    const screen = "gap-2 flex flex-row items-center justify-end";
    const monitor = "monitor:gap-1.5";
    const desktop = "desktop:gap-1";
    const laptop = "laptop:gap-0.5";
    const tablet = "tablet:gap-2.5";
    const mobile = "mobile:gap-1";

    return (
        <div className={`${screen} ${monitor} ${desktop} ${laptop} ${tablet} ${mobile}`}>
            {children}
        </div>
    );
};
Profile.Level = ProfileLevel;

export function ProfileAtual({ children }: ChildrenProps) {

    const screen = "font-serif text-sm font-bold text-purple-700";
    const monitor = "monitor:text-xs";
    const desktop = "desktop:text-2xs";
    const laptop = "laptop:text-3xs";
    const tablet = "tablet:text-base";
    const mobile = "mobile:text-xs";

    return (
        <span className={`${screen} ${monitor} ${desktop} ${laptop} ${tablet} ${mobile}`}>
            {children}
        </span>
    );
};
Profile.Atual = ProfileAtual;

export function ProfileTotal({ children }: ChildrenProps) {

    const screen = "font-serif text-sm font-bold text-purple-50/40";
    const monitor = "monitor:text-xs";
    const desktop = "desktop:text-2xs";
    const laptop = "laptop:text-3xs";
    const tablet = "tablet:text-base";
    const mobile = "mobile:text-xs";

    return (
        <span className={`${screen} ${monitor} ${desktop} ${laptop} ${tablet} ${mobile}`}>
            {children}
        </span>
    );
};
Profile.Total = ProfileTotal;

export function ProfileDivider({ children }: ChildrenProps) {

    const screen = "font-serif text-sm font-bold text-purple-50/40";
    const monitor = "monitor:text-xs";
    const desktop = "desktop:text-2xs";
    const laptop = "laptop:text-3xs";
    const tablet = "tablet:text-base";
    const mobile = "mobile:text-xs";

    return (
        <span className={`${screen} ${monitor} ${desktop} ${laptop} ${tablet} ${mobile}`}>
            {children}
        </span>
    );
};
Profile.Divider = ProfileDivider;

export function ProfileBar({ children }: ChildrenProps) {

    const screen = "w-full h-2 rounded-full bg-purple-50/30";
    const monitor = "monitor:h-1.5";
    const desktop = "desktop:h-1";
    const laptop = "laptop:h-0.5";
    const tablet = "tablet:h-2.5";
    const mobile = "mobile:h-1";

    return (
        <div className={`${screen} ${monitor} ${desktop} ${laptop} ${tablet} ${mobile}`}>
            {children}
        </div>
    );
};
Profile.Bar = ProfileBar;

export function ProfileProgress() {

    const screen = "w-9/12 h-full rounded-full bg-gradient-to-r from-purple-700 to-fuchsia-600";
    const monitor = "";
    const desktop = "";
    const laptop = "";
    const tablet = "";
    const mobile = "";

    return (
        <div className={`${screen} ${monitor} ${desktop} ${laptop} ${tablet} ${mobile}`}></div>
    );
};
Profile.Progress = ProfileProgress;

export function ProfileAvatar({ children }: ChildrenProps) {

    const screen = "w-[5rem] h-[5rem] p-0.5 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-700 to-fuchsia-600";
    const monitor = "monitor:w-[4rem] monitor:h-[4rem]";
    const desktop = "desktop:w-[3rem] desktop:h-[3rem]";
    const laptop = "laptop:w-[2rem] laptop:h-[2rem]";
    const tablet = "tablet:w-[5rem] tablet:h-[5rem]";
    const mobile = "mobile:w-[3rem] mobile:h-[3rem]";

    return (
        <div className={`${screen} ${monitor} ${desktop} ${laptop} ${tablet} ${mobile}`}>
            {children}
        </div>
    );
};
Profile.Avatar = ProfileAvatar;

export function ProfilePerson({ children }: ChildrenProps) {

    const screen = "w-full h-full p-2 flex items-center justify-center rounded-full bg-bg";
    const monitor = "monitor:p-1.5";
    const desktop = "desktop:p-1";
    const laptop = "laptop:p-0.5";
    const tablet = "tablet:p-2.5";
    const mobile = "mobile:p-1";

    return (
        <div className={`${screen} ${monitor} ${desktop} ${laptop} ${tablet} ${mobile}`}>
            {children}
        </div>
    );
};
Profile.Person = ProfilePerson;

export function ProfileImage() {

    const screen = "w-full h-full rounded-full bg-profile-nobg bg-cover";
    const monitor = "";
    const desktop = "";
    const laptop = "";
    const tablet = "";
    const mobile = "";

    return (
        <div className={`${screen} ${monitor} ${desktop} ${laptop} ${tablet} ${mobile}`}></div>
    );
};
Profile.Image = ProfileImage;