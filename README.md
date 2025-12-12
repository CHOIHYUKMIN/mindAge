# 마음의 나이 계산기 (Mental Age Calculator)

당신의 얼굴에서 실물 나이를 추측하고, 10가지 심리 질문으로 마음의 나이를 계산하여 비교 결과를 제공하는 웹 어플리케이션입니다.

## 🎯 주요 기능

- **AI 얼굴 나이 추정**: TensorFlow.js를 사용한 클라이언트 사이드 얼굴 분석
- **심리 질문 테스트**: 10개의 질문으로 마음의 나이 계산
- **결과 비교**: 실물 나이 vs 마음의 나이 시각적 비교
- **결과 공유**: 이미지 저장 및 링크 복사 기능
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모두 지원

## 🛠️ 기술 스택

- **프론트엔드**: HTML5, CSS3, Vanilla JavaScript
- **AI/ML**: TensorFlow.js, BlazeFace
- **스타일**: Glassmorphism, 다크 테마, 그라디언트
- **공유**: html2canvas, Clipboard API, Web Share API
- **폰트**: Google Fonts (Outfit, Inter, Poppins)

## 📁 프로젝트 구조

```
mindAge/
├── index.html              # 메인 HTML
├── css/
│   ├── style.css          # 메인 스타일시트
│   └── animations.css     # 애니메이션 정의
├── js/
│   ├── app.js             # 메인 애플리케이션 로직
│   ├── ageDetection.js    # 얼굴 나이 추정
│   ├── questions.js       # 질문 데이터 및 점수 계산
│   └── share.js           # 공유 기능
└── README.md
```

## 🚀 실행 방법

### 방법 1: 직접 열기
1. `index.html` 파일을 브라우저에서 직접 열기

### 방법 2: 로컬 서버 사용 (권장)
```bash
# Python 3가 설치되어 있다면:
python -m http.server 8000

# Node.js가 설치되어 있다면:
npx serve

# 브라우저에서 http://localhost:8000 접속
```

### 방법 3: VS Code Live Server
1. VS Code에서 프로젝트 열기
2. Live Server 확장 프로그램 설치
3. `index.html` 우클릭 → "Open with Live Server"

## 🎨 디자인 특징

- **다크 테마**: 눈에 편안한 어두운 배경 (#0f0f23)
- **Glassmorphism**: 반투명 효과와 블러를 활용한 모던한 UI
- **그라디언트**: 보라(#667eea) → 핑크(#f5576c) 색상 조합
- **마이크로 인터랙션**: 부드러운 애니메이션과 호버 효과
- **반응형**: 모든 디바이스에서 최적화된 레이아웃

## 📊 질문 구성

10개의 질문으로 구성되어 있으며, 각 질문은 4개의 선택지를 가집니다:
1. 여가 활동 선호도
2. SNS 사용 패턴
3. 갈등 해결 방식
4. 소비 패턴
5. 음악 취향
6. 아침 루틴
7. 대화 주제
8. 스트레스 해소법
9. 계획성
10. 가치관

각 선택지는 18~55점의 점수를 가지며, 평균 점수가 마음의 나이가 됩니다.

## 🧪 테스트 브라우저

- ✅ Chrome (최신 버전)
- ✅ Edge (최신 버전)
- ✅ Firefox (최신 버전)
- ✅ Safari (iOS/macOS)

## ⚠️ 주의사항

### 얼굴 나이 추정 정확도
현재 버전은 **BlazeFace** 모델을 사용하며, 실제 나이 추정보다는 데모 목적으로 간단한 휴리스틱을 사용합니다.

**프로덕션 환경에서는 다음 중 하나로 교체하세요:**
- **face-api.js** (AgeGenderNet 모델 포함)
- **커스텀 TensorFlow.js 모델** (UTKFace 또는 IMDB-WIKI 데이터셋으로 훈련)
- **외부 API**: Face++, Azure Face API, AWS Rekognition

### 코드 개선 위치
`js/ageDetection.js` 파일의 `estimateAge()` 함수를 실제 나이 추정 모델로 교체하세요.

## 🔧 커스터마이징

### 색상 변경
`css/style.css`의 CSS 변수를 수정:
```css
:root {
    --accent-purple: #667eea;  /* 원하는 색상으로 변경 */
    --accent-pink: #f5576c;
}
```

### 질문 수정
`js/questions.js`에서 질문 배열 수정:
```javascript
const questions = [
    {
        id: 1,
        question: "새로운 질문?",
        options: [
            { text: "선택지 1", score: 20 },
            // ...
        ]
    }
];
```

## 📱 공유 기능

- **이미지 저장**: html2canvas로 결과 화면을 PNG로 저장
- **링크 복사**: Clipboard API로 URL 복사
- **Web Share API**: 모바일 기기에서 네이티브 공유 지원

## 🌐 배포

### GitHub Pages
```bash
# gh-pages 브랜치로 푸시
git checkout -b gh-pages
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages

# Settings → Pages에서 gh-pages 브랜치 선택
```

### Netlify / Vercel
1. GitHub 저장소 연결
2. 자동 배포 설정 (별도 빌드 필요 없음)

## 📝 라이선스

이 프로젝트는 개인 및 상업적 용도로 자유롭게 사용 가능합니다.

## 🙏 크레딧

- **TensorFlow.js**: Google
- **BlazeFace**: Google Research
- **html2canvas**: Niklas von Hertzen
- **Google Fonts**: Outfit, Inter, Poppins

---

Made with ❤️ for fun psychological testing
