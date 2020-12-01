export interface INavbarProps {
    leftButton?: ButtonProps;
    rightButton?: ButtonProps;
    children: React.ReactNode;
}

interface ButtonProps {
    action(): void;
    icon: string;
}
