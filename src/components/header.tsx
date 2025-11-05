'use client';

import Link from 'next/link';
import MobileMenu from './mobilemenu';
import { useEffect, useState } from 'react';

const navItems = [
    { label: '사업개요', href: '/about' },
    { label: '관심고객등록', href: '/enroll' },
    { label: '갤러리방문예약', href: '/gallery' },
];

type Theme = 'light' | 'dark' | 'transparent';

export default function GlobalNavigationBar() {
    const [theme, setTheme] = useState<Theme>('transparent');

    useEffect(() => {
        const onTheme = (e: Event) => {
            const t = (e as CustomEvent).detail?.theme as Theme | undefined;
            if (t) setTheme(t);
        };
        window.addEventListener('gnb-theme', onTheme as EventListener);
        return () => window.removeEventListener('gnb-theme', onTheme as EventListener);
    }, []);

    const bgColor =
        theme === 'transparent'
            ? 'bg-transparent text-white'
            : theme === 'dark'
                ? 'bg-[#a79d92] text-white'
                : 'bg-[#ededed] text-[#5e5555]';

    const buttonColorOne =
        theme === 'transparent' || theme === 'dark'
            ? 'text-white border-white hover:bg-white/20'
            : 'text-[#5e5555] border-[#5e5555] hover:bg-white';

    const buttonColorTwo =
        theme === 'transparent' || theme === 'light'
            ? 'text-white bg-[#5e5555]'
            : 'text-[#5e5555] bg-white';

    return (
        <header className={`fixed w-full top-0 z-50 transition-colors duration-300 ${bgColor}`}>
            <div className="mx-auto px-4 md:px-10 h-16 flex items-center justify-between">
                <Link href="/" className={`tracking-widest ${buttonColorTwo} px-4 py-1 rounded-xl`}>
                    ETERNO
                </Link>

                <div className="hidden md:flex items-center gap-3">
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href} className={`${buttonColorOne} border px-3 py-1 rounded-xl transition-all`}>
                            {item.label}
                        </Link>
                    ))}
                    <a
                        href="tel:18775317"
                        className={`tracking-widest text-lg ${buttonColorTwo} px-3 py-1 rounded-xl whitespace-nowrap`}
                    >
                        1877-5317
                    </a>
                </div>

                <div className="md:hidden">
                    <MobileMenu navItems={navItems} />
                </div>
            </div>
        </header>
    );
}
