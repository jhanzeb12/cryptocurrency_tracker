import { ITextProps } from "~/types/types";

const ListItem = ({ text }: ITextProps) => {
    return (
        <li>{text}</li>
    );
}

export default ListItem;