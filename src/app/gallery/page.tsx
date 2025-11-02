"use client";

import Image from "next/image";
import PrivacyPolicy from "@/components/privacyPolicy";
import { useRouter } from "next/navigation";
import React from "react";
import {formatPhoneInput} from "@/utils/formatPhoneInput";
import Contact from "@/components/contact";

export default function GalleryPage() {
    const router = useRouter();

    const isBeforeToday = (dateString: string): boolean => {
        const selectedDate = new Date(dateString);
        const today = new Date();

        today.setHours(0, 0, 0, 0);
        selectedDate.setHours(0, 0, 0, 0);

        return selectedDate < today;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const name = String(formData.get("name") || "").trim();
        const phoneRaw = String(formData.get("phone") || "").trim();
        const visitDate = String(formData.get("visitDate") || "").trim();
        const visitorsRaw = String(formData.get("visitors") || "").trim();
        const carNumber = String(formData.get("carNumber") || "").trim();
        const message = String(formData.get("message") || "").trim();
        const agree = formData.get("agree");

        const phoneDigits = phoneRaw.replace(/\D/g, "");
        const visitors = Number(visitorsRaw);

        if (!name) {
            alert("성함을 입력해주세요.");
            return;
        }

        if (!phoneRaw) {
            alert("연락처를 입력해주세요.");
            return;
        }
        if (phoneDigits.length < 10 || phoneDigits.length > 11) {
            alert("연락처 형식이 올바르지 않습니다. 숫자 10~11자리로 입력해주세요.");
            return;
        }

        if (!visitDate) {
            alert("방문날짜를 선택해주세요.");
            return;
        }
        if (isBeforeToday(visitDate)) {
            alert("오늘 이후의 날짜로 선택해주세요.");
            return;
        }


        if (!visitorsRaw) {
            alert("방문인원을 입력해주세요.");
            return;
        }
        if (!Number.isInteger(visitors) || visitors <= 0) {
            alert("방문인원은 1명 이상 정수로 입력해주세요.");
            return;
        }

        if (!message) {
            alert("문의 내용을 입력해주세요.");
            return;
        }

        if (!agree) {
            alert("개인정보 수집 및 이용에 동의해주세요.");
            return;
        }

        alert("등록되었습니다.");
        router.push("/");
    };

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

            <div className="my-10">
                <h1 className="text-center text-2xl font-semibold">
                    에테르노 용산 VIP 갤러리 방문예약
                </h1>
            </div>

            {/* 폼 영역 */}
            <div className="max-w-3xl mx-auto mt-10 px-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* 성명 / 연락처 */}
                    <div className="grid grid-cols-[1fr_1.5fr] gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-base text-[#5e5555]">성명</label>
                            <div className="border border-black/10 bg-white rounded-md px-4 py-3">
                                <input
                                    type="text"
                                    placeholder="성함"
                                    className="w-full outline-none"
                                    name="name"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-base text-[#5e5555]">연락처</label>
                            <div className="border border-black/10 bg-white rounded-md px-4 py-3">
                                <input
                                    type="tel"
                                    inputMode="numeric"
                                    placeholder="핸드폰 번호를 입력해주세요"
                                    className="w-full outline-none"
                                    name="phone"
                                    onInput={formatPhoneInput}
                                />
                            </div>
                        </div>
                    </div>

                    {/* 방문날짜 / 방문인원 / 차량번호 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-base text-[#5e5555]">방문날짜</label>
                            <div className="border border-black/10 bg-white rounded-md px-4 py-3">
                                <input
                                    type="date"
                                    className="w-full outline-none"
                                    name="visitDate"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-base text-[#5e5555]">방문인원</label>
                            <div className="border border-black/10 bg-white rounded-md px-4 py-3">
                                <input
                                    type="number"
                                    min={1}
                                    step={1}
                                    placeholder="입력해주세요"
                                    className="w-full outline-none"
                                    name="visitors"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-base text-[#5e5555]">차량번호</label>
                            <div className="border border-black/10 bg-white rounded-md px-4 py-3">
                                <input
                                    type="text"
                                    placeholder="입력해주세요"
                                    className="w-full outline-none"
                                    name="carNumber"
                                />
                            </div>
                        </div>
                    </div>

                    {/* 문의 내용 */}
                    <div className="flex flex-col gap-2">
                        <label className="text-base text-[#5e5555]">문의 내용</label>
                        <div className="border border-black/10 bg-white rounded-md px-4 py-3">
                          <textarea
                              name="message"
                              placeholder="입력해주세요"
                              className="w-full h-28 outline-none resize-none"
                          />
                        </div>
                    </div>

                    {/* 개인정보 수집 및 이용 동의 */}
                    <div className="flex flex-col gap-3">
                        <p className="text-base text-[#5e5555]">개인정보 수집 및 이용 동의</p>

                        <PrivacyPolicy />

                        <div className="flex items-center gap-2 text-sm text-[#5e5555]">
                            <input
                                id="agree"
                                name="agree"
                                type="checkbox"
                                className="h-4 w-4 rounded border-black/20"
                            />
                            <label htmlFor="agree">개인정보 수집 및 이용에 동의합니다.</label>
                        </div>
                    </div>

                    {/* 버튼 */}
                    <div className="flex">
                        <button
                            type="submit"
                            className="px-5 py-2 rounded-2xl text-xl bg-[#5e5555] text-white tracking-widest cursor-pointer hover:bg-[#7a6f6f] transition"
                        >
                            등록하기
                        </button>
                    </div>

                    <div className="mt-10">
                        <Contact />
                    </div>
                </form>
            </div>
        </section>
    );
}
