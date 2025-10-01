import Image from "next/image";

export default function GalleryPage() {
    return (
        <section className="w-full">
            {/* 배너 영역 */}
            <div className="relative w-full h-64 md:h-72">
                <Image
                    src="/image/gallery.jpg"
                    alt="갤러리 방문 예약"
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
                            src="https://docs.google.com/forms/d/e/1FAIpQLSeNZmx7gwLP804qQI0Rumeh8BK9EIxy9FqydfSCn1bnugBv2A/viewform?embedded=true"
                            className="w-full min-h-[1600px] border-0"
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