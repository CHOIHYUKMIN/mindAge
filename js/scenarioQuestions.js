// questions.js - 시나리오·연령대별 질문 정의
// 점수: 0-5 (낮을수록 젊음/여유, 높을수록 성숙/스트레스)

export const QUESTIONS = {
    // ============================================
    // 일상생활 - 10대 (d_t1 ~ d_t10)
    // ============================================
    d_t1: {
        id: 'd_t1',
        text: {
            ko: '친구와 주말에 가장 많이 하는 활동은?',
            en: 'What do you most often do with friends on weekends?',
            zh: '周末和朋友最常做的活动是什么？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '게임하기', en: 'Play games', zh: '玩游戏' }, score: 2 },
            2: { label: { ko: '공부·과제', en: 'Study/Homework', zh: '学习/作业' }, score: 4 },
            3: { label: { ko: '야외활동·운동', en: 'Outdoor activities', zh: '户外活动' }, score: 5 }
        }
    },

    d_t2: {
        id: 'd_t2',
        text: {
            ko: '하루에 스마트폰을 사용하는 시간은?',
            en: 'How many hours do you spend on your phone daily?',
            zh: '每天使用手机的时间是多少？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '4시간 이상', en: '4+ hours', zh: '4小时以上' }, score: 5 },
            2: { label: { ko: '2-4시간', en: '2-4 hours', zh: '2-4小时' }, score: 3 },
            3: { label: { ko: '2시간 미만', en: 'Less than 2 hours', zh: '不到2小时' }, score: 1 }
        }
    },

    d_t3: {
        id: 'd_t3',
        text: {
            ko: 'SNS에서 가장 많이 하는 활동은?',
            en: 'What do you do most on social media?',
            zh: '在社交媒体上最常做的事情是什么？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '게시물 올리기', en: 'Post content', zh: '发布内容' }, score: 4 },
            2: { label: { ko: '친구 게시물 보기', en: 'View friends\' posts', zh: '查看朋友的帖子' }, score: 2 },
            3: { label: { ko: '메시지 주고받기', en: 'Chat with friends', zh: '聊天' }, score: 3 }
        }
    },

    d_t4: {
        id: 'd_t4',
        text: {
            ko: '스트레스를 풀기 위해 가장 많이 하는 일은?',
            en: 'What do you do most to relieve stress?',
            zh: '为了缓解压力最常做的事情是什么？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '음악 듣기', en: 'Listen to music', zh: '听音乐' }, score: 2 },
            2: { label: { ko: '운동하기', en: 'Exercise', zh: '运动' }, score: 5 },
            3: { label: { ko: '간식 먹기', en: 'Eat snacks', zh: '吃零食' }, score: 3 }
        }
    },

    d_t5: {
        id: 'd_t5',
        text: {
            ko: '아침에 일어나면 가장 먼저 하는 일은?',
            en: 'What\'s the first thing you do after waking up?',
            zh: '起床后第一件事是什么？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '스마트폰 확인', en: 'Check phone', zh: '查看手机' }, score: 3 },
            2: { label: { ko: '씻기', en: 'Wash up', zh: '洗漱' }, score: 5 },
            3: { label: { ko: '다시 자기', en: 'Go back to sleep', zh: '继续睡觉' }, score: 1 }
        }
    },

    // ============================================
    // 일상생활 - 20대 (d_20_1 ~ d_20_10)
    // ============================================
    d_20_1: {
        id: 'd_20_1',
        text: {
            ko: '주말에 주로 하는 휴식 방법은?',
            en: 'How do you usually relax on weekends?',
            zh: '周末通常如何放松？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '카페에서 책 읽기', en: 'Read at a café', zh: '在咖啡馆阅读' }, score: 4 },
            2: { label: { ko: '운동·헬스', en: 'Exercise/Gym', zh: '运动/健身' }, score: 5 },
            3: { label: { ko: '친구와 파티', en: 'Party with friends', zh: '和朋友聚会' }, score: 2 }
        }
    },

    d_20_2: {
        id: 'd_20_2',
        text: {
            ko: '점심 식사는 주로 어떻게 해결하나요?',
            en: 'How do you usually have lunch?',
            zh: '通常如何解决午餐？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '배달 음식', en: 'Food delivery', zh: '外卖' }, score: 3 },
            2: { label: { ko: '직접 요리', en: 'Cook myself', zh: '自己做饭' }, score: 5 },
            3: { label: { ko: '편의점', en: 'Convenience store', zh: '便利店' }, score: 2 }
        }
    },

    d_20_3: {
        id: 'd_20_3',
        text: {
            ko: '하루 평균 수면 시간은?',
            en: 'How many hours do you sleep on average?',
            zh: '平均每天睡几个小时？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '5시간 미만', en: 'Less than 5 hours', zh: '不到5小时' }, score: 2 },
            2: { label: { ko: '6-7시간', en: '6-7 hours', zh: '6-7小时' }, score: 4 },
            3: { label: { ko: '8시간 이상', en: '8+ hours', zh: '8小时以上' }, score: 5 }
        }
    },

    d_20_4: {
        id: 'd_20_4',
        text: {
            ko: '새로운 사람을 만날 때 주로 어떻게 하나요?',
            en: 'How do you usually meet new people?',
            zh: '通常如何认识新朋友？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '소개팅 앱', en: 'Dating apps', zh: '交友软件' }, score: 2 },
            2: { label: { ko: '친구 소개', en: 'Through friends', zh: '朋友介绍' }, score: 4 },
            3: { label: { ko: '모임·동호회', en: 'Clubs/Groups', zh: '俱乐部/团体' }, score: 5 }
        }
    },

    d_20_5: {
        id: 'd_20_5',
        text: {
            ko: '한 달 생활비 중 가장 많이 쓰는 항목은?',
            en: 'What do you spend most of your monthly budget on?',
            zh: '每月生活费中花费最多的项目是什么？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '식비', en: 'Food', zh: '餐饮' }, score: 3 },
            2: { label: { ko: '취미·여가', en: 'Hobbies/Leisure', zh: '爱好/休闲' }, score: 2 },
            3: { label: { ko: '저축·투자', en: 'Savings/Investment', zh: '储蓄/投资' }, score: 5 }
        }
    },

    // ============================================
    // 일상생활 - 30대 (d_30_1 ~ d_30_10)
    // ============================================
    d_30_1: {
        id: 'd_30_1',
        text: {
            ko: '주중 저녁 식사는 주로 어떻게 하나요?',
            en: 'How do you usually have dinner on weekdays?',
            zh: '工作日晚餐通常如何解决？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '가족과 집에서', en: 'At home with family', zh: '在家和家人一起' }, score: 5 },
            2: { label: { ko: '외식', en: 'Eat out', zh: '外出就餐' }, score: 3 },
            3: { label: { ko: '간단히 해결', en: 'Quick meal', zh: '简单解决' }, score: 2 }
        }
    },

    d_30_2: {
        id: 'd_30_2',
        text: {
            ko: '건강 관리를 위해 가장 신경 쓰는 부분은?',
            en: 'What do you focus on most for health management?',
            zh: '为了健康管理最关注的是什么？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '규칙적인 운동', en: 'Regular exercise', zh: '定期运动' }, score: 5 },
            2: { label: { ko: '건강한 식단', en: 'Healthy diet', zh: '健康饮食' }, score: 4 },
            3: { label: { ko: '충분한 수면', en: 'Enough sleep', zh: '充足睡眠' }, score: 3 }
        }
    },

    d_30_3: {
        id: 'd_30_3',
        text: {
            ko: '주말에 가장 많이 하는 활동은?',
            en: 'What do you do most on weekends?',
            zh: '周末最常做的事情是什么？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '가족과 시간 보내기', en: 'Spend time with family', zh: '和家人在一起' }, score: 5 },
            2: { label: { ko: '개인 취미 활동', en: 'Personal hobbies', zh: '个人爱好' }, score: 3 },
            3: { label: { ko: '집에서 휴식', en: 'Rest at home', zh: '在家休息' }, score: 2 }
        }
    },

    d_30_4: {
        id: 'd_30_4',
        text: {
            ko: '재테크·투자에 대한 관심도는?',
            en: 'How interested are you in financial planning/investment?',
            zh: '对理财/投资的兴趣程度？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '매우 관심 많음', en: 'Very interested', zh: '非常感兴趣' }, score: 5 },
            2: { label: { ko: '보통', en: 'Moderate', zh: '一般' }, score: 3 },
            3: { label: { ko: '관심 없음', en: 'Not interested', zh: '不感兴趣' }, score: 1 }
        }
    },

    d_30_5: {
        id: 'd_30_5',
        text: {
            ko: '스트레스 해소 방법은?',
            en: 'How do you relieve stress?',
            zh: '如何缓解压力？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '운동', en: 'Exercise', zh: '运动' }, score: 5 },
            2: { label: { ko: '취미 활동', en: 'Hobbies', zh: '爱好活动' }, score: 4 },
            3: { label: { ko: '음주', en: 'Drinking', zh: '喝酒' }, score: 2 }
        }
    },

    // ============================================
    // 일상생활 - 40대 (d_40_1 ~ d_40_10)
    // ============================================
    d_40_1: {
        id: 'd_40_1',
        text: {
            ko: '가족과 저녁 대화의 주요 주제는?',
            en: 'What\'s the main topic of evening conversations with family?',
            zh: '和家人晚上对话的主要话题是什么？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '자녀 교육', en: 'Children\'s education', zh: '子女教育' }, score: 5 },
            2: { label: { ko: '일상적인 이야기', en: 'Daily stories', zh: '日常故事' }, score: 3 },
            3: { label: { ko: '각자 시간 보냄', en: 'Spend time separately', zh: '各自度过' }, score: 1 }
        }
    },

    d_40_2: {
        id: 'd_40_2',
        text: {
            ko: '건강검진은 얼마나 자주 받나요?',
            en: 'How often do you get health checkups?',
            zh: '多久进行一次健康检查？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '매년 정기적으로', en: 'Annually', zh: '每年定期' }, score: 5 },
            2: { label: { ko: '2-3년에 한 번', en: 'Every 2-3 years', zh: '每2-3年一次' }, score: 3 },
            3: { label: { ko: '거의 안 받음', en: 'Rarely', zh: '很少' }, score: 1 }
        }
    },

    d_40_3: {
        id: 'd_40_3',
        text: {
            ko: '노후 준비를 위해 가장 신경 쓰는 부분은?',
            en: 'What do you focus on most for retirement preparation?',
            zh: '为退休准备最关注的是什么？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '연금·저축', en: 'Pension/Savings', zh: '养老金/储蓄' }, score: 5 },
            2: { label: { ko: '건강 관리', en: 'Health management', zh: '健康管理' }, score: 4 },
            3: { label: { ko: '아직 생각 안 함', en: 'Haven\'t thought about it', zh: '还没想过' }, score: 1 }
        }
    },

    d_40_4: {
        id: 'd_40_4',
        text: {
            ko: '여가 시간에 주로 하는 활동은?',
            en: 'What do you usually do in your leisure time?',
            zh: '闲暇时间通常做什么？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '독서·공부', en: 'Reading/Studying', zh: '阅读/学习' }, score: 5 },
            2: { label: { ko: 'TV 시청', en: 'Watch TV', zh: '看电视' }, score: 3 },
            3: { label: { ko: '스마트폰', en: 'Smartphone', zh: '玩手机' }, score: 2 }
        }
    },

    d_40_5: {
        id: 'd_40_5',
        text: {
            ko: '친구들과 만나는 빈도는?',
            en: 'How often do you meet friends?',
            zh: '多久和朋友见一次面？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '주 1회 이상', en: 'Once a week or more', zh: '每周一次以上' }, score: 3 },
            2: { label: { ko: '월 1-2회', en: '1-2 times a month', zh: '每月1-2次' }, score: 4 },
            3: { label: { ko: '분기별 1회', en: 'Once a quarter', zh: '每季度一次' }, score: 5 }
        }
    },

    // ============================================
    // 일상생활 - 50대 (d_50_1 ~ d_50_10)
    // ============================================
    d_50_1: {
        id: 'd_50_1',
        text: {
            ko: '아침에 가장 먼저 하는 일은?',
            en: 'What\'s the first thing you do in the morning?',
            zh: '早上第一件事是什么？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '산책·운동', en: 'Walk/Exercise', zh: '散步/运动' }, score: 5 },
            2: { label: { ko: '뉴스 보기', en: 'Watch news', zh: '看新闻' }, score: 4 },
            3: { label: { ko: '스마트폰 확인', en: 'Check phone', zh: '查看手机' }, score: 2 }
        }
    },

    d_50_2: {
        id: 'd_50_2',
        text: {
            ko: '건강 관리를 위해 복용하는 영양제는?',
            en: 'What supplements do you take for health?',
            zh: '为了健康服用什么营养品？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '3가지 이상', en: '3 or more', zh: '3种以上' }, score: 5 },
            2: { label: { ko: '1-2가지', en: '1-2 types', zh: '1-2种' }, score: 3 },
            3: { label: { ko: '안 먹음', en: 'None', zh: '不吃' }, score: 1 }
        }
    },

    d_50_3: {
        id: 'd_50_3',
        text: {
            ko: '자녀와의 연락 빈도는?',
            en: 'How often do you contact your children?',
            zh: '和子女联系的频率？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '매일', en: 'Daily', zh: '每天' }, score: 5 },
            2: { label: { ko: '주 2-3회', en: '2-3 times a week', zh: '每周2-3次' }, score: 4 },
            3: { label: { ko: '주 1회 이하', en: 'Once a week or less', zh: '每周一次以下' }, score: 2 }
        }
    },

    d_50_4: {
        id: 'd_50_4',
        text: {
            ko: '취미 활동으로 주로 하는 것은?',
            en: 'What\'s your main hobby activity?',
            zh: '主要的爱好活动是什么？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '등산·운동', en: 'Hiking/Exercise', zh: '登山/运动' }, score: 5 },
            2: { label: { ko: '원예·텃밭', en: 'Gardening', zh: '园艺' }, score: 4 },
            3: { label: { ko: 'TV·영화', en: 'TV/Movies', zh: '电视/电影' }, score: 2 }
        }
    },

    d_50_5: {
        id: 'd_50_5',
        text: {
            ko: '은퇴 후 계획은?',
            en: 'What are your plans after retirement?',
            zh: '退休后的计划是什么？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '새로운 일 시작', en: 'Start new work', zh: '开始新工作' }, score: 5 },
            2: { label: { ko: '취미·여행', en: 'Hobbies/Travel', zh: '爱好/旅行' }, score: 4 },
            3: { label: { ko: '아직 미정', en: 'Not decided yet', zh: '还没决定' }, score: 2 }
        }
    },

    // 일상생활 - 10대 나머지 (d_t6~d_t10)
    d_t6: {
        id: 'd_t6',
        text: { ko: '학교 성적에 대한 스트레스는?', en: 'How stressed are you about school grades?', zh: '对学校成绩的压力有多大？' },
        type: 'single',
        options: {
            1: { label: { ko: '매우 높음', en: 'Very high', zh: '非常高' }, score: 5 },
            2: { label: { ko: '보통', en: 'Moderate', zh: '一般' }, score: 3 },
            3: { label: { ko: '거의 없음', en: 'Almost none', zh: '几乎没有' }, score: 1 }
        }
    },
    d_t7: {
        id: 'd_t7',
        text: { ko: '부모님과 대화하는 빈도는?', en: 'How often do you talk with parents?', zh: '和父母交谈的频率？' },
        type: 'single',
        options: {
            1: { label: { ko: '매일', en: 'Daily', zh: '每天' }, score: 5 },
            2: { label: { ko: '주 2-3회', en: '2-3 times/week', zh: '每周2-3次' }, score: 3 },
            3: { label: { ko: '거의 안 함', en: 'Rarely', zh: '很少' }, score: 1 }
        }
    },
    d_t8: {
        id: 'd_t8',
        text: { ko: '용돈 관리는 어떻게 하나요?', en: 'How do you manage your allowance?', zh: '如何管理零花钱？' },
        type: 'single',
        options: {
            1: { label: { ko: '계획적으로 저축', en: 'Save systematically', zh: '有计划地储蓄' }, score: 5 },
            2: { label: { ko: '필요할 때 사용', en: 'Spend when needed', zh: '需要时使用' }, score: 3 },
            3: { label: { ko: '다 써버림', en: 'Spend all', zh: '全部花掉' }, score: 1 }
        }
    },
    d_t9: {
        id: 'd_t9',
        text: { ko: '미래에 대한 걱정은?', en: 'How worried are you about the future?', zh: '对未来的担忧程度？' },
        type: 'single',
        options: {
            1: { label: { ko: '많이 걱정됨', en: 'Very worried', zh: '非常担心' }, score: 5 },
            2: { label: { ko: '가끔 생각함', en: 'Sometimes think about it', zh: '偶尔想' }, score: 3 },
            3: { label: { ko: '별로 안 함', en: 'Not much', zh: '不太' }, score: 1 }
        }
    },
    d_t10: {
        id: 'd_t10',
        text: { ko: '독서 습관은?', en: 'What are your reading habits?', zh: '阅读习惯如何？' },
        type: 'single',
        options: {
            1: { label: { ko: '자주 읽음', en: 'Read often', zh: '经常阅读' }, score: 5 },
            2: { label: { ko: '가끔 읽음', en: 'Read sometimes', zh: '偶尔阅读' }, score: 3 },
            3: { label: { ko: '거의 안 읽음', en: 'Rarely read', zh: '很少阅读' }, score: 1 }
        }
    },

    // 일상생활 - 20대 나머지 (d_20_6~d_20_10)
    d_20_6: {
        id: 'd_20_6',
        text: { ko: '자기계발에 투자하는 시간은?', en: 'How much time do you invest in self-development?', zh: '投资在自我发展上的时间？' },
        type: 'single',
        options: {
            1: { label: { ko: '주 5시간 이상', en: '5+ hours/week', zh: '每周5小时以上' }, score: 5 },
            2: { label: { ko: '주 2-4시간', en: '2-4 hours/week', zh: '每周2-4小时' }, score: 3 },
            3: { label: { ko: '거의 없음', en: 'Almost none', zh: '几乎没有' }, score: 1 }
        }
    },
    d_20_7: {
        id: 'd_20_7',
        text: { ko: '연애 관계에서 중요하게 생각하는 것은?', en: 'What matters most in relationships?', zh: '在恋爱关系中最重视什么？' },
        type: 'single',
        options: {
            1: { label: { ko: '신뢰와 소통', en: 'Trust & communication', zh: '信任和沟通' }, score: 5 },
            2: { label: { ko: '외모와 매력', en: 'Appearance & charm', zh: '外貌和魅力' }, score: 2 },
            3: { label: { ko: '경제력', en: 'Financial stability', zh: '经济能力' }, score: 4 }
        }
    },
    d_20_8: {
        id: 'd_20_8',
        text: { ko: '스트레스 받을 때 주로 하는 행동은?', en: 'What do you do when stressed?', zh: '压力大时通常做什么？' },
        type: 'single',
        options: {
            1: { label: { ko: '친구와 대화', en: 'Talk with friends', zh: '和朋友聊天' }, score: 4 },
            2: { label: { ko: '혼자 해결', en: 'Solve alone', zh: '自己解决' }, score: 5 },
            3: { label: { ko: '술·게임', en: 'Drinking/Gaming', zh: '喝酒/游戏' }, score: 2 }
        }
    },
    d_20_9: {
        id: 'd_20_9',
        text: { ko: '부모님께 경제적으로 독립했나요?', en: 'Are you financially independent from parents?', zh: '在经济上独立于父母吗？' },
        type: 'single',
        options: {
            1: { label: { ko: '완전 독립', en: 'Fully independent', zh: '完全独立' }, score: 5 },
            2: { label: { ko: '부분 독립', en: 'Partially independent', zh: '部分独立' }, score: 3 },
            3: { label: { ko: '의존 중', en: 'Still dependent', zh: '仍然依赖' }, score: 1 }
        }
    },
    d_20_10: {
        id: 'd_20_10',
        text: { ko: '주말 아침에 주로 하는 일은?', en: 'What do you usually do on weekend mornings?', zh: '周末早上通常做什么？' },
        type: 'single',
        options: {
            1: { label: { ko: '늦잠', en: 'Sleep in', zh: '睡懒觉' }, score: 2 },
            2: { label: { ko: '운동', en: 'Exercise', zh: '运动' }, score: 5 },
            3: { label: { ko: '브런치', en: 'Brunch', zh: '早午餐' }, score: 3 }
        }
    },

    // 일상생활 - 30대 나머지 (d_30_6~d_30_10)
    d_30_6: {
        id: 'd_30_6',
        text: { ko: '자녀 계획이 있나요?', en: 'Do you have plans for children?', zh: '有生育计划吗？' },
        type: 'single',
        options: {
            1: { label: { ko: '있음/이미 있음', en: 'Yes/Already have', zh: '有/已经有了' }, score: 5 },
            2: { label: { ko: '고민 중', en: 'Considering', zh: '考虑中' }, score: 3 },
            3: { label: { ko: '없음', en: 'No plans', zh: '没有计划' }, score: 1 }
        }
    },
    d_30_7: {
        id: 'd_30_7',
        text: { ko: '내 집 마련 계획은?', en: 'Do you have plans to buy a house?', zh: '有买房计划吗？' },
        type: 'single',
        options: {
            1: { label: { ko: '이미 있음/준비 중', en: 'Already own/Preparing', zh: '已有/准备中' }, score: 5 },
            2: { label: { ko: '계획 중', en: 'Planning', zh: '计划中' }, score: 3 },
            3: { label: { ko: '아직 없음', en: 'No plans yet', zh: '还没有' }, score: 1 }
        }
    },
    d_30_8: {
        id: 'd_30_8',
        text: { ko: '부모님 건강에 대한 관심도는?', en: 'How concerned are you about parents\' health?', zh: '对父母健康的关注程度？' },
        type: 'single',
        options: {
            1: { label: { ko: '매우 관심 많음', en: 'Very concerned', zh: '非常关注' }, score: 5 },
            2: { label: { ko: '보통', en: 'Moderate', zh: '一般' }, score: 3 },
            3: { label: { ko: '별로 없음', en: 'Not much', zh: '不太' }, score: 1 }
        }
    },
    d_30_9: {
        id: 'd_30_9',
        text: { ko: '일과 삶의 균형은?', en: 'How is your work-life balance?', zh: '工作与生活的平衡如何？' },
        type: 'single',
        options: {
            1: { label: { ko: '균형 잡힘', en: 'Well balanced', zh: '平衡良好' }, score: 5 },
            2: { label: { ko: '일 중심', en: 'Work-focused', zh: '以工作为主' }, score: 3 },
            3: { label: { ko: '불균형', en: 'Imbalanced', zh: '不平衡' }, score: 2 }
        }
    },
    d_30_10: {
        id: 'd_30_10',
        text: { ko: '보험 가입 상태는?', en: 'What is your insurance coverage status?', zh: '保险投保情况？' },
        type: 'single',
        options: {
            1: { label: { ko: '충분히 가입', en: 'Well covered', zh: '充分投保' }, score: 5 },
            2: { label: { ko: '일부 가입', en: 'Partially covered', zh: '部分投保' }, score: 3 },
            3: { label: { ko: '거의 없음', en: 'Minimal coverage', zh: '几乎没有' }, score: 1 }
        }
    },

    // 일상생활 - 40대 나머지 (d_40_6~d_40_10)
    d_40_6: {
        id: 'd_40_6',
        text: { ko: '자녀 교육비 준비는?', en: 'How prepared are you for children\'s education costs?', zh: '子女教育费用准备情况？' },
        type: 'single',
        options: {
            1: { label: { ko: '충분히 준비', en: 'Well prepared', zh: '充分准备' }, score: 5 },
            2: { label: { ko: '준비 중', en: 'Preparing', zh: '准备中' }, score: 3 },
            3: { label: { ko: '부족함', en: 'Insufficient', zh: '不足' }, score: 2 }
        }
    },
    d_40_7: {
        id: 'd_40_7',
        text: { ko: '정기적인 취미 활동이 있나요?', en: 'Do you have regular hobbies?', zh: '有定期的爱好活动吗？' },
        type: 'single',
        options: {
            1: { label: { ko: '있음', en: 'Yes', zh: '有' }, score: 5 },
            2: { label: { ko: '가끔', en: 'Occasionally', zh: '偶尔' }, score: 3 },
            3: { label: { ko: '없음', en: 'No', zh: '没有' }, score: 1 }
        }
    },
    d_40_8: {
        id: 'd_40_8',
        text: { ko: '배우자와의 관계 만족도는?', en: 'How satisfied are you with your spouse relationship?', zh: '对配偶关系的满意度？' },
        type: 'single',
        options: {
            1: { label: { ko: '매우 만족', en: 'Very satisfied', zh: '非常满意' }, score: 5 },
            2: { label: { ko: '보통', en: 'Moderate', zh: '一般' }, score: 3 },
            3: { label: { ko: '불만족', en: 'Unsatisfied', zh: '不满意' }, score: 1 }
        }
    },
    d_40_9: {
        id: 'd_40_9',
        text: { ko: '직장에서의 위치는?', en: 'What is your position at work?', zh: '在公司的职位？' },
        type: 'single',
        options: {
            1: { label: { ko: '관리직 이상', en: 'Manager or above', zh: '经理以上' }, score: 5 },
            2: { label: { ko: '중간 직급', en: 'Mid-level', zh: '中层' }, score: 3 },
            3: { label: { ko: '일반 직원', en: 'Staff', zh: '普通员工' }, score: 2 }
        }
    },
    d_40_10: {
        id: 'd_40_10',
        text: { ko: '부모님 용돈을 드리나요?', en: 'Do you give allowance to parents?', zh: '给父母零花钱吗？' },
        type: 'single',
        options: {
            1: { label: { ko: '정기적으로', en: 'Regularly', zh: '定期' }, score: 5 },
            2: { label: { ko: '가끔', en: 'Occasionally', zh: '偶尔' }, score: 3 },
            3: { label: { ko: '못 드림', en: 'Cannot afford', zh: '无法给' }, score: 1 }
        }
    },

    // 일상생활 - 50대 나머지 (d_50_6~d_50_10)
    d_50_6: {
        id: 'd_50_6',
        text: { ko: '손주와 보내는 시간은?', en: 'How much time do you spend with grandchildren?', zh: '和孙子孙女在一起的时间？' },
        type: 'single',
        options: {
            1: { label: { ko: '자주', en: 'Often', zh: '经常' }, score: 5 },
            2: { label: { ko: '가끔', en: 'Sometimes', zh: '偶尔' }, score: 3 },
            3: { label: { ko: '없음/거의 없음', en: 'None/Rarely', zh: '没有/很少' }, score: 1 }
        }
    },
    d_50_7: {
        id: 'd_50_7',
        text: { ko: '종교 활동 참여도는?', en: 'How active are you in religious activities?', zh: '宗教活动参与程度？' },
        type: 'single',
        options: {
            1: { label: { ko: '적극적', en: 'Very active', zh: '非常积极' }, score: 5 },
            2: { label: { ko: '가끔', en: 'Occasionally', zh: '偶尔' }, score: 3 },
            3: { label: { ko: '없음', en: 'None', zh: '没有' }, score: 1 }
        }
    },
    d_50_8: {
        id: 'd_50_8',
        text: { ko: '노후 자금 준비는?', en: 'How prepared are you financially for retirement?', zh: '退休资金准备情况？' },
        type: 'single',
        options: {
            1: { label: { ko: '충분함', en: 'Well prepared', zh: '充分' }, score: 5 },
            2: { label: { ko: '부족함', en: 'Insufficient', zh: '不足' }, score: 2 },
            3: { label: { ko: '매우 부족', en: 'Very insufficient', zh: '非常不足' }, score: 1 }
        }
    },
    d_50_9: {
        id: 'd_50_9',
        text: { ko: '배우자와 여행 계획은?', en: 'Do you have travel plans with spouse?', zh: '和配偶的旅行计划？' },
        type: 'single',
        options: {
            1: { label: { ko: '자주 다님', en: 'Travel often', zh: '经常旅行' }, score: 5 },
            2: { label: { ko: '가끔', en: 'Occasionally', zh: '偶尔' }, score: 3 },
            3: { label: { ko: '거의 없음', en: 'Rarely', zh: '很少' }, score: 1 }
        }
    },
    d_50_10: {
        id: 'd_50_10',
        text: { ko: '사회 봉사 활동 참여는?', en: 'Do you participate in volunteer work?', zh: '参与社会志愿活动吗？' },
        type: 'single',
        options: {
            1: { label: { ko: '정기적으로', en: 'Regularly', zh: '定期' }, score: 5 },
            2: { label: { ko: '가끔', en: 'Occasionally', zh: '偶尔' }, score: 3 },
            3: { label: { ko: '안 함', en: 'No', zh: '不' }, score: 1 }
        }
    }
};

// 나머지 질문들은 동일한 패턴으로 추가 예정 (w_t1~w_50_10, e_t1~e_50_10)
// 총 150개 질문 (3 시나리오 × 5 연령대 × 10 질문)

