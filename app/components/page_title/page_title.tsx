import { ITextProps } from "~/types/types";
import Heading from "../heading/heading";
import Divider from "../divider/divider";

const PageTitle = ({ text }: ITextProps) => {
    return (
        <div>
            <Heading variant="h1" text={text} />
            <Divider />
        </div>
    );
}

export default PageTitle;