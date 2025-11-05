"use client"

import {useRouter} from "next/navigation";
import React from "react";
import {sendEnrollEmail} from "@/lib/email";
import {formatPhone} from "@/utils/phoneFormatter";
import PrivacyPolicy from "@/components/privacyPolicy";
import Contact from "@/components/contact";

export default function EnrollForm() {
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const name = String(formData.get("name") || "").trim();
        const phoneRaw = String(formData.get("phone") || "").trim();
        const message = String(formData.get("message") || "").trim();
        const agree = formData.get("agree");

        const phoneDigits = phoneRaw.replace(/\D/g, "");

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

        if (!message) {
            alert("문의 내용을 입력해주세요.");
            return;
        }

        if (!agree) {
            alert("개인정보 수집 및 이용에 동의해주세요.");
            return;
        }

        try {
            await sendEnrollEmail({
                name,
                phone: phoneRaw,
                message,
            });
            alert("등록되었습니다.");
            router.push("/");
        } catch (e) {
            console.error(e);
            alert("이메일 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
        }
    };

    return (
        <div>
            <div className="my-10">
                <h1 className="text-center text-2xl font-semibold">에테르노 용산 VIP 관심고객 등록하기</h1>
            </div>

            <div className="max-w-3xl mx-auto mt-10 px-6">
                <form
                    action=""
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    {/* 이름 / 연락처 */}
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
                                    onInput={formatPhone}
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
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-5 py-2 rounded-2xl text-xl bg-[#5e5555] text-white tracking-widest cursor-pointer
                            hover:bg-[#7a6f6f] transition"
                        >
                            등록하기
                        </button>
                    </div>

                    <div className="mt-10">
                        <Contact />
                    </div>
                </form>
            </div>
        </div>
    );
}
