// Chinese Simplified translations
const translations_zh = {
    // Start Screen
    title: "你的心理年龄<br>是多少岁？",
    subtitle: "AI通过你的照片估算实际年龄，<br>10个问题揭示你的心理年龄",
    btnStart: "开始测试",

    // Upload Screen
    uploadTitle: "上传照片",
    uploadDesc: "请上传正面清晰的照片",
    uploadText: "点击或拖动图片到这里",
    btnChange: "更换照片",
    btnNext: "下一步",

    // Analyzing
    analyzing: "AI正在分析你的面部...",
    resultLabel: "分析完成！",
    resultText: "你的实际年龄是",
    resultTextAge: "岁",

    // Questions
    progressText: "{current} / {total}",

    // Result Screen
    resultTitle: "测试结果",
    physicalAgeLabel: "实际年龄",
    mentalAgeLabel: "心理年龄",
    ageUnit: "岁",

    // Result Messages (9 different cases based on age difference)
    resultVeryYoung: "小王子/小公主！永远的少年感！🌟",
    resultYoung: "活力青春！充满朝气与活力！✨",
    resultFresh: "生机勃勃！感受到了明朗积极的能量！",
    resultCute: "童心未泯！非常可爱的灵魂！",
    resultBalance: "完美平衡！保养得很好呢！",
    resultMature: "稳重的成年人！拥有成熟的魅力！",
    resultWise: "老练的智者！深邃的灵魂！",
    resultExpert: "人生高手！流露出丰富的经验！",
    resultMentor: "活着的智慧！你是人生的导师！",

    // Share
    btnDownload: "保存图片",
    btnCopyLink: "复制链接",
    btnRestart: "重新测试",
    linkCopied: "✓ 链接已复制！",

    // Errors
    errorNoFace: "未检测到面部。请上传正面清晰的照片。",
    errorDownload: "保存图片失败，请重试。",
    errorCopyLink: "复制链接失败。",

    // Questions
    questions: [
        {
            question: "周末最想做什么活动？",
            options: [
                "🎉 和朋友去俱乐部/音乐节",
                "📚 在咖啡厅看书",
                "🎬 在家看Netflix",
                "⛰️ 登山或打高尔夫"
            ]
        },
        {
            question: "主要如何使用社交媒体？",
            options: [
                "📱 无限刷短视频",
                "👥 浏览朋友动态",
                "📰 搜索信息/新闻",
                "🚫 几乎不用"
            ]
        },
        {
            question: "和朋友产生分歧时？",
            options: [
                "😤 情绪化地立即表达",
                "⏰ 先冷静思考",
                "💬 通过对话平静解决",
                "🤝 我会让步"
            ]
        },
        {
            question: "想买东西时？",
            options: [
                "💳 立即冲动购买！",
                "🔍 在社交媒体上查看评价",
                "🤔 考虑几天是否需要",
                "💰 比价后等待促销"
            ]
        },
        {
            question: "主要听什么音乐类型？",
            options: [
                "🎵 最新嘻哈/电音/K-POP",
                "🎸 独立/流行",
                "🎹 情歌/爵士",
                "🎼 古典/传统"
            ]
        },
        {
            question: "你的晨间习惯是？",
            options: [
                "😴 闹钟贪睡5次",
                "📱 起床立即看手机",
                "🧘 轻松拉伸",
                "🏃 早起散步/运动"
            ]
        },
        {
            question: "和朋友主要聊什么话题？",
            options: [
                "💘 恋爱、八卦、电视剧",
                "🎮 爱好、兴趣",
                "💼 工作、职业",
                "💪 健康、理财、房产"
            ]
        },
        {
            question: "压力大时主要？",
            options: [
                "👯 找朋友聊天",
                "🎮 游戏/YouTube",
                "🏃 运动/散步",
                "🧘 冥想/安静休息"
            ]
        },
        {
            question: "计划旅行时？",
            options: [
                "✈️ 无计划随兴而行",
                "🏨 只预订住宿",
                "📝 整理主要行程",
                "📋 制作详细时间表"
            ]
        },
        {
            question: "人生中最重要的是？",
            options: [
                "😊 乐趣和享受",
                "🌟 新体验和挑战",
                "⚖️ 稳定和平衡",
                "🎯 成就和责任"
            ]
        }
    ]
};

// Export for use in i18n.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations_zh;
}
