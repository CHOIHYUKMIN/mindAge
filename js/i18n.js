// Internationalization (i18n) Manager
const i18n = {
    currentLang: 'ko',
    translations: {
        ko: translations_ko,
        en: translations_en,
        zh: translations_zh
    },

    // Initialize i18n
    init() {
        // Load saved language from localStorage
        const savedLang = localStorage.getItem('mentalAge_lang');

        if (savedLang && this.translations[savedLang]) {
            this.currentLang = savedLang;
        } else {
            // Detect browser language
            const browserLang = navigator.language.toLowerCase();
            if (browserLang.startsWith('zh')) {
                this.currentLang = 'zh';
            } else if (browserLang.startsWith('en')) {
                this.currentLang = 'en';
            } else {
                this.currentLang = 'ko'; // Default to Korean
            }
        }

        console.log(`Language initialized: ${this.currentLang}`);
        this.updateUI();
        this.updateLanguageButtons();
    },

    // Set language
    setLanguage(lang) {
        if (!this.translations[lang]) {
            console.error(`Language ${lang} not supported`);
            return;
        }

        this.currentLang = lang;
        localStorage.setItem('mentalAge_lang', lang);
        console.log(`Language changed to: ${lang}`);

        this.updateUI();
        this.updateLanguageButtons();

        // Re-render current question if in questions section
        if (app.currentSection === 'questions' && app.currentQuestionIndex < this.getQuestions().length) {
            app.renderQuestion();
        }
    },

    // Get translation by key
    t(key) {
        const translation = this.translations[this.currentLang][key];
        return translation !== undefined ? translation : key;
    },

    // Get questions for current language
    getQuestions() {
        return this.translations[this.currentLang].questions || [];
    },

    // Update all UI text elements
    updateUI() {
        // Update elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.t(key);

            // Handle HTML content (like <br> tags)
            if (translation.includes('<br>') || translation.includes('<strong>')) {
                el.innerHTML = translation;
            } else {
                el.textContent = translation;
            }
        });

        // Update meta tags for SEO
        document.querySelector('meta[name="description"]').setAttribute('content', this.t('subtitle').replace(/<br>/g, ' '));
        document.title = this.t('title').replace(/<br>/g, ' ') + ' | Mental Age Calculator';
    },

    // Update language button states
    updateLanguageButtons() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.dataset.lang === this.currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => i18n.init());
} else {
    i18n.init();
}
