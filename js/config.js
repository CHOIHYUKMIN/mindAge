// Configuration for deployment
const CONFIG = {
    // 실제 배포 URL을 여기에 설정하세요
    // GitHub Pages 예시: 'https://yourusername.github.io/mindAge/'
    // Netlify 예시: 'https://your-app.netlify.app/'
    // Vercel 예시: 'https://your-app.vercel.app/'
    PRODUCTION_URL: 'https://choihyukmin.github.io/', // GitHub Pages URL

    // 카카오톡 JavaScript Key
    KAKAO_KEY: '2b78d22d6aa77c493c1ce9ada6aee71b',

    // Open Graph 이미지 URL (절대 경로)
    OG_IMAGE: 'https://choihyukmin.github.io/og-image.png',

    // 앱 정보
    APP_NAME: '마음의 나이 계산기',
    APP_TITLE: '🎯 마음의 나이 계산기',
    APP_DESCRIPTION: 'AI가 당신의 얼굴로 실물 나이를 추측하고, 10가지 질문으로 마음의 나이를 알려드려요',

    // 버전 관리 (한 곳에서 관리)
    VERSION: '4.0.0',

    // 시즌별 테마 설정
    SEASONAL_THEMES: {
        christmas: {
            name: 'Christmas Edition 🎄',
            emoji: { start: '🎄', end: '🎅' },
            startDate: { month: 12, day: 1 },   // 12월 1일
            endDate: { month: 12, day: 25 }     // 12월 25일
        },
        newyear: {
            name: 'New Year Edition 🎆',
            emoji: { start: '🎆', end: '🌅' },
            startDate: { month: 12, day: 26 },  // 12월 26일
            endDate: { month: 1, day: 15 }      // 1월 15일
        },
        valentine: {
            name: 'Valentine Edition 💝',
            emoji: { start: '💝', end: '💕' },
            startDate: { month: 2, day: 1 },    // 2월 1일
            endDate: { month: 2, day: 14 }      // 2월 14일
        },
        spring: {
            name: 'Spring Edition 🌸',
            emoji: { start: '🌸', end: '🌺' },
            startDate: { month: 3, day: 1 },    // 3월 1일
            endDate: { month: 5, day: 31 }      // 5월 31일
        },
        summer: {
            name: 'Summer Edition 🌊',
            emoji: { start: '🌊', end: '☀️' },
            startDate: { month: 6, day: 1 },    // 6월 1일
            endDate: { month: 8, day: 31 }      // 8월 31일
        },
        autumn: {
            name: 'Autumn Edition 🍂',
            emoji: { start: '🍂', end: '🍁' },
            startDate: { month: 9, day: 1 },    // 9월 1일
            endDate: { month: 11, day: 30 }     // 11월 30일
        }
    },

    // 현재 시즌 자동 감지
    getCurrentSeason() {
        const now = new Date();
        const month = now.getMonth() + 1; // 0-11 → 1-12
        const day = now.getDate();

        for (const [key, theme] of Object.entries(this.SEASONAL_THEMES)) {
            const start = theme.startDate;
            const end = theme.endDate;

            // 연말-연초 처리 (12월 26일 ~ 1월 15일)
            if (start.month > end.month) {
                if ((month === start.month && day >= start.day) ||
                    (month === end.month && day <= end.day)) {
                    return theme;
                }
            } else {
                // 일반적인 경우
                if ((month > start.month || (month === start.month && day >= start.day)) &&
                    (month < end.month || (month === end.month && day <= end.day))) {
                    return theme;
                }
            }
        }

        // 기본 테마
        return {
            name: 'Standard Edition ✨',
            emoji: { start: '�', end: '✨' }
        };
    },

    // VERSION_NAME은 동적으로 설정
    get VERSION_NAME() {
        return this.getCurrentSeason().name;
    }
};

// Get the current URL based on environment
function getShareUrl() {
    if (window.location.protocol === 'file:') {
        // Running from file system - use production URL
        return CONFIG.PRODUCTION_URL;
    } else if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        // Running on local server
        return window.location.origin + window.location.pathname;
    } else {
        // Running on production
        return window.location.origin + window.location.pathname;
    }
}

// Get the base URL for assets
function getBaseUrl() {
    if (window.location.protocol === 'file:') {
        return CONFIG.PRODUCTION_URL;
    } else {
        return window.location.origin + window.location.pathname.replace('index.html', '');
    }
}
