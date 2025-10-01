export default function EnrollPage() {
    return (
        <section className="w-full">
            {/* 섹션 배경을 흰색으로 */}
            <div className="bg-gray-200">
                <div className="max-w-6xl mx-auto px-4">
                    <div aria-hidden className="h-20 md:h-24 lg:h-28" />

                    <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* 왼쪽 */}
                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl font-bold mb-4">에테르노 용산 관심고객 등록하기</h2>
                            <p className="text-gray-600 mb-6">폼을 작성해 주시면 빠르게 연락드리겠습니다.</p>
                            {/* …생략… */}
                        </div>

                        {/* 오른쪽: 여백 없이 꽉 차게 */}
                        <div>
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLSfjhI2Gc7ojagpM8abF6yV4mFTh-iuJn5PVNIFpKc-t7ArBMg/viewform?embedded=true"
                                className="w-full min-h-[1200px] border-0"
                                loading="lazy"
                            >
                                로드 중…
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
