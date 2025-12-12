# Mental Age Calculator - 완료 및 다음 단계

## 🎉 현재까지 완료된 작업

### ✅ 개발 완료
- **AI 얼굴 나이 추정**: face-api.js로 실제 AI 기반 나이 추정 (±5-10세 정확도)
- **다국어 지원**: 한국어, English, 中文 (3개 언어)
- **자동 언어 감지**: 브라우저 언어 자동 감지 + localStorage 저장
- **반응형 디자인**: 모바일/태블릿/데스크톱 모두 지원
- **프라이버시 보호**: 100% 클라이언트 사이드 (사진 서버 전송 없음)

### ✅ GitHub 업로드 완료
- **저장소**: https://github.com/CHOIHYUKMIN/mindAge
- **브랜치**: main
- **파일**: 13개 (HTML, CSS, JS, i18n 등)
- **커밋**: "Initial commit: Mental Age Calculator with AI age detection and multilingual support (KO/EN/ZH)"

---

## 🏠 집에서 프로젝트 가져오기

### 방법 1: Git Clone (추천)

```bash
# 1. 원하는 폴더로 이동
cd C:\Users\사용자명\Documents

# 2. GitHub에서 프로젝트 복제
git clone https://github.com/CHOIHYUKMIN/mindAge.git

# 3. 프로젝트 폴더 진입
cd mindAge

# 4. 로컬 서버 실행
python -m http.server 8000

# 5. 브라우저에서 http://localhost:8000 접속
```

### 방법 2: 직접 다운로드

1. https://github.com/CHOIHYUKMIN/mindAge 접속
2. 초록색 **Code** 버튼 클릭
3. **Download ZIP** 클릭
4. 압축 해제
5. PowerShell에서 `python -m http.server 8000` 실행

---

## 📋 다음 단계 (우선순위)

### 🚀 Phase 1: 웹사이트 배포 (필수)

#### 1-A. GitHub Pages 활성화 (무료, 5분)

**위치**: https://github.com/CHOIHYUKMIN/mindAge/settings/pages

**설정**:
1. Settings → Pages 클릭
2. Source: **Deploy from a branch**
3. Branch: **main** 선택, Folder: **/ (root)**
4. **Save** 클릭
5. 3분 대기

**결과**: https://choihyukmin.github.io/mindAge/

**상태**: ⏳ **아직 안함 - 우선 처리 필요**

---

#### 1-B. 추가 페이지 작성 (AdSense 승인용, 30분)

**필요한 페이지**:

1. **Privacy Policy** (`privacy.html`)
   - 개인정보처리방침
   - AdSense 승인 필수

2. **About** (`about.html`)
   - 사이트 소개
   - SEO 및 신뢰도 향상

3. **Footer 링크 추가** (index.html)
   ```html
   <footer style="text-align: center; padding: 2rem; opacity: 0.7;">
       <a href="privacy.html">Privacy Policy</a> | 
       <a href="about.html">About</a>
   </footer>
   ```

**상태**: ⏳ **아직 안함**

---

### 💰 Phase 2: 도메인 & 수익화

#### 2-A. 커스텀 도메인 구매 (권장, $1~2)

**옵션 1: Porkbun (추천)**
- 사이트: https://porkbun.com
- 도메인: mentalage.online ($0.98/년)
- 결제: 신용카드/PayPal

**옵션 2: Freenom (무료, 리스크 있음)**
- 사이트: https://www.freenom.com
- 도메인: mentalage.tk (무료 1년)
- 단점: AdSense 승인 어려움 가능

**DNS 설정** (Porkbun 기준):
```
A 레코드: @ → 185.199.108.153
A 레코드: @ → 185.199.109.153
A 레코드: @ → 185.199.110.153
A 레코드: @ → 185.199.111.153
CNAME: www → choihyukmin.github.io.
```

**GitHub Pages 설정**:
- Settings → Pages
- Custom domain: `mentalage.online`
- Enforce HTTPS 체크

**상태**: ⏳ **아직 안함**

---

#### 2-B. Google AdSense 신청

**전제조건**:
- ✅ 커스텀 도메인 연결 완료
- ✅ Privacy Policy 페이지 있음
- ✅ About 페이지 있음
- ⏳ 일 방문자 50~100명 (1~2주 소요)

**신청 절차**:
1. https://www.google.com/adsense 접속
2. 웹사이트 URL 입력: mentalage.online
3. 코드 복사 → `<head>` 태그에 삽입
4. 승인 대기 (1~2주)

**광고 배치 위치**:
- 결과 화면 상단 (전환률 높음)
- 질문 3번 후 (참여도 높음)

**상태**: ⏳ **도메인 연결 후 진행**

---

### 📈 Phase 3: SEO & 트래픽

#### 3-A. Google Search Console

1. https://search.google.com/search-console
2. 속성 추가: mentalage.online
3. 소유권 확인
4. sitemap.xml 제출

**sitemap.xml** (프로젝트 루트에 생성):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://mentalage.online/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

**robots.txt**:
```txt
User-agent: *
Allow: /
Sitemap: https://mentalage.online/sitemap.xml
```

---

#### 3-B. Google Analytics 추가

`index.html`의 `<head>` 태그에 추가:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

#### 3-C. SNS 홍보

**전략**:
1. Instagram/Facebook: 결과 이미지 공유
2. Reddit: r/Korean, r/languagelearning
3. TikTok/YouTube Shorts: "내 마음은 XX살"
4. 커뮤니티: 클리앙, 디시인사이드

**목표**: 월 10,000 방문자 → 월 ₩50,000~₩150,000 수익

---

## 🔄 코드 수정 후 업데이트 방법

```bash
# 1. 변경사항 확인
git status

# 2. 모든 변경사항 추가
git add .

# 3. 커밋 메시지 작성
git commit -m "설명 내용 (예: Add privacy policy page)"

# 4. GitHub에 푸시
git push

# 5. GitHub Actions 자동 배포 (1~3분)
```

**배포 확인**: https://choihyukmin.github.io/mindAge/

---

## 📁 프로젝트 구조

```
mindAge/
├── index.html              # 메인 페이지
├── privacy.html            # ⏳ 추가 필요
├── about.html              # ⏳ 추가 필요
├── sitemap.xml             # ⏳ 추가 필요
├── robots.txt              # ⏳ 추가 필요
├── .gitignore
├── README.md
├── css/
│   ├── style.css           # 메인 스타일 (언어 선택 버튼 포함)
│   └── animations.css      # 애니메이션
└── js/
    ├── app.js              # 메인 로직 (i18n 통합)
    ├── ageDetection.js     # face-api.js AI 나이 추정
    ├── questions.js        # 질문 점수 로직
    ├── share.js            # 공유 기능
    ├── i18n.js             # 다국어 관리
    └── i18n/
        ├── ko.js           # 한국어 번역
        ├── en.js           # 영어 번역
        └── zh.js           # 중국어 번역
```

---

## 🎯 체크리스트

### 배포 (필수)
- [ ] GitHub Pages 활성화
- [ ] 웹사이트 접속 확인
- [ ] 모든 기능 테스트 (언어, AI, 질문, 결과)

### 승인 준비 (AdSense용)
- [ ] privacy.html 생성
- [ ] about.html 생성
- [ ] Footer 링크 추가
- [ ] sitemap.xml 생성
- [ ] robots.txt 생성

### 도메인 (선택, 권장)
- [ ] Porkbun에서 도메인 구매 ($1~2)
- [ ] DNS 설정
- [ ] GitHub Pages 커스텀 도메인 연결
- [ ] HTTPS 활성화 확인

### 수익화
- [ ] 일 방문자 50명+ 달성
- [ ] Google AdSense 신청
- [ ] 광고 코드 삽입
- [ ] 승인 대기

### SEO
- [ ] Google Search Console 등록
- [ ] Google Analytics 추가
- [ ] SNS 홍보 시작

---

## 💡 중요 링크

| 항목 | 링크 |
|------|------|
| GitHub 저장소 | https://github.com/CHOIHYUKMIN/mindAge |
| GitHub Pages 설정 | https://github.com/CHOIHYUKMIN/mindAge/settings/pages |
| 예상 웹사이트 URL | https://choihyukmin.github.io/mindAge/ |
| Porkbun | https://porkbun.com |
| Google AdSense | https://www.google.com/adsense |
| Google Search Console | https://search.google.com/search-console |

---

## 📞 문제 발생 시

### Git 관련
```bash
# 최신 코드 받기
git pull

# 충돌 발생 시
git stash          # 로컬 변경사항 임시 저장
git pull           # 최신 코드 받기
git stash pop      # 저장한 변경사항 복원
```

### 로컬 서버
```bash
# Python이 없다면
# Node.js 설치 후:
npx serve

# 또는 브라우저에서 직접 index.html 열기
# (일부 기능 제한될 수 있음)
```

---

## 🎉 최종 목표

**1주차**: GitHub Pages 배포 + 기본 페이지 완성  
**2주차**: 도메인 연결 + AdSense 신청  
**3주차**: SNS 홍보 시작  
**4주차**: 트래픽 증가 + AdSense 승인  
**1개월 후**: 월 ₩50,000~₩150,000 수익 목표!

화이팅! 🚀
