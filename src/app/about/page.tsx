import Image from "next/image";


export default function AboutPage() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <Image
                src="/image/about.jpg"
                alt="Background"
                fill
                priority
                className="object-cover -z-10"
            />

            <div className="flex-col items-center justify-center">
                <p className="text-white bg-gray-700/70 font-bold text-4xl">사업개요 표 여기에 추가</p>
            </div>
        </div>
    );
}
