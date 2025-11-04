export function nowKST(): string {
    const d = new Date();
    // 한국 시간 기준 포맷
    return d.toLocaleString('ko-KR', {
        timeZone: 'Asia/Seoul',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    }).replace(/\./g, '-').replace(/\s+/g, ' ').trim();
}