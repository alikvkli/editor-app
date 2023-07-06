import { FC } from "react";
import Navbar from "../components/navbar";
import { useAppSelector } from "../hooks";
import LoginRequired from "../components/login-required";
import SideBar from "../components/sidebar";
interface LayoutProps {
    children: React.ReactNode;
}
const Layout: FC<LayoutProps> = ({ children }) => {
    const { auth, user } = useAppSelector(state => state.auth);
    return (
        <div>
            <Navbar />
            <div className="flex h-custom bg-[#f3f3f4] flex-col items-center">
                {auth && (
                    <div className="flex w-full h-full ">
                        <SideBar />
                        <div className="w-full h-message">
                            {children}
                        </div>
                    </div>
                )}
                {!auth && <LoginRequired />}
            </div>
        </div>
    )
}

export default Layout;