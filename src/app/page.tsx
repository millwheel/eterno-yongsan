import React from "react";
import CallButton from "@/components/call";

const callInfos = [
    { label: "에테르노 청담", phoneNumber: "010-1111-2222" },
    { label: "에테르노 압구정", phoneNumber: "010-3333-4444" },
    { label: "에테르노 용산", phoneNumber: "010-5555-6666" },
];

export default function Home() {
    return (
        <div>
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/video/main.mp4" type="video/mp4" />
                브라우저가 동영상을 지원하지 않습니다.
            </video>
            <div className="min-h-screen flex items-center justify-center">
                {/* Overlay (버튼 컨텐츠) */}
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 translate-y-40">
                    {callInfos.map((info) => (
                        <CallButton
                            key={info.label}
                            label={info.label}
                            phoneNumber={info.phoneNumber}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}