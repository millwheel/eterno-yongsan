import React from "react";
import Link from "next/link";
import {ChevronDown} from "lucide-react";

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
                    {/* Title */}
                    <h1 className="flex flex-col items-center justify-center">
                        <span className="text-6xl tracking-widest">E T E R N O</span>
                        <span className="my-4 w-64 h-[1px] bg-white/50" />
                        <span className="text-5xl">Y O N G S A N</span>
                    </h1>

                </div>

                {/* Button link */}
                <div className="absolute bottom-40 left-3 right-0 z-10 flex gap-10 justify-center">
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
            {/* Rafel Moneo Section */}
            <section>

            </section>
            {/* Rafel Moneo Section */}
            <section>

            </section>
        </div>
    );
}