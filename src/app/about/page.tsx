"use client";

import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="relative flex flex-col md:flex-row px-6 md:px-10 mt-40 gap-10 justify-center mb-30">
            {/* 왼쪽 정보 섹션 */}
            <div className="max-w-xl w-full space-y-4">
                <h2 className="text-center text-2xl tracking-widest text-white bg-[#5e5555] py-2 rounded">
                    ETERNO YONGSAN
                </h2>

                <div className="space-y-3">
                    <InfoRow label="소재지" value="서울시 용산구 이태원동 34-69 (구, 크라운호텔)" />
                    <InfoRow label="지역/지구" value="제3종 일반주거지역, 중점경관관리구역" />
                    <InfoRow label="대지면적" value="4,994㎡ (약 1,510.69평)" />
                    <InfoRow label="구성" value="오피스텔 4실, 공동주택 29세대, 근린생활시설" />
                    <InfoRow label="규모" value="지하 4층 ~ 지상 25층" />
                    <InfoRow label="착공 예정" value="2025년 말 착공 예정" />
                    <InfoRow label="준공 예정" value="2028년 ~ 2029년 준공 예정" />
                    <InfoRow label="시공사" value="현대건설" />
                    <InfoRow label="거래 형태" value="분양" />
                </div>
            </div>


            {/* 오른쪽 이미지 섹션 */}
            <div className="flex justify-center items-stretch">
                <Image
                    src="/image/about.jpg"
                    alt="ETERNO YONGSAN"
                    width={600}               // 기본 기준 너비
                    height={450}              // 4:3 비율
                    className="object-cover rounded-md w-full h-auto md:w-[600px]"  // 반응형 Tailwind 제어
                    sizes="(min-width: 768px) 600px, 100vw" // 반응형 이미지 로딩 규칙
                    priority
                />
            </div>
        </div>
    );
}

function InfoRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="grid grid-cols-[120px_1fr] border border-gray-200 gap-2">
            <div className="bg-[#5e5555] text-white text-center py-2 px-3 text-sm md:text-base">
                {label}
            </div>
            <div className="bg-white text-[#5e5555] py-2 px-4 text-sm md:text-base">
                {value}
            </div>
        </div>
    );
}
