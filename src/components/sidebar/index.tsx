import { MdOutlineEmail } from "react-icons/md"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { convertReadableDate, capitalizeFirstLetter } from "../../utils"
import { BiTimer, BiUserVoice } from "react-icons/bi"
import {AiOutlineCalendar} from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";
import { _doLogout } from "../../features/auth";
import { logout } from "../../firebase";

export default function SideBar() {
    const { user } = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    const handleLogout = async () => {
        try {
            await logout().finally(() => {
                dispatch(_doLogout())
            });
        } catch (error) {
            console.log("Çıkış yapma hatası:", error);
        }
    };
    return (
        <div className="w-[320px] max-sm:hidden h-full flex flex-col item shrink-0 bg-white border-r-[1px] border-zinc-200">
            <div className="flex flex-col h-full flex-wrap gap-2">
                <div className="flex  flex-col gap-2 items-center justify-center p-2">
                    <img className="w-16 h-16 rounded-full border-[2px] border-zinc-400" src={user?.photoURL} alt={user?.displayName} />
                    <p className="text-sm">Hoşgeldin, <span className="text-blue-500">{capitalizeFirstLetter(user?.displayName)}</span></p>
                </div>
                <div className="flex flex-col flex-nowrap text-sm  gap-2 p-2">
                    <h1 className="text-sm p-2 border-b-[1px] border-zinc-200">Bilgilerim</h1>
                    <p className="flex items-center gap-2"><MdOutlineEmail size={14} /> {user?.email}</p>
                    <p className="flex items-center gap-2"><AiOutlineCalendar size={14} /> {user?.createdAt && convertReadableDate(Number(user?.createdAt))}</p>

                    <h1 className="text-sm p-2 border-b-[1px] border-zinc-200">Token Bilgileri</h1>
                    <p className="flex items-center gap-2"><BiUserVoice size={17} /> {user?.uid}</p>
                    <p className="flex items-center gap-2"><BiTimer size={18}/> {user?.stsTokenManager.expirationTime && convertReadableDate(user?.stsTokenManager.expirationTime)}</p>
                </div>
            </div>
            <div className="mt-auto p-4 flex justify-end">
                <button className="flex items-center cursor-pointer hover:bg-blue-700  gap-2 bg-blue-500 rounded-md p-2">
                    <span onClick={handleLogout} className="text-sm text-white">Çıkış Yap</span>
                    <LuLogOut color="white" size={16} />
                </button>
            </div>
        </div>
    )
}