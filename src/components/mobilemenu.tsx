"use client";

import { useState } from "react";
import Link from "next/link";

type NavItem = {
    label: string;
    href: string;
};

export default function MobileMenu({ navItems }: { navItems: NavItem[] }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Hamburger button */}
            <button
                type="button"
                aria-label="메뉴 열기"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-black/10 bg-white/60 hover:bg-white transition cursor-pointer"
            >
                <svg
                    className="h-5 w-5 text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    {open ? (
                        <path d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path d="M3 6h18M3 12h18M3 18h18" />
                    )}
                </svg>
            </button>

            {/* Drawer */}
            {open && (
                <div className="md:hidden">
                    {/* Drawer panel */}
                    <nav
                        className="fixed right-0 top-16 w-full bg-white shadow-xl border-l border-black/10 p-5 flex flex-col gap-3"
                        role="dialog"
                        aria-label="모바일 메뉴"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="w-full text-center py-3 rounded-md border font-semibold border-black/10 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 transition"
                                onClick={() => setOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="tel:18775317"
                            className="w-full text-center py-3 rounded-md bg-black text-white font-semibold hover:opacity-90 transition"
                            onClick={() => setOpen(false)}
                        >
                            전화 상담
                        </Link>
                    </nav>
                </div>
            )}
        </>
    );
}
