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
                  w-28 h-28 md:w-36 md:h-36 rounded-full
                  bg-gray-200/30 hover:bg-white/70
                  text-black/80 font-medium text-sm md:text-base
                  shadow-lg backdrop-blur
                  border border-white/30
                  transition focus:outline-none focus:ring-2 focus:ring-white/60
                  cursor-pointer
            "
        >
            {label}
        </button>
    );
}