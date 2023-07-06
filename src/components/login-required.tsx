import { FcGoogle } from "react-icons/fc";

export default function LoginRequired() {
    return (
        <>
            <div className="bg-white shadow-md p-4 mt-5 rounded-md text-sm w-1/2 flex flex-col gap-2">
                <h3 className="text-lg">Merhaba,</h3>
                <p className="leading-5 tracking-wide text-black/80">
                    Gerçek zamanlı chat odasına hoş geldiniz! Bu platformu kullanmak için, Google hesabınızla giriş yapmanız gerekmektedir. Google hesabınızı kullanarak kolayca platforma erişebilir ve sohbetlere katılabilirsiniz.
                    Google ile giriş yapmak için aşağıdaki adımları izleyin:
                </p>
            </div>
            <div className="bg-white shadow-md p-4 mt-5 rounded-md text-sm w-1/2 flex flex-col gap-5">
                <p className="flex items-center">
                    <span className="mr-2 px-2 bg-blue-500 text-white rounded-full">1. Adım</span>
                    <FcGoogle size={18} />
                    <span className="ml-2 leading-5 tracking-wide text-black/80">
                        butonuna tıklayınız.
                    </span>
                </p>
                <p className="flex items-start">
                    <span className="px-2 flex-none bg-blue-500 text-white rounded-full">2. Adım</span>
                    <span className="ml-2 leading-5 tracking-wide text-black/80">
                        Giriş yapmadan önce, Google hesabınızla ilişkilendirilmiş bir pencere açılacaktır. Eğer zaten oturum açmışsanız, bu adımı atlayabilirsiniz.
                    </span>
                </p>
                <p className="flex items-start">
                    <span className="px-2 flex-none bg-blue-500 text-white rounded-full">3. Adım</span>
                    <span className="ml-2 leading-5 tracking-wide text-black/80">
                        E-posta adresinizi ve şifrenizi girerek Google hesabınıza giriş yapın.
                    </span>
                </p>
                <p className="flex items-start">
                    <span className="px-2 flex-none bg-blue-500 text-white rounded-full">4. Adım</span>
                    <span className="ml-2 leading-5 tracking-wide text-black/80">
                        Giriş yaptıktan sonra, gerçek zamanlı chat odasına yönlendirileceksiniz ve diğer kullanıcılarla iletişim kurmaya başlayabilirsiniz.
                    </span>
                </p>
            </div>
        </>
    )
}

//rounded-full before:content-[''] before:bg-blue-500 before:rounded-full before:w-6 before:h-6 before:-translate-y-1/2 before:-translate-x-1/2  before:absolute before:top-1/2 before:left-1/2