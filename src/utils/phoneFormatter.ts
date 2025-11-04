export function formatPhone(event: React.FormEvent<HTMLInputElement>) {
    const target = event.currentTarget;
    let digits = target.value.replace(/\D/g, ""); // 숫자만

    // 02로 시작하는 지역번호 처리
    if (digits.startsWith("02")) {
        digits = digits.slice(0, 10); // 02 번호는 최대 10자리(2+4+4)

        let formatted = digits;
        if (digits.length <= 2) {
            // "02"
            formatted = digits;
        } else if (digits.length <= 6) {
            // 02-XXXX (부분 입력 상태)
            formatted = digits.replace(/^(\d{2})(\d{1,4})$/, "$1-$2");
        } else if (digits.length <= 9) {
            // 9자리: 02-000-0000
            formatted = digits.replace(/^(\d{2})(\d{3})(\d{1,4})$/, "$1-$2-$3");
        } else {
            // 10자리: 02-0000-0000
            formatted = digits.replace(/^(\d{2})(\d{4})(\d{4})$/, "$1-$2-$3");
        }

        target.value = formatted;
        return;
    }

    // 휴대폰/기타 지역번호
    digits = digits.slice(0, 11); // 최대 11자리(3+4+4)

    let formatted = digits;
    if (digits.length <= 3) {
        // 010
        formatted = digits;
    } else if (digits.length <= 7) {
        // 010-XXXX (부분 입력 상태)
        formatted = digits.replace(/^(\d{3})(\d{1,4})$/, "$1-$2");
    } else if (digits.length === 10) {
        // 10자리: 000-000-0000
        formatted = digits.replace(/^(\d{3})(\d{3})(\d{4})$/, "$1-$2-$3");
    } else if (digits.length === 11) {
        // 11자리: 000-0000-0000
        formatted = digits.replace(/^(\d{3})(\d{4})(\d{4})$/, "$1-$2-$3");
    } else {
        // (방어적) 8~9자리 등 예외적 부분 입력은 자연스럽게 3-나머지 형식
        formatted = digits.replace(/^(\d{3})(\d{1,4})(\d{0,4})$/, (_m, a, b, c) =>
            c ? `${a}-${b}-${c}` : `${a}-${b}`
        );
    }

    target.value = formatted;
}
