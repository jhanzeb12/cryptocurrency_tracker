import { ReactElement } from "react";
import ListItem from "./listitem";

// This way is chosen only to show that we can define props in this way too.
// otherwise we could use PropsWithChildren as well.
export type IListProps = {
    children?: ReactElement<typeof ListItem>[]
}

const List = ({children}: IListProps) => {
    return (
        <ul>
            {children}
        </ul>
    );
}

export default List;