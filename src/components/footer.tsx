import {FaInstagram, FaYoutube} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="mt-10 mb-10 text-sm">
            {/* top thin line */}
            <div className="max-w-6xl h-px bg-[#5e5555]/30 mx-auto" />

            {/* information */}
            <div className="max-w-6xl mx-auto px-4">
                <div className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-[1.2fr_0.6fr_1.2fr] gap-8 md:gap-0 md:divide-x md:divide-[#5e5555]/30 text-center md:text-left leading-relaxed">
                    {/* left */}
                    <div className="flex flex-col items-center md:items-end gap-1 md:pr-10">
                        <p>(주) 더부동산중개법인</p>
                        <p>대표 : 정연서 | 등록번호 : 506-88-02125</p>
                        <p>주소 : 서울시 강남구 삼성동 153-55 심스빌딩 3층</p>
                        {/* 아이콘 링크 */}
                        <div className="flex gap-5 text-2xl text-[#5e5555]">
                            <a
                                href="https://www.youtube.com/@theplacejenny"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-red-500 transition"
                            >
                                <FaYoutube />
                            </a>
                            <a
                                href="https://pf.kakao.com/_xjJxcAn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#fee500] transition"
                            >
                                <Image src="/image/kakao_icon.png" alt="카카오톡아이콘" width={22} height={22} />
                            </a>
                            <a
                                href="https://www.instagram.com/therealty_luxhome/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-pink-500 transition"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    {/* middle */}
                    <div className="flex flex-col items-center gap-3 md:px-10">
                        <p className="text-xl md:text-2xl">에테르노 용산</p>
                        <a
                            href="tel:18775317"
                            aria-label="전화 연결 1877-5317"
                            className="w-full md:w-auto tracking-wider md:tracking-widest text-base md:text-lg text-white bg-[#5e5555] px-5 py-3 md:py-1 rounded-2xl whitespace-nowrap
                            hover:bg-[#7a6f6f] transition"
                        >
                            1877-5317
                        </a>
                    </div>

                    {/* right */}
                    <div className="flex flex-col items-center md:items-start gap-1 md:pl-10">
                        <p>시행사 넥스플랜 주식회사 | 시공사 현대건설</p>
                        <p>TPI (더 프로퍼티 인터네셔녈)</p>
                        <p>서울특별시 강남구 청담동 126-8 (드림파크빌딩 5F)</p>
                    </div>
                </div>
            </div>

            {/* bottom thin line */}
            <div className="max-w-6xl h-px bg-[#5e5555]/30 mx-auto" />

            {/* notice */}
            <div className="px-4">
                <div className="max-w-6xl mx-auto py-5 text-xs text-center text-[#5e5555]/80">
                    <p>
                        홈페이지에 사용된 CG 및 이미지 컷은 이해를 돕기 위한 것이며 사업 과정 및 실제 시공에 따라 변경될 수 있습니다.
                    </p>
                </div>
            </div>
        </footer>
    );
}
