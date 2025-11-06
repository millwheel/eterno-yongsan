"use client"

import EnrollForm from "@/components/EnrollComponent";
import Image from "next/image";
import React from "react";

export default function EnrollPage() {

    return (
        <section className="mt-20">
            <div className="flex justify-center">
                <Image
                    src="/image/enroll_banner.jpg"
                    alt="관심고객 등록 페이지 배너"
                    width={1536}
                    height={502}
                    priority
                />
            </div>

            <EnrollForm />
        </section>
    );
}
