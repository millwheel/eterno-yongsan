import Link from "next/link";
import {ChevronDown} from "lucide-react";
import Image from "next/image";

const career: [string, string][] = [
    ["1966", "마드리드대학교 건축학과 교수"],
    ["1970", "프린스턴대학교, 하버드대학교 스위스 로잔대학교 방문교수"],
    ["1972–1980", "바르셀로나 공과대학교 교수"],
    ["1980–1984", "마드리드 공과대학교 교수"],
    ["1985–1990", "하버드대학교 건축대학원 학과장"],
    ["1998", "스페인 왕립 예술 아카데미 회원"],
    ["2013", "미국 예술 아카데미 명예 회원"],
];

const awards: [string, string][] = [
    ["1993", "롤프쇼크 상 수상"],
    ["1996", "프리츠커 상 수상"],
    ["2001", "미스 반 데 로에 현대건축상 수상"],
    ["2003", "영국왕립건축가협회 로열 골드 메달 수상"],
    ["2012", "토마스 제퍼슨 메달 건축 부문 수상"],
    ["2012", "프린스페 데 아스투리아스 상 수상 외 다수"],
];

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
            <section className="relative z-0 bg-white py-20">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl text-[#5e5555] mb-10">3 Card Section</h2>
                    {/* 카드 내용 */}
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
