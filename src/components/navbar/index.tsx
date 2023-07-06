import { Link } from "react-router-dom";
import { BsMessenger } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { authWithGoogle } from "../../firebase";
import { _doLogin } from "../../features/auth";

export default function Navbar() {
    const { appName } = useAppSelector(state => state.app);
    const { auth } = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    const handleGoogleLogin = async () => {
        try {
            const user = await authWithGoogle();
            dispatch(_doLogin(user));
        } catch (error) {
            console.log("Google oturum açma hatası:", error);
        }
    };


    return (
        <header className="border-b-[1px]  bg-white border-zinc-200 flex items-center justify-between h-16">
            <Link to="/" className="flex items-center mx-auto max-md:mx-0 max-md:p-2 justify-center gap-2">
                <div>
                    <BsMessenger color="#1976D2" size={28} />
                </div>

                <p className="text-blue-500 text-lg">{appName}</p>
            </Link>
            {!auth && (
                <button onClick={handleGoogleLogin} className="flex items-center p-2 justify-center cursor-pointer hover:rounded-full hover:p-2 hover:bg-zinc-200 gap-2">
                    <FcGoogle size={28} />
                </button>
            )}
        </header>
    )
}