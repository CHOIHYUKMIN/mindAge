// Korean translations
const translations_ko = {
    // Start Screen
    title: "당신의 마음은<br>몇 살인가요?",
    subtitle: "AI가 당신의 얼굴로 실물 나이를 추측하고,<br>10가지 질문으로 마음의 나이를 알려드려요",
    btnStart: "테스트 시작하기",

    // Upload Screen
    uploadTitle: "사진 업로드",
    uploadDesc: "정면 얼굴이 잘 보이는 사진을 올려주세요",
    uploadText: "클릭하거나 이미지를 드래그하세요",
    btnChange: "사진 변경",
    btnNext: "다음 단계",

    // Analyzing
    analyzing: "AI가 당신의 얼굴을 분석하고 있어요...",
    resultLabel: "분석 완료!",
    resultText: "당신의 실물 나이는",
    resultTextAge: "세입니다",

    // Questions
    progressText: "{current} / {total}",

    // Result Screen
    resultTitle: "결과 분석",
    physicalAgeLabel: "실물 나이",
    mentalAgeLabel: "마음의 나이",
    ageUnit: "세",

    // Result Messages (9 different cases based on age difference)
    resultVeryYoung: "완전 어린왕자/공주! 영원한 10대 감성이네요! 🌟",
    resultYoung: "발랄한 청춘! 젊음이 넘쳐흘러요! ✨",
    resultFresh: "생기발랄! 밝고 긍정적인 에너지가 느껴져요!",
    resultCute: "마음만은 소녀/소년! 귀여운 영혼이에요!",
    resultBalance: "완벽한 밸런스! 나이를 잘 먹고 계시네요!",
    resultMature: "안정적인 어른! 성숙한 매력이 있어요!",
    resultWise: "노련한 현자! 깊이 있는 영혼입니다!",
    resultExpert: "인생의 고수! 풍부한 경험이 묻어나요!",
    resultMentor: "살아있는 지혜! 당신은 인생의 멘토입니다!",

    // Share
    btnDownload: "이미지 저장",
    btnCopyLink: "링크 복사",
    btnRestart: "다시 테스트하기",
    linkCopied: "✓ 링크가 복사되었습니다!",

    // Errors
    errorNoFace: "얼굴을 찾을 수 없습니다. 정면 얼굴이 잘 보이는 사진을 올려주세요.",
    errorDownload: "이미지 저장에 실패했습니다. 다시 시도해주세요.",
    errorCopyLink: "링크 복사에 실패했습니다.",

    // Questions
    questions: [
        {
            question: "주말에 가장 하고 싶은 활동은?",
            options: [
                "🎉 친구들과 클럽/페스티벌 가기",
                "📚 카페에서 책 읽기",
                "🎬 집에서 Netflix 보기",
                "⛰️ 등산이나 골프"
            ]
        },
        {
            question: "SNS를 주로 어떻게 사용하시나요?",
            options: [
                "📱 릴스/쇼츠 무한 스크롤",
                "👥 친구들 게시물 구경",
                "📰 정보/뉴스 검색",
                "🚫 거의 사용 안 함"
            ]
        },
        {
            question: "친구와 의견 충돌이 생기면?",
            options: [
                "😤 감정적으로 바로 말한다",
                "⏰ 일단 시간을 두고 생각한다",
                "💬 대화로 차분히 해결한다",
                "🤝 내가 양보한다"
            ]
        },
        {
            question: "갖고 싶은 물건이 생겼을 때?",
            options: [
                "💳 바로 충동구매!",
                "🔍 SNS에서 후기 찾아보기",
                "🤔 필요한지 며칠 고민",
                "💰 가격 비교 후 세일 기다리기"
            ]
        },
        {
            question: "주로 듣는 음악 장르는?",
            options: [
                "🎵 최신 힙합/EDM/K-POP",
                "🎸 인디/팝",
                "🎹 발라드/재즈",
                "🎼 클래식/트로트"
            ]
        },
        {
            question: "당신의 아침 루틴은?",
            options: [
                "😴 알람 5번 미루고 일어남",
                "📱 일어나자마자 폰 확인",
                "🧘 가볍게 스트레칭",
                "🏃 일찍 일어나 산책/운동"
            ]
        },
        {
            question: "친구들과 주로 하는 대화 주제는?",
            options: [
                "💘 연애, 소문, 드라마",
                "🎮 취미, 관심사",
                "💼 업무, 커리어",
                "💪 건강, 재테크, 부동산"
            ]
        },
        {
            question: "스트레스 받을 때 주로?",
            options: [
                "👯 친구들 만나서 수다",
                "🎮 게임/유튜브",
                "🏃 운동/산책",
                "🧘 명상/조용히 휴식"
            ]
        },
        {
            question: "여행을 계획할 때?",
            options: [
                "✈️ 계획 없이 즉흥적으로",
                "🏨 대충 숙소만 예약",
                "📝 주요 일정 정리",
                "📋 시간대별 상세 계획표 작성"
            ]
        },
        {
            question: "인생에서 가장 중요한 것은?",
            options: [
                "😊 재미와 즐거움",
                "🌟 새로운 경험과 도전",
                "⚖️ 안정과 균형",
                "🎯 성취와 책임"
            ]
        }
    ]
};

// Export for use in i18n.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations_ko;
}
