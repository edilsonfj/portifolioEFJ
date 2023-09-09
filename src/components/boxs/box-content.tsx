import { ChildrenProps } from "../../interfaces";

export function BoxContent({ children }: ChildrenProps) {

    const mobile = 'w-full h-full flex flex-col';
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