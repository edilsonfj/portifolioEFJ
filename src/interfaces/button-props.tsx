export type ButtonProps = {
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    onClosed?: () => void;
};