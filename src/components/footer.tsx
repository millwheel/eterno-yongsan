

export default function Footer() {
    return (
        <footer className="mt-10 mb-10 text-sm text-[#5e5555] text-center">

            <div className="max-w-6xl h-[1px] bg-[#5e5555]/30 mx-auto" />

            {/* information */}
            <div className="flex justify-center py-10">
                {/* information - left */}
                <div className="flex flex-col items-end">
                    <p>(주) 더부동산중개법인</p>
                    <p>대표 : 정연서 | 등록번호 : 506-88-02125</p>
                    <p>주소 : 서울시 강남구 삼성동 153-55 심스빌딩 3층</p>
                    {/* 아이콘 링크 추가 */}
                    <div>

                    </div>
                </div>

                <div className="w-px bg-[#5e5555]/30 mx-10" />
                {/* information - middle */}
                <div className="flex flex-col gap-3">
                    <p className="text-2xl">에테르노 용산</p>
                    <a
                        href="tel:18775317"
                        className="tracking-widest text-lg text-white bg-[#5e5555] px-4 py-1 rounded-2xl whitespace-nowrap hover:bg-[#7a6f6f] transition"
                    >
                        1877-5317
                    </a>
                </div>

                <div className="w-px bg-[#5e5555]/30 mx-10" />
                {/* information - right */}
                <div className="flex flex-col items-start">
                    <p>시행사 넥스플랜 주식회사 | 시공사 현대건설</p>
                    <p>TPI (더 프로퍼티 인터네셔녈)</p>
                    <p>서울특별시 강남구 청담동 126-8 (드림파크빌딩 5F)</p>
                </div>
            </div>

            <div className="max-w-6xl h-[1px] bg-[#5e5555]/30 mx-auto" />

            <div className="py-5 text-xs">
                <p>
                    홈페이지에 사용된 CG 및 이미지 컷은 이해를 돕기 위한 것이며 사업 과정 및 실제 시공에 따라 변경될 수 있습니다.
                </p>
            </div>
        </footer>
    )
}