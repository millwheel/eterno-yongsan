import React from "react";
import CallButton from "@/components/call";

const callInfos = [
    { label: "에테르노 청담", phoneNumber: "010-1111-2222" },
    { label: "에테르노 압구정", phoneNumber: "010-3333-4444" },
    { label: "에테르노 용산", phoneNumber: "010-5555-6666" },
];

export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                {callInfos.map((info) => (
                    <CallButton
                        key={info.label}
                        label={info.label}
                        phoneNumber={info.phoneNumber}
                    />
                ))}
            </div>
        </div>
    );
}