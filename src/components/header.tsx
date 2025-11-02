import Link from "next/link";
import MobileMenu from "./mobilemenu";

const navItems = [
    { label: "사업개요", href: "about" },
    { label: "관심고객등록", href: "enroll" },
    { label: "갤러리방문예약", href: "gallery" },
];

export default function GlobalNavigationBar() {
    return (
        <header className="fixed w-full top-0 z-50">
            <div className="bg-[#ededed]">
                <div className="mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                    {/* Left Logo */}
                    <Link
                        href="/"
                        className="tracking-widest text-white bg-[#5e5555] px-4 py-1 rounded-xl ml-8"
                    >
                        ETERNO
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link key={item.href}
                                  href={item.href}
                                  className="text-[#5e5555] border border-[#5e5555] px-3 py-1 rounded-xl transition-all duration-300 hover:bg-white"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <a
                            href="tel:18775317"
                            className="tracking-widest text-lg text-white bg-[#5e5555] px-3 py-1 rounded-xl whitespace-nowrap hover:bg-[#7a6f6f] transition"
                        >
                            1877-5317
                        </a>
                    </div>

                    {/* Mobile Nav */}
                    <div className="md:hidden">
                        <MobileMenu navItems={navItems} />
                    </div>
                </div>
            </div>
        </header>
    );
}
