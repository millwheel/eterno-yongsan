export default function GalleryPage() {
    return (
        <section className="w-full">
            <div className="bg-gray-200">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="flex flex-col">
                            <h2 className="text-3xl font-bold mb-4">에테르노 용산 VIP 갤러리 방문 예약</h2>
                            <p className="text-gray-600 mb-6">폼을 작성해 주시면 빠르게 연락드리겠습니다.</p>
                        </div>
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
            </div>
        </section>
    );
}