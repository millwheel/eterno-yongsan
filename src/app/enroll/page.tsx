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
        </section>
    );
}
