'use client';

import { useEffect, useRef } from 'react';

type Theme = 'light' | 'dark' | 'transparent';

export default function NavThemeDriver() {
    const ioRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-nav-theme]'));
        const emit = (theme: Theme) =>
            window.dispatchEvent(new CustomEvent('gnb-theme', { detail: { theme } }));

        if (sections.length === 0) {
            emit('light');
            return;
        }

        const first = (sections[0].dataset.navTheme as Theme) ?? 'light';
        emit(first);

        const io = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort(
                        (a, b) =>
                            Math.abs(a.boundingClientRect.top + a.boundingClientRect.height / 2 - window.innerHeight / 2) -
                            Math.abs(b.boundingClientRect.top + b.boundingClientRect.height / 2 - window.innerHeight / 2)
                    );
                if (visible[0]) {
                    const t = (visible[0].target as HTMLElement).dataset.navTheme as Theme | undefined;
                    if (t) emit(t);
                }
            },
            {
                root: null,
                rootMargin: '-1% 0px -1% 0px',
                threshold: [0.2, 0.4, 0.6],
            }
        );

        sections.forEach((s) => io.observe(s));
        ioRef.current = io;

        return () => {
            io.disconnect();
            window.dispatchEvent(new CustomEvent('gnb-theme', { detail: { theme: 'light' } }));
        };
    }, []);

    return null;
}
