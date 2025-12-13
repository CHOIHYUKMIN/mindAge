# 카카오톡 공유 기능 설정 가이드 📱

## 변경 사항 ✅

카카오톡 공유 시 바로가기 링크가 제대로 작동하도록 수정했습니다.

### 1. 새로 추가된 파일
- **`js/config.js`**: 배포 URL 및 앱 설정을 한 곳에서 관리

### 2. 수정된 파일
- **`js/share.js`**: config.js를 사용하여 공유 URL 자동 감지
- **`index.html`**: config.js 스크립트 추가

## 배포 전 필수 설정 ⚙️

### 1. 배포 URL 설정
`js/config.js` 파일을 열고 **PRODUCTION_URL**을 실제 배포 URL로 변경하세요:

```javascript
const CONFIG = {
    // 실제 배포 URL로 변경하세요 ⬇️
    PRODUCTION_URL: 'https://yourusername.github.io/mindAge/',
    // ...
};
```

#### 배포 플랫폼별 URL 예시:
- **GitHub Pages**: `https://yourusername.github.io/mindAge/`
- **Netlify**: `https://your-app.netlify.app/`
- **Vercel**: `https://your-app.vercel.app/`
- **Custom Domain**: `https://yourdomain.com/`

### 2. Open Graph 이미지 준비
카카오톡 공유 시 표시될 이미지를 준비하세요:
- 파일명: `og-image.png`
- 위치: 프로젝트 루트 폴더
- 권장 크기: 1200 x 630 픽셀
- 형식: PNG 또는 JPG

## 작동 방식 🔄

### URL 자동 감지
`share.js`는 현재 실행 환경을 자동으로 감지합니다:

1. **`file://` 프로토콜** (파일에서 직접 열기)
   - → `CONFIG.PRODUCTION_URL` 사용
   - 배포 URL을 설정하지 않으면 카카오톡 공유가 제대로 작동하지 않음

2. **`localhost` / `127.0.0.1`** (로컬 서버)
   - → 현재 로컬 URL 사용
   - 테스트 목적으로 사용

3. **프로덕션 도메인**
   - → 현재 URL 자동 사용
   - 배포 후에는 자동으로 올바른 URL 사용

## 카카오톡 공유 내용 📤

공유 시 포함되는 정보:
```
제목: 🎯 마음의 나이 계산기

내용: 
나의 실물 나이는 XX세, 마음의 나이는 YY세!
[차이 텍스트]

[결과 메시지]

버튼: 
📍 나도 테스트하기 🎈
   → 앱 홈페이지로 이동
```

## 테스트 방법 🧪

### 1. 로컬 서버에서 테스트
```bash
# Python 사용
python -m http.server 8000

# 또는 Node.js 사용
npx serve

# 브라우저에서 http://localhost:8000 열기
```

### 2. 카카오톡 공유 테스트
1. 테스트 완료 후 결과 페이지에서 "카카오톡" 버튼 클릭
2. 카카오톡 미리보기에서 링크 확인
3. "나도 테스트하기" 버튼이 제대로 작동하는지 확인

### 3. 실제 배포 후 테스트
1. GitHub Pages / Netlify / Vercel 등에 배포
2. 배포된 URL로 접속
3. 카카오톡 공유 기능 재테스트

## 문제 해결 🔧

### Q: 카카오톡 공유 시 링크가 작동하지 않아요
**A**: `js/config.js`에서 `PRODUCTION_URL`을 실제 배포 URL로 변경했는지 확인하세요.

### Q: 이미지가 표시되지 않아요
**A**: 
1. `og-image.png` 파일이 프로젝트 루트에 있는지 확인
2. 이미지 크기가 1200x630 픽셀인지 확인
3. 카카오톡 캐시를 지우고 다시 시도

### Q: localhost에서 테스트할 수 있나요?
**A**: 네! 로컬 서버를 실행하면 자동으로 localhost URL을 사용합니다. 단, 실제 카카오톡 공유는 웹에 배포 후 제대로 작동합니다.

## 다음 단계 🚀

1. ✅ `js/config.js`에서 배포 URL 설정
2. ✅ `og-image.png` 이미지 준비
3. ✅ GitHub Pages / Netlify / Vercel에 배포
4. ✅ 실제 환경에서 카카오톡 공유 테스트

## 참고 사항 📝

- 카카오톡 공유는 HTTPS 프로토콜을 권장합니다
- GitHub Pages는 자동으로 HTTPS를 제공합니다
- 커스텀 도메인 사용 시 SSL 인증서가 필요합니다
