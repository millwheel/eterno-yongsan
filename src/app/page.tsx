"use client"

import Link from "next/link";
import { Gowun_Batang } from "next/font/google";
import {ChevronDown} from "lucide-react";
import Image from "next/image";
import {career, awards} from "@/data/rafel";
import {cards} from "@/data/home";
import NavThemeDriver from "@/components/navThemeDriver";
import EnrollForm from "@/components/EnrollComponent";
import React, {useRef} from "react";

const gowun = Gowun_Batang({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export default function Home() {
    const cardSectionRef = useRef<HTMLDivElement>(null);

    const handleScrollToCards = () => {
        if (!cardSectionRef.current) return;

        const targetY = cardSectionRef.current.getBoundingClientRect().top + window.scrollY;
        const startY = window.scrollY;
        const distance = targetY - startY;
        const duration = 1200; // 👈 천천히 이동 (ms 단위, 1000~2000 정도 추천)
        const startTime = performance.now();

        const easeInOutCubic = (t: number) =>
            t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = easeInOutCubic(progress);
            window.scrollTo(0, startY + distance * ease);
            if (elapsed < duration) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    };

    return (
        <div>
            <NavThemeDriver />
            {/* Intro section */}
            <section data-nav-theme="transparent" className="relative w-full h-screen overflow-hidden">
                {/* Background Video */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/video/main.mp4" type="video/mp4" />
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Center Content */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center">
                    <h1 className="flex flex-col items-center justify-center">
                        <span className="text-5xl md:text-6xl tracking-widest">E T E R N O</span>
                        <span className="my-4 w-64 h-[1px] bg-white/50" />
                        <span className="text-4xl md:text-5xl">Y O N G S A N</span>
                    </h1>
                </div>

                {/* Button link */}
                <div className="absolute bottom-40 left-0 right-0 z-10 flex gap-10 justify-center">
                    <Link
                        href="/enroll"
                        className="px-8 py-3 bg-[#ededed] text-base md:text-xl text-[#5e5555] rounded-3xl backdrop-blur-sm hover:bg-white transition"
                    >
                        관심고객등록
                    </Link>
                    <Link
                        href="/gallery"
                        className="px-8 py-3 bg-[#ededed] text-base md:text-xl text-[#5e5555] rounded-3xl backdrop-blur-sm hover:bg-white transition"
                    >
                        갤러리방문예약
                    </Link>
                </div>

                {/* Down arrow */}
                <div onClick={handleScrollToCards} className="absolute bottom-10 left-0 right-0 z-10 flex justify-center animate-bounce">
                    <div className="w-14 h-14 rounded-full border-2 border-white/50 flex items-center justify-center hover:bg-white/20 transition cursor-pointer">
                        <ChevronDown size={32} className="text-white opacity-80" />
                    </div>
                </div>
            </section>

            {/* 3 Card Section */}
            <section ref={cardSectionRef} data-nav-theme="dark" className="relative z-0 bg-[#a79d92] pt-30 pb-15">
                <div className="max-w-6xl mx-auto px-4">
                    {/* 3개 카드 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {cards.map((card, index) => (
                            <article key={index} className="bg-white overflow-hidden">
                                <div className="flex flex-col items-center justify-between px-3 pt-8 pb-8 text-[#5e5555]">
                                    {/* 1행: 번호 및 이름 영역 */}
                                    <div className="space-y-2 text-center">
                                        <p className="text-xl">{card.no}</p>
                                        <p className="text-[10px] tracking-widest">{card.area}</p>
                                        <h3 className="mt-6 text-2xl">{card.title}</h3>
                                    </div>

                                    {/* 2행: 이미지 영역 */}
                                    <div className="relative w-full aspect-[4/3] mt-6 mb-4">
                                        <Image
                                            src={card.img} // 예: "/image/cheongdam.jpg"
                                            alt={card.title}
                                            fill
                                            className="object-cover"
                                            sizes="(min-width: 768px) 33vw, 100vw"
                                            priority
                                        />
                                        {card.comingSoon && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span
                                                    className={`${gowun.className} text-white/90 text-4xl md:text-3xl font-semibold tracking-widest drop-shadow text-center`}
                                                >
                                                    COMING SOON
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* 3행: 주소/일정 */}
                                    <div className="text-center text-[13px] leading-relaxed mt-20">
                                        <p>{card.footer1}</p>
                                        <p className="mt-1">{card.footer2}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* 하단 ETERNO 텍스트 */}
                    <h3 className="mt-10 text-center text-white text-xl tracking-[0.35em]">
                        ETERNO
                    </h3>
                </div>
            </section>

            {/* Rafel Moneo Section */}
            <section data-nav-theme="light" className="relative w-full overflow-hidden aspect-[3/4] md:aspect-[16/9]">
                <Image
                    src="/image/home/rafel_moneo.jpg"
                    alt="Rafael Moneo"
                    fill
                    className="object-cover object-[15%_50%] md:object-center"
                    priority
                    sizes="(min-width: 768px) 100vw, 100vw"
                />
                <div className="absolute inset-0 bg-black/40"/>

                {/* 오른쪽 하단 텍스트 */}
                <div className="absolute bottom-5 md:bottom-12 right-5 md:right-12 z-10 text-white text-left leading-relaxed space-y-5">
                    {/* 이름 및 소개 */}
                    <h2 className="text-4xl tracking-widest">Rafel Moneo</h2>
                    <p className="text-sm opacity-90">
                        1937년 5월 9일, 스페인 출생<br/>
                        마드리드 공과대학교 건축학 학사
                    </p>

                    {/* 경력 및 수상 */}
                    <div className="flex flex-col md:flex-row justify-start gap-10 text-sm opacity-90 font-light">
                        {/* Career */}
                        <div>
                            <p className="font-semibold mb-3 tracking-wide">Reputations</p>
                            <ul className="space-y-1 leading-relaxed">
                                {career.map(([year, text], idx) => (
                                    <li key={`${idx}`} className="flex gap-6">
                                        <span className="w-20 text-left font-medium">{year}</span>
                                        <span className="flex-1">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Awards */}
                        <div>
                            <p className="font-semibold mb-3 tracking-wide">Awards</p>
                            <ul className="space-y-1 leading-relaxed">
                                {awards.map(([year, text], idx) => (
                                    <li key={`${idx}`} className="flex gap-6">
                                        <span className="w-20 text-left font-medium">{year}</span>
                                        <span className="flex-1">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section data-nav-theme="light">
                <EnrollForm />
            </section>
        </div>
    );
}
