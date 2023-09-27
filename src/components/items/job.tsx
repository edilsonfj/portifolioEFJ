import { ChildrenProps } from "../../interfaces";

export function Job({ children }: ChildrenProps) {

    const mobile = 'w-full h-max flex flex-col font-bold';
    const tablet = 'tablet:';
    const laptop = 'laptop:';
    const notebook = 'notebook:';
    const desktop = 'desktop:';
    const monitor = 'monitor:';
    const tv = 'tv:';
    const scale = 'scale:';
    const screen = 'screen:';

    return (
        <div className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </div>
    );
};

export function JobProfission({ children }: ChildrenProps) {

    const mobile = 'font-serif text-6xl';
    const tablet = 'tablet:text-11xl';
    const laptop = 'laptop:text-4xl';
    const notebook = 'notebook:text-6xl';
    const desktop = 'desktop:text-8xl';
    const monitor = 'monitor:text-10xl';
    const tv = 'tv:text-12xl';
    const scale = 'scale:text-14xl';
    const screen = 'screen:text-16xl';

    return (
        <h1 className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </h1>
    );
};
Job.Profission = JobProfission;

export function JobArea({ children }: ChildrenProps) {

    const mobile = 'font-serif text-5xl';
    const tablet = 'tablet:text-10xl';
    const laptop = 'laptop:text-3xl';
    const notebook = 'notebook:text-5xl';
    const desktop = 'desktop:text-7xl';
    const monitor = 'monitor:text-9xl';
    const tv = 'tv:text-11xl';
    const scale = 'scale:text-13xl';
    const screen = 'screen:text-15xl';

    return (
        <h2 className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </h2>
    );
};
Job.Area = JobArea;

export function JobSkill({ children }: ChildrenProps) {

    const mobile = 'text-2xl';
    const tablet = 'tablet:text-5xl';
    const laptop = 'laptop:text-xl';
    const notebook = 'notebook:text-2xl';
    const desktop = 'desktop:text-3xl';
    const monitor = 'monitor:text-4xl';
    const tv = 'tv:text-5xl';
    const scale = 'scale:text-6xl';
    const screen = 'screen:text-7xl';

    return (
        <h2 className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </h2>
    );
};
Job.Skill = JobSkill;

export function JobDescription({ children }: ChildrenProps) {

    const mobile = 'font-sans font-light text-base text-purple-100';
    const tablet = 'tablet:text-2xl';
    const laptop = 'laptop:text-sm';
    const notebook = 'notebook:text-base';
    const desktop = 'desktop:text-xl';
    const monitor = 'monitor:text-2xl';
    const tv = 'tv:text-3xl';
    const scale = 'scale:text-4xl';
    const screen = 'screen:text-5xl';

    return (
        <p className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </p>
    );
};
Job.Description = JobDescription;