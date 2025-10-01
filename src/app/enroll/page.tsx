import Image from "next/image";

export default function EnrollPage() {
    return (
        <section className="w-full">
            {/* 배너 영역 */}
            <div className="relative w-full h-64 md:h-72">
                <Image
                    src="/image/enroll.jpg"
                    alt="관심고객 등록 페이지 배너"
                    fill
                    priority
                    className="object-cover"
                />
                {/* 배너 위에 텍스트를 얹고 싶으면 */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">

                </div>
            </div>
            {/* 본문 영역 */}
            <div className="">
                <div className="max-w-6xl mx-auto px-4">
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
        </section>
    );
}
