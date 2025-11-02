
export default function PrivacyPolicy() {
    return (
        <div className="border border-black/10 text-[#5e5555] bg-white p-6 rounded-md space-y-4 text-sm h-36 overflow-y-auto">
            <div>
                <p className="font-medium mb-2">1. 수집하는 개인정보의 항목</p>
                <ul className="leading-relaxed list-disc pl-5 space-y-1">
                    <li>필수 수집항목 : 성함, 연락처, 문의 내용</li>
                    <li>갤러리 방문 예약 시 수집 항목 : 성함, 연락처, 방문날짜, 방문인원, 차량번호, 문의내용</li>
                    <li>개인정보 수집 방법 : 홈페이지 상담문의 (방문 예약 방식)</li>
                </ul>
            </div>

            <div>
                <p className="font-medium mb-2">2. 개인정보의 수집 및 이용 목적</p>
                <ul className="leading-relaxed list-disc pl-5 space-y-1">
                    <li>갤러리 방문 예약 및 관리 (방문일정 확인, 주차 안내)</li>
                    <li>상담 문의에 대한 정확하고 신속한 답변 제공</li>
                    <li>문의하신 매물 정보 전달 및 거래 의사 확인 등 고객 맞춤형 서비스 제공</li>
                </ul>
            </div>

            <div>
                <p className="font-medium mb-2">3. 개인정보의 보유 및 이용 기간</p>
                <ul className="leading-relaxed list-disc pl-5 space-y-1">
                    <li>
                        보유 및 이용 기간 : 개인정보 수집 및 이용 목적이 달성된 후(상담 완료 후 또는 계약 종료 시) 지체 없이 파기합니다.
                        다만, 원활한 상담 기록 및 고객 관리, 소비자의 불만 또는 분쟁 처리에 관한 기록 보존을 위해 상담 완료일로부터 1년간 보관 후 파기합니다.
                    </li>
                    <li>
                        법령에 따른 보존 : 관련 법령(상법, 전자상거래 등에서의 소비자 보호에 관한 법률 등)의 규정에 의하여 보존할 필요성이 있는 경우에는 해당 법령에 따라 보존합니다.
                    </li>
                </ul>
            </div>

            <div>
                <p className="font-medium mb-2">4. 동의 거부 권리 및 불이익 안내</p>
                <ul className="leading-relaxed list-disc pl-5 space-y-1">
                    <li>동의 거부 권리 : 귀하는 개인정보 수집 및 이용에 동의를 거부할 권리가 있습니다.</li>
                    <li>동의 거부 시 불이익 : 동의를 거부할 경우, 문의 접수가 완료되지 않아 상담 및 방문 예약 서비스 이용이 제한될 수 있습니다.</li>
                </ul>
            </div>
        </div>
    );
}