import { PropsWithChildren } from "react"
import TopNav from "../navbar/topnav";

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <TopNav />
            {children}
        </>
    )
}

export default Layout;
