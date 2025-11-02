import React from "react";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            {/* Intro section */}
            <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
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

                <div className="absolute inset-0 bg-black/30" />

                {/* Center Content */}
                <div className="relative z-10 flex flex-col items-center text-white text-center gap-20">
                    <h1 className="flex flex-col items-center justify-center">
                        <span className="text-6xl ">E T E R N O</span>
                        <span className="my-4 w-80 h-[1px] bg-white/50" />
                        <span className="text-4xl tracking-widest">YONGSAN</span>
                    </h1>

                    <div className="mt-10 flex flex-col md:flex-row gap-10">
                        <Link
                            href="/enroll"
                            className="px-8 py-3 bg-white/50 text-lg text-[#5e5555] rounded-3xl backdrop-blur-sm hover:bg-white transition"
                        >
                            관심고객등록
                        </Link>
                        <Link
                            href="/gallery"
                            className="px-8 py-3 bg-white/50 text-lg text-[#5e5555] rounded-3xl backdrop-blur-sm hover:bg-white transition"
                        >
                            갤러리방문예약
                        </Link>
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