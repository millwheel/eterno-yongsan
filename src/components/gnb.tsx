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
            <div className="bg-gray-200/20">
                <div className="mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                    {/* Left Logo */}
                    <Link
                        href="/"
                        className="font-semibold tracking-widest text-black whitespace-nowrap"
                    >
                        ETERNO YONGSAN
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link key={item.href}
                                  href={item.href}
                                  className="bg-white/40 text-black border-b-2 border-black/70 px-4 py-2 rounded-md transition-all duration-300 hover:bg-white hover:shadow-lg"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className="text-xl font-semibold tracking-tight">
                            1877-5317
                        </div>
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
