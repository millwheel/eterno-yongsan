import { MessageCircle, Phone } from "lucide-react";

export default function Contact() {
    return (
        <div className="flex items-center justify-center gap-10">
            <a
                href="https://pf.kakao.com/_xjJxcAn"
                className="flex items-center gap-2 tracking-widest text-base text-white bg-[#5e5555] px-4 py-2 rounded-lg hover:bg-[#7a6f6f] transition"
            >
                <MessageCircle size={18} />
                카카오톡 문의
            </a>
            <a
                href="tel:18775317"
                className="flex items-center gap-2 tracking-widest text-base text-white bg-[#5e5555] px-4 py-2 rounded-lg hover:bg-[#7a6f6f] transition"
            >
                <Phone size={18} />
                1877-5317
            </a>
        </div>
    );
}