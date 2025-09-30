import Link from "next/link";

const navItems = [
    { label: "사업개요", href: "about" },
    { label: "관심고객등록", href: "enroll" },
    { label: "갤러리방문예약", href: "gallery" },
];

export default function GlobalNavigationBar() {
    return (
        <header className="fixed left-0 right-0 top-0 z-20">
            <div className="backdrop-blur-md border-b border-white/10 bg-gray-200">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    {/* Left Logo */}
                    <Link href="/" className="font-semibold tracking-widest text-black">
                        ETERNO YONGSAN
                    </Link>

                    {/* Right Navigation */}
                    <div className="flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="bg-white/40 text-black border-1 border-b-2 px-4 py-2 rounded-md transition-all duration-300 hover:bg-white hover:shadow-lg"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <span className="text-xl font-semibold">
                            1877-5317
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
}
