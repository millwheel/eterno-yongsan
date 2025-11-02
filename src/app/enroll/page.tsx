import Image from "next/image";

export default function EnrollPage() {
    return (
        <section className="mt-20">
            {/* 배너 영역 */}
            <div>
                <Image
                    src="/image/enroll_banner.jpg"
                    alt="관심고객 등록 페이지 배너"
                    width={1536}
                    height={502}
                    priority
                />
            </div>
            {/*폼 영역*/}
            <div className="max-w-4xl mx-auto mt-10 px-6">

            </div>
        </section>
    );
}
