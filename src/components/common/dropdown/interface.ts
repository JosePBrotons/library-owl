export interface IDropdownProps {
    label: string;
    selectedValue: string | number;
    select: any;
    fieldName: string;
    options: Array<string | number>;
    optionDescription?: string;
}
