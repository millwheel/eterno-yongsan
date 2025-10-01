"use client";

import React from "react";

function isMobileUA() {
    if (typeof navigator === "undefined") return false;
    return /Android|iPhone|iPad|iPod|Mobile|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    );
}

type CallButtonProps = {
    label: string;
    phoneNumber: string;
};

export default function CallButton({ label, phoneNumber }: CallButtonProps) {
    const onClick = () => {
        const phoneNumberTel = phoneNumber.replaceAll("-", "");
        if (isMobileUA()) {
            window.location.href = `tel:${phoneNumberTel}`;
        } else {
            alert(`${label} 전화번호: ${phoneNumber}`);
        }
    };

    return (
        <button
            onClick={onClick}
            aria-label={`${label} 전화걸기`}
            className="
                  w-30 h-30 md:w-40 md:h-40 rounded-full
                  bg-gray-200/40 hover:bg-gray-200/90 hover:shadow-xl
                  text-black/80 font-medium text-sm md:text-base
                  shadow-lg backdrop-blur
                  transition focus:outline-none focus:ring-2 focus:ring-white/60
                  cursor-pointer
            "
        >
            {label}
        </button>
    );
}