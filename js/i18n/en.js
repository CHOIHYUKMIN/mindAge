// English translations
const translations_en = {
    // Start Screen
    title: "How Old is<br>Your Mind?",
    subtitle: "AI estimates your physical age from your photo,<br>and 10 questions reveal your mental age",
    btnStart: "Start Test",

    // Upload Screen
    uploadTitle: "Upload Photo",
    uploadDesc: "Please upload a photo with your face clearly visible",
    uploadText: "Click or drag an image here",
    btnChange: "Change Photo",
    btnNext: "Next Step",

    // Analyzing
    analyzing: "AI is analyzing your face...",
    resultLabel: "Analysis Complete!",
    resultText: "Your physical age is",
    resultTextAge: "years old",

    // Questions
    progressText: "{current} / {total}",

    // Result Screen
    resultTitle: "Results",
    physicalAgeLabel: "Physical Age",
    mentalAgeLabel: "Mental Age",
    ageUnit: "yrs",

    // Result Messages (9 different cases based on age difference)
    resultVeryYoung: "Little Prince/Princess! Eternal teenage spirit! 🌟",
    resultYoung: "Cheerful Youth! Overflowing with energy! ✨",
    resultFresh: "Vibrant & Lively! Bright and positive energy!",
    resultCute: "Young at Heart! You have a cute soul!",
    resultBalance: "Perfect Balance! Aging gracefully!",
    resultMature: "Stable Adult! You have a mature charm!",
    resultWise: "Experienced Sage! A deep and thoughtful soul!",
    resultExpert: "Life Expert! Rich experience shows!",
    resultMentor: "Living Wisdom! You are a mentor of life!",

    // Share
    btnDownload: "Save Image",
    btnCopyLink: "Copy Link",
    btnRestart: "Take Test Again",
    linkCopied: "✓ Link copied to clipboard!",

    // Errors
    errorNoFace: "No face detected. Please upload a photo with a clear frontal face.",
    errorDownload: "Failed to save image. Please try again.",
    errorCopyLink: "Failed to copy link.",

    // Questions
    questions: [
        {
            question: "What would you most like to do on the weekend?",
            options: [
                "🎉 Go to clubs/festivals with friends",
                "📚 Read at a café",
                "🎬 Watch Netflix at home",
                "⛰️ Hiking or golf"
            ]
        },
        {
            question: "How do you mainly use social media?",
            options: [
                "📱 Endless scrolling of Reels/Shorts",
                "👥 Check friends' posts",
                "📰 Search for information/news",
                "🚫 Barely use it"
            ]
        },
        {
            question: "When you have a conflict with a friend?",
            options: [
                "😤 Express feelings immediately",
                "⏰ Take time to think",
                "💬 Resolve calmly through dialogue",
                "🤝 I compromise"
            ]
        },
        {
            question: "When you want to buy something?",
            options: [
                "💳 Impulse buy immediately!",
                "🔍 Check reviews on SNS",
                "🤔 Think about it for a few days",
                "💰 Compare prices and wait for sale"
            ]
        },
        {
            question: "What music genre do you mainly listen to?",
            options: [
                "🎵 Latest Hip-hop/EDM/K-POP",
                "🎸 Indie/Pop",
                "🎹 Ballad/Jazz",
                "🎼 Classical/Traditional"
            ]
        },
        {
            question: "What's your morning routine?",
            options: [
                "😴 Snooze alarm 5 times",
                "📱 Check phone immediately",
                "🧘 Light stretching",
                "🏃 Wake up early for walk/exercise"
            ]
        },
        {
            question: "Main topics of conversation with friends?",
            options: [
                "💘 Dating, gossip, dramas",
                "🎮 Hobbies, interests",
                "💼 Work, career",
                "💪 Health, finance, real estate"
            ]
        },
        {
            question: "When you're stressed?",
            options: [
                "👯 Meet friends and chat",
                "🎮 Games/YouTube",
                "🏃 Exercise/walk",
                "🧘 Meditation/quiet rest"
            ]
        },
        {
            question: "When planning a trip?",
            options: [
                "✈️ Spontaneous without plans",
                "🏨 Just book accommodation",
                "📝 Plan main itinerary",
                "📋 Create detailed hourly schedule"
            ]
        },
        {
            question: "What's most important in life?",
            options: [
                "😊 Fun and enjoyment",
                "🌟 New experiences and challenges",
                "⚖️ Stability and balance",
                "🎯 Achievement and responsibility"
            ]
        }
    ]
};

// Export for use in i18n.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations_en;
}
