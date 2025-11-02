import Link from "next/link";
import {ChevronDown} from "lucide-react";
import Image from "next/image";
import {career, awards} from "@/data/rafel";
import {cards} from "@/data/home";

export default function Home() {
    return (
        <div>
            {/* Intro section */}
            <section className="relative w-full h-screen overflow-hidden">
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
                        <span className="text-6xl tracking-widest">E T E R N O</span>
                        <span className="my-4 w-64 h-[1px] bg-white/50" />
                        <span className="text-5xl">Y O N G S A N</span>
                    </h1>
                </div>

                {/* Button link */}
                <div className="absolute bottom-40 left-0 right-0 z-10 flex gap-10 justify-center">
                    <Link
                        href="/enroll"
                        className="px-8 py-3 bg-[#ededed] text-xl text-[#5e5555] rounded-3xl backdrop-blur-sm hover:bg-white transition"
                    >
                        관심고객등록
                    </Link>
                    <Link
                        href="/gallery"
                        className="px-8 py-3 bg-[#ededed] text-xl text-[#5e5555] rounded-3xl backdrop-blur-sm hover:bg-white transition"
                    >
                        갤러리방문예약
                    </Link>
                </div>

                {/* Down arrow */}
                <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center animate-bounce">
                    <div className="w-14 h-14 rounded-full border-2 border-white/50 flex items-center justify-center hover:bg-white/20 transition cursor-pointer">
                        <ChevronDown size={32} className="text-white opacity-80" />
                    </div>
                </div>
            </section>

            {/* 3 Card Section */}
            <section className="relative z-0 bg-[#a79d92] pt-25 pb-15">
                <div className="max-w-6xl mx-auto px-4">
                    {/* 3개 카드 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {cards.map((card, index) => (
                            <article
                                key={index}
                                className="bg-white overflow-hidden"
                            >
                                {/* 텍스트(상단) / 이미지(하단) 동일 높이 확보 */}
                                <div className="grid grid-rows-2">
                                    {/* 상단 텍스트 영역 */}
                                    <div className="flex flex-col items-center justify-between px-10 pt-10 pb-6 text-[#5e5555]">
                                        <div className="space-y-2 text-center">
                                            <p className="text-xl">{card.no}</p>
                                            <p className="text-[10px] tracking-widest">{card.area}</p>
                                            <h3 className="mt-6 text-2xl">{card.title}</h3>
                                        </div>

                                        {/* 이미지 영역 */}
                                        <div className="relative">
                                            <Image
                                                src={card.img}
                                                alt={card.title}
                                                fill
                                                className="object-cover"
                                                sizes="(min-width: 768px) 33vw, 100vw"
                                                priority
                                            />
                                        </div>

                                        {/* 주소/일정 (카드 내부 하단) */}
                                        <div className="text-center text-[13px] mt-10 leading-relaxed">
                                            <p>{card.footer1}</p>
                                            <p className="mt-1">{card.footer2}</p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* 하단 ETERNO 텍스트 */}
                    <h3 className="mt-10 text-center text-white text-2xl tracking-[0.35em]">
                        ETERNO
                    </h3>
                </div>
            </section>

            {/* Rafel Moneo Section */}
            <section className="relative w-full aspect-[16/9]">
                <Image
                    src="/image/home/rafel_moneo.jpg"
                    alt="Rafael Moneo"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />

                {/* 오른쪽 하단 텍스트 */}
                <div className="absolute bottom-20 right-20 z-10 text-white text-left leading-relaxed space-y-5">
                    {/* 이름 및 소개 */}
                    <h2 className="text-4xl tracking-widest">Rafel Moneo</h2>
                    <p className="text-sm opacity-90">
                        1937년 5월 9일, 스페인 출생<br />
                        마드리드 공과대학교 건축학 학사
                    </p>

                    {/* 경력 및 수상 */}
                    <div className="hidden md:flex justify-start gap-10 text-sm opacity-90 font-light">
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
        </div>
    );
}
