import Image from "next/image";

export default function GalleryPage() {
    return (
        <section className="mt-20">
            {/* 배너 영역 */}
            <div>
                <Image
                    src="/image/gallery_banner.jpg"
                    alt="갤러리 방문예약 페이지 배너"
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