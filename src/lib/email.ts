import emailjs from '@emailjs/browser';

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const publicKey  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export async function sendEnrollEmail(payload: {
    name: string;
    phone: string;
    message: string;
}) {
    const title = `에테르노 용산 관심 고객 등록 요청이 왔습니다. - ${payload.name}`;
    const body =
        `성함: ${payload.name}\n` +
        `연락처: ${formatPhone(payload.phone)}\n` +
        `문의 내용: ${payload.message}`;

    return emailjs.send(
        serviceId,
        templateId,
        {
            title,
            time: nowKST(),
            name: payload.name,
            message: body,
        },
        publicKey
    );
}

export async function sendGalleryEmail(payload: {
    name: string;
    phone: string;
    visitDate: string;
    visitors: number;
    carNumber: string;
    message: string;
}) {
    const title = `에테르노 용산 갤러리 방문 예약 요청이 왔습니다. - ${payload.name}`;
    const body =
        `성함: ${payload.name}\n` +
        `연락처: ${formatPhone(payload.phone)}\n` +
        `방문날짜: ${payload.visitDate}\n` +
        `방문인원: ${payload.visitors}명\n` +
        `차량번호: ${payload.carNumber || '-' }\n` +
        `문의 내용: ${payload.message}`;

    return emailjs.send(
        serviceId,
        templateId,
        {
            title,
            time: nowKST(),
            name: payload.name,
            message: body,
        },
        publicKey
    );
}

/** 공통: 전화번호 하이픈 포맷(10~11자리만 처리) */
function formatPhone(phone: string): string {
    const digits = phone.replace(/\D/g, '');
    if (digits.length === 10) {
        if (digits.startsWith('02')) {
            return `02-${digits.slice(2, 6)}-${digits.slice(6)}`;
        }
        return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
    }
    if (digits.length === 11) {
        return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
    }
    // 그 외는 원본 반환
    return phone;
}