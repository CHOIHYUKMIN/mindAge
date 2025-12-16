// mentalAgeQuestions.js - 마음의 나이 측정을 위한 정교한 질문 세트
// 각 연령·성별별 10문항 (정서 30%, 책임 20%, 관계 20%, 가치 15%, 성찰 15%)

// 영역별 가중치
export const WEIGHTS = {
    emotion: 0.30,      // 정서적 성숙도
    responsibility: 0.20, // 책임감
    relationship: 0.20,   // 대인관계
    values: 0.15,        // 가치관
    self: 0.15          // 자기성찰
};

// ============================================
// 10대 남성 (Teen Male)
// ============================================
export const QUESTIONS_TEEN_MALE = {
    tm_1: {
        id: 'tm_1',
        category: 'emotion',
        text: {
            ko: '시험 성적이 안 좋게 나왔을 때 어떻게 반응하나요?',
            en: 'How do you react when you get a bad test score?',
            zh: '考试成绩不好时你会如何反应？'
        },
        options: {
            1: { label: { ko: '화내거나 포기함', en: 'Get angry or give up', zh: '生气或放弃' }, score: 1 },
            2: { label: { ko: '남 탓을 함', en: 'Blame others', zh: '责怪别人' }, score: 2 },
            3: { label: { ko: '잠시 실망하고 넘어감', en: 'Feel disappointed briefly', zh: '短暂失望后继续' }, score: 3 },
            4: { label: { ko: '원인을 분석함', en: 'Analyze the cause', zh: '分析原因' }, score: 4 },
            5: { label: { ko: '계획을 세워 개선함', en: 'Make a plan to improve', zh: '制定改进计划' }, score: 5 }
        }
    },
    tm_2: {
        id: 'tm_2',
        category: 'responsibility',
        text: {
            ko: '숙제나 과제를 언제 하나요?',
            en: 'When do you do homework or assignments?',
            zh: '你什么时候做作业？'
        },
        options: {
            1: { label: { ko: '안 하거나 베낌', en: "Don't do or copy", zh: '不做或抄袭' }, score: 1 },
            2: { label: { ko: '마감 직전', en: 'Right before deadline', zh: '截止前' }, score: 2 },
            3: { label: { ko: '마감 하루 전', en: 'Day before deadline', zh: '截止前一天' }, score: 3 },
            4: { label: { ko: '받은 당일이나 다음날', en: 'Same or next day', zh: '当天或次日' }, score: 4 },
            5: { label: { ko: '계획표에 따라 미리', en: 'According to schedule', zh: '按计划提前' }, score: 5 }
        }
    },
    tm_3: {
        id: 'tm_3',
        category: 'relationship',
        text: {
            ko: '친구와 다퉜을 때 어떻게 하나요?',
            en: 'What do you do when you fight with a friend?',
            zh: '和朋友吵架时你会怎么做？'
        },
        options: {
            1: { label: { ko: '관계를 끊음', en: 'Cut off the relationship', zh: '断绝关系' }, score: 1 },
            2: { label: { ko: '상대가 사과할 때까지 기다림', en: 'Wait for them to apologize', zh: '等对方道歉' }, score: 2 },
            3: { label: { ko: '시간이 해결해주길 기다림', en: 'Wait for time to heal', zh: '等时间解决' }, score: 3 },
            4: { label: { ko: '먼저 대화를 시도함', en: 'Try to talk first', zh: '主动沟通' }, score: 4 },
            5: { label: { ko: '내 잘못을 인정하고 대화함', en: 'Admit my fault and talk', zh: '承认错误并沟通' }, score: 5 }
        }
    },
    tm_4: {
        id: 'tm_4',
        category: 'emotion',
        text: {
            ko: '스트레스를 받을 때 주로 어떻게 하나요?',
            en: 'How do you usually handle stress?',
            zh: '你通常如何应对压力？'
        },
        options: {
            1: { label: { ko: '게임이나 SNS에 몰두', en: 'Immerse in games or SNS', zh: '沉迷游戏或社交媒体' }, score: 1 },
            2: { label: { ko: '잠을 자거나 먹음', en: 'Sleep or eat', zh: '睡觉或吃东西' }, score: 2 },
            3: { label: { ko: '음악을 듣거나 영상 시청', en: 'Listen to music or watch videos', zh: '听音乐或看视频' }, score: 3 },
            4: { label: { ko: '친구와 대화', en: 'Talk with friends', zh: '和朋友聊天' }, score: 4 },
            5: { label: { ko: '운동이나 산책', en: 'Exercise or walk', zh: '运动或散步' }, score: 5 }
        }
    },
    tm_5: {
        id: 'tm_5',
        category: 'values',
        text: {
            ko: '장래 희망을 정할 때 가장 중요하게 생각하는 것은?',
            en: 'What matters most when choosing your future career?',
            zh: '选择未来职业时最重要的是什么？'
        },
        options: {
            1: { label: { ko: '아직 생각 안 함', en: "Haven't thought about it", zh: '还没想过' }, score: 1 },
            2: { label: { ko: '돈을 많이 버는 것', en: 'Making a lot of money', zh: '赚很多钱' }, score: 2 },
            3: { label: { ko: '유명해지는 것', en: 'Becoming famous', zh: '出名' }, score: 3 },
            4: { label: { ko: '안정적인 직업', en: 'Job stability', zh: '稳定的工作' }, score: 4 },
            5: { label: { ko: '내가 좋아하고 잘하는 것', en: 'What I like and do well', zh: '我喜欢并擅长的' }, score: 5 }
        }
    },
    tm_6: {
        id: 'tm_6',
        category: 'responsibility',
        text: {
            ko: '용돈을 어떻게 관리하나요?',
            en: 'How do you manage your allowance?',
            zh: '你如何管理零花钱？'
        },
        options: {
            1: { label: { ko: '받자마자 다 씀', en: 'Spend it all immediately', zh: '一拿到就花光' }, score: 1 },
            2: { label: { ko: '생각 없이 쓰다가 모자람', en: 'Spend carelessly and run out', zh: '随意花费后不够' }, score: 2 },
            3: { label: { ko: '필요한 것만 사려고 노력', en: 'Try to buy only necessities', zh: '尽量只买必需品' }, score: 3 },
            4: { label: { ko: '일부는 저축함', en: 'Save some of it', zh: '储蓄一部分' }, score: 4 },
            5: { label: { ko: '계획을 세워 쓰고 저축함', en: 'Plan spending and save', zh: '计划支出并储蓄' }, score: 5 }
        }
    },
    tm_7: {
        id: 'tm_7',
        category: 'self',
        text: {
            ko: '자신의 장단점을 얼마나 알고 있나요?',
            en: 'How well do you know your strengths and weaknesses?',
            zh: '你对自己的优缺点了解多少？'
        },
        options: {
            1: { label: { ko: '전혀 모름', en: "Don't know at all", zh: '完全不知道' }, score: 1 },
            2: { label: { ko: '잘 모름', en: "Don't know well", zh: '不太了解' }, score: 2 },
            3: { label: { ko: '어느 정도 알고 있음', en: 'Know somewhat', zh: '有一定了解' }, score: 3 },
            4: { label: { ko: '잘 알고 있음', en: 'Know well', zh: '很了解' }, score: 4 },
            5: { label: { ko: '명확히 알고 개선 중', en: 'Know clearly and improving', zh: '清楚了解并在改进' }, score: 5 }
        }
    },
    tm_8: {
        id: 'tm_8',
        category: 'relationship',
        text: {
            ko: '부모님과 대화를 얼마나 자주 하나요?',
            en: 'How often do you talk with your parents?',
            zh: '你多久和父母交谈一次？'
        },
        options: {
            1: { label: { ko: '거의 안 함', en: 'Rarely', zh: '很少' }, score: 1 },
            2: { label: { ko: '필요할 때만', en: 'Only when necessary', zh: '只在必要时' }, score: 2 },
            3: { label: { ko: '가끔', en: 'Sometimes', zh: '偶尔' }, score: 3 },
            4: { label: { ko: '자주', en: 'Often', zh: '经常' }, score: 4 },
            5: { label: { ko: '매일 깊은 대화', en: 'Deep talks daily', zh: '每天深入交谈' }, score: 5 }
        }
    },
    tm_9: {
        id: 'tm_9',
        category: 'emotion',
        text: {
            ko: '실수를 했을 때 어떻게 반응하나요?',
            en: 'How do you react when you make a mistake?',
            zh: '犯错时你会如何反应？'
        },
        options: {
            1: { label: { ko: '숨기거나 거짓말함', en: 'Hide it or lie', zh: '隐瞒或撒谎' }, score: 1 },
            2: { label: { ko: '변명을 함', en: 'Make excuses', zh: '找借口' }, score: 2 },
            3: { label: { ko: '인정은 하지만 속상해함', en: 'Admit but feel upset', zh: '承认但很难过' }, score: 3 },
            4: { label: { ko: '인정하고 사과함', en: 'Admit and apologize', zh: '承认并道歉' }, score: 4 },
            5: { label: { ko: '인정하고 개선 방법을 찾음', en: 'Admit and find ways to improve', zh: '承认并寻找改进方法' }, score: 5 }
        }
    },
    tm_10: {
        id: 'tm_10',
        category: 'self',
        text: {
            ko: '새로운 것을 배우는 것에 대해 어떻게 생각하나요?',
            en: 'How do you feel about learning new things?',
            zh: '你对学习新事物有什么看法？'
        },
        options: {
            1: { label: { ko: '귀찮고 싫음', en: 'Annoying and dislike it', zh: '麻烦且不喜欢' }, score: 1 },
            2: { label: { ko: '필요할 때만', en: 'Only when necessary', zh: '只在必要时' }, score: 2 },
            3: { label: { ko: '관심 있으면 함', en: 'Do it if interested', zh: '感兴趣就做' }, score: 3 },
            4: { label: { ko: '적극적으로 배움', en: 'Actively learn', zh: '积极学习' }, score: 4 },
            5: { label: { ko: '항상 새로운 것을 찾아 배움', en: 'Always seek and learn new things', zh: '总是寻找并学习新事物' }, score: 5 }
        }
    }
};

// ============================================
// 10대 여성 (Teen Female)
// ============================================
export const QUESTIONS_TEEN_FEMALE = {
    tf_1: {
        id: 'tf_1',
        category: 'emotion',
        text: {
            ko: '친구가 나를 오해했을 때 어떻게 하나요?',
            en: 'What do you do when a friend misunderstands you?',
            zh: '朋友误解你时你会怎么做？'
        },
        options: {
            1: { label: { ko: '화내고 관계를 끊음', en: 'Get angry and cut off', zh: '生气并断绝关系' }, score: 1 },
            2: { label: { ko: 'SNS에 돌려 말함', en: 'Post indirectly on SNS', zh: '在社交媒体上间接表达' }, score: 2 },
            3: { label: { ko: '속상하지만 참음', en: 'Feel hurt but endure', zh: '难过但忍耐' }, score: 3 },
            4: { label: { ko: '시간을 두고 설명함', en: 'Explain after some time', zh: '过段时间后解释' }, score: 4 },
            5: { label: { ko: '바로 대화로 풀어냄', en: 'Resolve through immediate talk', zh: '立即通过对话解决' }, score: 5 }
        }
    },
    tf_2: {
        id: 'tf_2',
        category: 'responsibility',
        text: {
            ko: '시험 준비를 어떻게 하나요?',
            en: 'How do you prepare for exams?',
            zh: '你如何准备考试？'
        },
        options: {
            1: { label: { ko: '거의 안 함', en: 'Barely study', zh: '几乎不学习' }, score: 1 },
            2: { label: { ko: '시험 전날 벼락치기', en: 'Cram the night before', zh: '考前一晚临时抱佛脚' }, score: 2 },
            3: { label: { ko: '며칠 전부터 준비', en: 'Start a few days before', zh: '提前几天准备' }, score: 3 },
            4: { label: { ko: '일주일 전부터 계획적으로', en: 'Plan from a week before', zh: '提前一周计划' }, score: 4 },
            5: { label: { ko: '평소에 꾸준히 공부', en: 'Study consistently', zh: '平时持续学习' }, score: 5 }
        }
    },
    tf_3: {
        id: 'tf_3',
        category: 'relationship',
        text: {
            ko: '친구가 힘들어할 때 어떻게 하나요?',
            en: 'What do you do when a friend is struggling?',
            zh: '朋友遇到困难时你会怎么做？'
        },
        options: {
            1: { label: { ko: '모른 척함', en: 'Pretend not to notice', zh: '假装不知道' }, score: 1 },
            2: { label: { ko: '다른 친구에게 말함', en: 'Tell other friends', zh: '告诉其他朋友' }, score: 2 },
            3: { label: { ko: '괜찮냐고 물어봄', en: 'Ask if they are okay', zh: '问是否还好' }, score: 3 },
            4: { label: { ko: '이야기를 들어줌', en: 'Listen to them', zh: '倾听他们' }, score: 4 },
            5: { label: { ko: '적극적으로 도와줌', en: 'Actively help', zh: '积极帮助' }, score: 5 }
        }
    },
    tf_4: {
        id: 'tf_4',
        category: 'emotion',
        text: {
            ko: '기분이 안 좋을 때 주로 어떻게 하나요?',
            en: 'What do you usually do when you feel down?',
            zh: '心情不好时你通常会做什么？'
        },
        options: {
            1: { label: { ko: '다른 사람에게 짜증냄', en: 'Take it out on others', zh: '对别人发脾气' }, score: 1 },
            2: { label: { ko: 'SNS에 올림', en: 'Post on SNS', zh: '发到社交媒体' }, score: 2 },
            3: { label: { ko: '혼자 있음', en: 'Be alone', zh: '独处' }, score: 3 },
            4: { label: { ko: '친구와 이야기함', en: 'Talk with friends', zh: '和朋友聊天' }, score: 4 },
            5: { label: { ko: '긍정적인 활동을 함', en: 'Do positive activities', zh: '做积极的活动' }, score: 5 }
        }
    },
    tf_5: {
        id: 'tf_5',
        category: 'values',
        text: {
            ko: '미래에 가장 중요하게 생각하는 것은?',
            en: 'What do you value most for your future?',
            zh: '你认为未来最重要的是什么？'
        },
        options: {
            1: { label: { ko: '외모와 인기', en: 'Appearance and popularity', zh: '外貌和人气' }, score: 1 },
            2: { label: { ko: '물질적 풍요', en: 'Material wealth', zh: '物质财富' }, score: 2 },
            3: { label: { ko: '좋은 배우자', en: 'Good spouse', zh: '好的配偶' }, score: 3 },
            4: { label: { ko: '자아실현', en: 'Self-actualization', zh: '自我实现' }, score: 4 },
            5: { label: { ko: '의미 있는 삶', en: 'Meaningful life', zh: '有意义的生活' }, score: 5 }
        }
    },
    tf_6: {
        id: 'tf_6',
        category: 'responsibility',
        text: {
            ko: '약속 시간을 지키나요?',
            en: 'Do you keep your appointments on time?',
            zh: '你会准时赴约吗？'
        },
        options: {
            1: { label: { ko: '자주 늦거나 안 감', en: 'Often late or no-show', zh: '经常迟到或不去' }, score: 1 },
            2: { label: { ko: '가끔 늦음', en: 'Sometimes late', zh: '有时迟到' }, score: 2 },
            3: { label: { ko: '대부분 지킴', en: 'Usually on time', zh: '通常准时' }, score: 3 },
            4: { label: { ko: '항상 지킴', en: 'Always on time', zh: '总是准时' }, score: 4 },
            5: { label: { ko: '미리 도착함', en: 'Arrive early', zh: '提前到达' }, score: 5 }
        }
    },
    tf_7: {
        id: 'tf_7',
        category: 'self',
        text: {
            ko: '자신에 대해 얼마나 만족하나요?',
            en: 'How satisfied are you with yourself?',
            zh: '你对自己有多满意？'
        },
        options: {
            1: { label: { ko: '매우 불만족', en: 'Very dissatisfied', zh: '非常不满意' }, score: 1 },
            2: { label: { ko: '불만족', en: 'Dissatisfied', zh: '不满意' }, score: 2 },
            3: { label: { ko: '보통', en: 'Neutral', zh: '一般' }, score: 3 },
            4: { label: { ko: '만족', en: 'Satisfied', zh: '满意' }, score: 4 },
            5: { label: { ko: '매우 만족', en: 'Very satisfied', zh: '非常满意' }, score: 5 }
        }
    },
    tf_8: {
        id: 'tf_8',
        category: 'relationship',
        text: {
            ko: 'SNS에서 다른 사람과 비교하나요?',
            en: 'Do you compare yourself with others on SNS?',
            zh: '你会在社交媒体上和别人比较吗？'
        },
        options: {
            1: { label: { ko: '항상 비교하고 우울해짐', en: 'Always compare and feel depressed', zh: '总是比较并感到沮丧' }, score: 1 },
            2: { label: { ko: '자주 비교함', en: 'Often compare', zh: '经常比较' }, score: 2 },
            3: { label: { ko: '가끔 비교함', en: 'Sometimes compare', zh: '有时比较' }, score: 3 },
            4: { label: { ko: '거의 안 함', en: 'Rarely compare', zh: '很少比较' }, score: 4 },
            5: { label: { ko: '전혀 안 함', en: 'Never compare', zh: '从不比较' }, score: 5 }
        }
    },
    tf_9: {
        id: 'tf_9',
        category: 'emotion',
        text: {
            ko: '비판을 받았을 때 어떻게 반응하나요?',
            en: 'How do you react when criticized?',
            zh: '受到批评时你会如何反应？'
        },
        options: {
            1: { label: { ko: '화내고 반박함', en: 'Get angry and argue back', zh: '生气并反驳' }, score: 1 },
            2: { label: { ko: '무시함', en: 'Ignore it', zh: '忽视' }, score: 2 },
            3: { label: { ko: '속상하지만 참음', en: 'Feel hurt but endure', zh: '难过但忍耐' }, score: 3 },
            4: { label: { ko: '생각해보고 받아들임', en: 'Think about it and accept', zh: '思考并接受' }, score: 4 },
            5: { label: { ko: '감사하고 개선함', en: 'Thank and improve', zh: '感谢并改进' }, score: 5 }
        }
    },
    tf_10: {
        id: 'tf_10',
        category: 'self',
        text: {
            ko: '자신의 감정을 얼마나 잘 표현하나요?',
            en: 'How well do you express your emotions?',
            zh: '你能多好地表达自己的情绪？'
        },
        options: {
            1: { label: { ko: '전혀 못함', en: 'Not at all', zh: '完全不能' }, score: 1 },
            2: { label: { ko: '잘 못함', en: 'Not well', zh: '不太好' }, score: 2 },
            3: { label: { ko: '보통', en: 'Moderately', zh: '一般' }, score: 3 },
            4: { label: { ko: '잘함', en: 'Well', zh: '很好' }, score: 4 },
            5: { label: { ko: '매우 잘함', en: 'Very well', zh: '非常好' }, score: 5 }
        }
    }
};

// ============================================
// 20대 남성 (Twenties Male)
// ============================================
export const QUESTIONS_20_MALE = {
    twm_1: {
        id: 'twm_1',
        category: 'emotion',
        text: {
            ko: '직장이나 학교에서 스트레스를 받을 때 어떻게 대처하나요?',
            en: 'How do you cope with stress at work or school?',
            zh: '在工作或学校感到压力时你如何应对？'
        },
        options: {
            1: { label: { ko: '술이나 게임으로 풀음', en: 'Drink or play games', zh: '喝酒或玩游戏' }, score: 1 },
            2: { label: { ko: '그냥 참음', en: 'Just endure', zh: '只是忍耐' }, score: 2 },
            3: { label: { ko: '친구와 수다', en: 'Chat with friends', zh: '和朋友聊天' }, score: 3 },
            4: { label: { ko: '운동이나 취미활동', en: 'Exercise or hobbies', zh: '运动或爱好' }, score: 4 },
            5: { label: { ko: '원인 분석 후 해결책 모색', en: 'Analyze and find solutions', zh: '分析并寻找解决方案' }, score: 5 }
        }
    },
    twm_2: {
        id: 'twm_2',
        category: 'responsibility',
        text: {
            ko: '한 달 생활비를 어떻게 관리하나요?',
            en: 'How do you manage your monthly expenses?',
            zh: '你如何管理每月开支？'
        },
        options: {
            1: { label: { ko: '계획 없이 쓰다가 빚냄', en: 'Spend carelessly and borrow', zh: '随意花费并借债' }, score: 1 },
            2: { label: { ko: '쓰다가 모자라면 빌림', en: 'Borrow when running out', zh: '不够时借钱' }, score: 2 },
            3: { label: { ko: '대충 계획하고 씀', en: 'Roughly plan', zh: '大致计划' }, score: 3 },
            4: { label: { ko: '예산을 세워 관리', en: 'Budget and manage', zh: '预算并管理' }, score: 4 },
            5: { label: { ko: '철저히 관리하고 저축', en: 'Strictly manage and save', zh: '严格管理并储蓄' }, score: 5 }
        }
    },
    twm_3: {
        id: 'twm_3',
        category: 'relationship',
        text: {
            ko: '연인과 갈등이 생겼을 때 어떻게 하나요?',
            en: 'What do you do when you have a conflict with your partner?',
            zh: '和伴侣发生冲突时你会怎么做？'
        },
        options: {
            1: { label: { ko: '연락을 끊음', en: 'Cut off contact', zh: '断绝联系' }, score: 1 },
            2: { label: { ko: '상대가 먼저 연락할 때까지 기다림', en: 'Wait for them to contact first', zh: '等对方先联系' }, score: 2 },
            3: { label: { ko: '시간이 지나면 괜찮아질 거라 생각', en: 'Think time will heal', zh: '认为时间会解决' }, score: 3 },
            4: { label: { ko: '대화로 풀려고 노력', en: 'Try to resolve through talk', zh: '尝试通过对话解决' }, score: 4 },
            5: { label: { ko: '내 잘못을 인정하고 진심으로 대화', en: 'Admit fault and talk sincerely', zh: '承认错误并真诚对话' }, score: 5 }
        }
    },
    twm_4: {
        id: 'twm_4',
        category: 'values',
        text: {
            ko: '직업을 선택할 때 가장 중요한 기준은?',
            en: 'What is the most important criterion when choosing a career?',
            zh: '选择职业时最重要的标准是什么？'
        },
        options: {
            1: { label: { ko: '일단 취업부터', en: 'Just get a job first', zh: '先就业再说' }, score: 1 },
            2: { label: { ko: '연봉', en: 'Salary', zh: '薪水' }, score: 2 },
            3: { label: { ko: '워라밸', en: 'Work-life balance', zh: '工作生活平衡' }, score: 3 },
            4: { label: { ko: '적성과 흥미', en: 'Aptitude and interest', zh: '适性和兴趣' }, score: 4 },
            5: { label: { ko: '사회적 의미와 성장 가능성', en: 'Social meaning and growth potential', zh: '社会意义和成长潜力' }, score: 5 }
        }
    },
    twm_5: {
        id: 'twm_5',
        category: 'emotion',
        text: {
            ko: '실패를 경험했을 때 어떻게 반응하나요?',
            en: 'How do you react when you experience failure?',
            zh: '经历失败时你会如何反应？'
        },
        options: {
            1: { label: { ko: '포기하고 다른 걸 찾음', en: 'Give up and find something else', zh: '放弃并寻找其他' }, score: 1 },
            2: { label: { ko: '운이 없었다고 생각', en: 'Think it was bad luck', zh: '认为运气不好' }, score: 2 },
            3: { label: { ko: '잠시 좌절하지만 다시 시도', en: 'Feel frustrated but try again', zh: '暂时沮丧但再次尝试' }, score: 3 },
            4: { label: { ko: '원인을 분석하고 개선', en: 'Analyze cause and improve', zh: '分析原因并改进' }, score: 4 },
            5: { label: { ko: '배움의 기회로 삼고 성장', en: 'See as learning opportunity and grow', zh: '视为学习机会并成长' }, score: 5 }
        }
    },
    twm_6: {
        id: 'twm_6',
        category: 'responsibility',
        text: {
            ko: '장기적인 목표(5년 이상)가 있나요?',
            en: 'Do you have long-term goals (5+ years)?',
            zh: '你有长期目标（5年以上）吗？'
        },
        options: {
            1: { label: { ko: '전혀 없음', en: 'None at all', zh: '完全没有' }, score: 1 },
            2: { label: { ko: '막연하게만 있음', en: 'Only vaguely', zh: '只是模糊地有' }, score: 2 },
            3: { label: { ko: '있지만 구체적이지 않음', en: 'Have but not specific', zh: '有但不具体' }, score: 3 },
            4: { label: { ko: '구체적인 목표가 있음', en: 'Have specific goals', zh: '有具体目标' }, score: 4 },
            5: { label: { ko: '구체적 목표와 실행 계획이 있음', en: 'Have specific goals and action plans', zh: '有具体目标和行动计划' }, score: 5 }
        }
    },
    twm_7: {
        id: 'twm_7',
        category: 'self',
        text: {
            ko: '자기계발에 시간과 돈을 투자하나요?',
            en: 'Do you invest time and money in self-development?',
            zh: '你会在自我发展上投资时间和金钱吗？'
        },
        options: {
            1: { label: { ko: '전혀 안 함', en: 'Not at all', zh: '完全不' }, score: 1 },
            2: { label: { ko: '필요할 때만', en: 'Only when necessary', zh: '只在必要时' }, score: 2 },
            3: { label: { ko: '가끔', en: 'Occasionally', zh: '偶尔' }, score: 3 },
            4: { label: { ko: '정기적으로', en: 'Regularly', zh: '定期' }, score: 4 },
            5: { label: { ko: '최우선 순위로 투자', en: 'Invest as top priority', zh: '作为首要优先投资' }, score: 5 }
        }
    },
    twm_8: {
        id: 'twm_8',
        category: 'relationship',
        text: {
            ko: '부모님과의 관계는 어떤가요?',
            en: 'How is your relationship with your parents?',
            zh: '你和父母的关系如何？'
        },
        options: {
            1: { label: { ko: '거의 연락 안 함', en: 'Rarely contact', zh: '很少联系' }, score: 1 },
            2: { label: { ko: '필요할 때만 연락', en: 'Contact only when needed', zh: '只在需要时联系' }, score: 2 },
            3: { label: { ko: '가끔 연락', en: 'Contact occasionally', zh: '偶尔联系' }, score: 3 },
            4: { label: { ko: '자주 연락하고 방문', en: 'Contact and visit often', zh: '经常联系和拜访' }, score: 4 },
            5: { label: { ko: '깊은 대화를 나누는 친밀한 관계', en: 'Close relationship with deep talks', zh: '有深入对话的亲密关系' }, score: 5 }
        }
    },
    twm_9: {
        id: 'twm_9',
        category: 'values',
        text: {
            ko: '결혼에 대해 어떻게 생각하나요?',
            en: 'What do you think about marriage?',
            zh: '你对婚姻有什么看法？'
        },
        options: {
            1: { label: { ko: '전혀 생각 없음', en: 'No thoughts at all', zh: '完全没想过' }, score: 1 },
            2: { label: { ko: '하고 싶지 않음', en: "Don't want to", zh: '不想' }, score: 2 },
            3: { label: { ko: '언젠가는 할 것 같음', en: 'Might do someday', zh: '总有一天会' }, score: 3 },
            4: { label: { ko: '준비하고 있음', en: 'Preparing for it', zh: '正在准备' }, score: 4 },
            5: { label: { ko: '구체적인 계획이 있음', en: 'Have specific plans', zh: '有具体计划' }, score: 5 }
        }
    },
    twm_10: {
        id: 'twm_10',
        category: 'self',
        text: {
            ko: '자신의 강점과 약점을 파악하고 있나요?',
            en: 'Do you understand your strengths and weaknesses?',
            zh: '你了解自己的优势和劣势吗？'
        },
        options: {
            1: { label: { ko: '전혀 모름', en: "Don't know at all", zh: '完全不知道' }, score: 1 },
            2: { label: { ko: '잘 모름', en: "Don't know well", zh: '不太了解' }, score: 2 },
            3: { label: { ko: '어느 정도 알고 있음', en: 'Know somewhat', zh: '有一定了解' }, score: 3 },
            4: { label: { ko: '잘 알고 활용 중', en: 'Know well and utilizing', zh: '很了解并在利用' }, score: 4 },
            5: { label: { ko: '명확히 파악하고 지속적으로 개선 중', en: 'Clearly understand and continuously improving', zh: '清楚了解并持续改进' }, score: 5 }
        }
    }
};

// 20대 여성, 30대 남성/여성, 40대 남성/여성, 50대 남성/여성도 같은 형식으로 계속...
// 파일이 너무 길어지므로 나머지는 다음 파일에 작성하겠습니다.

// mentalAgeQuestions_part2.js - 나머지 연령대 질문

// ============================================
// 20대 여성 (Twenties Female)
// ============================================
export const QUESTIONS_20_FEMALE = {
    twf_1: {
        id: 'twf_1',
        category: 'emotion',
        text: {
            ko: '직장이나 학교에서 부당한 대우를 받았을 때 어떻게 하나요?',
            en: 'What do you do when treated unfairly at work or school?',
            zh: '在工作或学校受到不公平对待时你会怎么做？'
        },
        options: {
            1: { label: { ko: '참고 넘어감', en: 'Endure and move on', zh: '忍耐并继续' }, score: 1 },
            2: { label: { ko: '친구에게만 하소연', en: 'Only complain to friends', zh: '只向朋友抱怨' }, score: 2 },
            3: { label: { ko: 'SNS에 돌려 말함', en: 'Post indirectly on SNS', zh: '在社交媒体上间接表达' }, score: 3 },
            4: { label: { ko: '직접 대화로 해결', en: 'Resolve through direct talk', zh: '通过直接对话解决' }, score: 4 },
            5: { label: { ko: '적절한 절차를 통해 공식적으로 대응', en: 'Respond officially through proper channels', zh: '通过适当程序正式应对' }, score: 5 }
        }
    },
    twf_2: {
        id: 'twf_2',
        category: 'responsibility',
        text: {
            ko: '재테크나 저축을 하고 있나요?',
            en: 'Are you doing financial planning or saving?',
            zh: '你在进行理财或储蓄吗？'
        },
        options: {
            1: { label: { ko: '전혀 안 함', en: 'Not at all', zh: '完全不' }, score: 1 },
            2: { label: { ko: '남는 돈만 저축', en: 'Save only leftover money', zh: '只存剩余的钱' }, score: 2 },
            3: { label: { ko: '매달 일정 금액 저축', en: 'Save fixed amount monthly', zh: '每月存固定金额' }, score: 3 },
            4: { label: { ko: '저축과 투자를 병행', en: 'Both save and invest', zh: '储蓄和投资并行' }, score: 4 },
            5: { label: { ko: '체계적인 재무 계획 수립', en: 'Have systematic financial plan', zh: '有系统的财务计划' }, score: 5 }
        }
    },
    twf_3: {
        id: 'twf_3',
        category: 'relationship',
        text: {
            ko: '연인과의 관계에서 가장 중요하게 생각하는 것은?',
            en: 'What do you value most in a relationship?',
            zh: '在恋爱关系中你最重视什么？'
        },
        options: {
            1: { label: { ko: '외모와 경제력', en: 'Appearance and financial status', zh: '外貌和经济能力' }, score: 1 },
            2: { label: { ko: '로맨틱한 감정', en: 'Romantic feelings', zh: '浪漫的感觉' }, score: 2 },
            3: { label: { ko: '성격 맞음', en: 'Personality match', zh: '性格相配' }, score: 3 },
            4: { label: { ko: '신뢰와 소통', en: 'Trust and communication', zh: '信任和沟通' }, score: 4 },
            5: { label: { ko: '서로의 성장을 돕는 관계', en: 'Relationship that helps mutual growth', zh: '互相帮助成长的关系' }, score: 5 }
        }
    },
    twf_4: {
        id: 'twf_4',
        category: 'values',
        text: {
            ko: '커리어와 결혼/출산 중 어떤 것을 우선시하나요?',
            en: 'What do you prioritize between career and marriage/childbirth?',
            zh: '在事业和婚姻/生育之间你优先考虑什么？'
        },
        options: {
            1: { label: { ko: '아직 생각 안 함', en: "Haven't thought about it", zh: '还没想过' }, score: 1 },
            2: { label: { ko: '결혼/출산', en: 'Marriage/childbirth', zh: '婚姻/生育' }, score: 2 },
            3: { label: { ko: '커리어', en: 'Career', zh: '事业' }, score: 3 },
            4: { label: { ko: '둘 다 중요', en: 'Both important', zh: '两者都重要' }, score: 4 },
            5: { label: { ko: '상황에 따라 균형 있게', en: 'Balance according to situation', zh: '根据情况平衡' }, score: 5 }
        }
    },
    twf_5: {
        id: 'twf_5',
        category: 'emotion',
        text: {
            ko: '외모나 몸매에 대한 스트레스를 어떻게 관리하나요?',
            en: 'How do you manage stress about appearance or body?',
            zh: '你如何管理关于外貌或身材的压力？'
        },
        options: {
            1: { label: { ko: '극단적인 다이어트', en: 'Extreme dieting', zh: '极端节食' }, score: 1 },
            2: { label: { ko: '성형이나 시술 고려', en: 'Consider plastic surgery', zh: '考虑整形' }, score: 2 },
            3: { label: { ko: 'SNS와 비교하며 우울해짐', en: 'Compare with SNS and feel depressed', zh: '与社交媒体比较并沮丧' }, score: 3 },
            4: { label: { ko: '건강한 운동과 식단', en: 'Healthy exercise and diet', zh: '健康运动和饮食' }, score: 4 },
            5: { label: { ko: '내면의 가치를 더 중요하게 생각', en: 'Value inner qualities more', zh: '更重视内在价值' }, score: 5 }
        }
    },
    twf_6: {
        id: 'twf_6',
        category: 'responsibility',
        text: {
            ko: '건강 관리를 어떻게 하나요?',
            en: 'How do you manage your health?',
            zh: '你如何管理健康？'
        },
        options: {
            1: { label: { ko: '전혀 신경 안 씀', en: "Don't care at all", zh: '完全不在意' }, score: 1 },
            2: { label: { ko: '아플 때만 병원', en: 'Only go to hospital when sick', zh: '只在生病时去医院' }, score: 2 },
            3: { label: { ko: '가끔 운동', en: 'Exercise occasionally', zh: '偶尔运动' }, score: 3 },
            4: { label: { ko: '규칙적인 운동과 식단 관리', en: 'Regular exercise and diet', zh: '定期运动和饮食管理' }, score: 4 },
            5: { label: { ko: '정기 검진과 체계적 관리', en: 'Regular checkups and systematic care', zh: '定期检查和系统管理' }, score: 5 }
        }
    },
    twf_7: {
        id: 'twf_7',
        category: 'self',
        text: {
            ko: '자신만의 가치관이 확립되어 있나요?',
            en: 'Do you have established personal values?',
            zh: '你有确立的个人价值观吗？'
        },
        options: {
            1: { label: { ko: '전혀 없음', en: 'Not at all', zh: '完全没有' }, score: 1 },
            2: { label: { ko: '다른 사람 의견을 따름', en: 'Follow others opinions', zh: '跟随他人意见' }, score: 2 },
            3: { label: { ko: '상황에 따라 바뀜', en: 'Changes by situation', zh: '根据情况改变' }, score: 3 },
            4: { label: { ko: '어느 정도 확립됨', en: 'Somewhat established', zh: '有一定确立' }, score: 4 },
            5: { label: { ko: '명확하고 흔들리지 않음', en: 'Clear and unwavering', zh: '清晰且坚定' }, score: 5 }
        }
    },
    twf_8: {
        id: 'twf_8',
        category: 'relationship',
        text: {
            ko: '친구 관계를 어떻게 유지하나요?',
            en: 'How do you maintain friendships?',
            zh: '你如何维持友谊？'
        },
        options: {
            1: { label: { ko: '연락이 끊김', en: 'Lose contact', zh: '失去联系' }, score: 1 },
            2: { label: { ko: '상대가 연락하면 응답', en: 'Respond when they contact', zh: '对方联系时回应' }, score: 2 },
            3: { label: { ko: '가끔 연락', en: 'Contact occasionally', zh: '偶尔联系' }, score: 3 },
            4: { label: { ko: '정기적으로 만남', en: 'Meet regularly', zh: '定期见面' }, score: 4 },
            5: { label: { ko: '깊은 관계를 지속적으로 유지', en: 'Continuously maintain deep relationships', zh: '持续维持深厚关系' }, score: 5 }
        }
    },
    twf_9: {
        id: 'twf_9',
        category: 'emotion',
        text: {
            ko: '불안감을 느낄 때 어떻게 하나요?',
            en: 'What do you do when you feel anxious?',
            zh: '感到焦虑时你会怎么做？'
        },
        options: {
            1: { label: { ko: '쇼핑이나 과소비', en: 'Shopping or overspending', zh: '购物或过度消费' }, score: 1 },
            2: { label: { ko: '술이나 폭식', en: 'Drinking or binge eating', zh: '喝酒或暴饮暴食' }, score: 2 },
            3: { label: { ko: '그냥 참음', en: 'Just endure', zh: '只是忍耐' }, score: 3 },
            4: { label: { ko: '명상이나 심호흡', en: 'Meditation or deep breathing', zh: '冥想或深呼吸' }, score: 4 },
            5: { label: { ko: '원인을 파악하고 해결', en: 'Identify cause and resolve', zh: '找出原因并解决' }, score: 5 }
        }
    },
    twf_10: {
        id: 'twf_10',
        category: 'self',
        text: {
            ko: '자기계발을 위해 무엇을 하고 있나요?',
            en: 'What are you doing for self-development?',
            zh: '你在为自我发展做什么？'
        },
        options: {
            1: { label: { ko: '아무것도 안 함', en: 'Nothing', zh: '什么都不做' }, score: 1 },
            2: { label: { ko: '가끔 책 읽기', en: 'Read books occasionally', zh: '偶尔读书' }, score: 2 },
            3: { label: { ko: '온라인 강의 수강', en: 'Take online courses', zh: '上网课' }, score: 3 },
            4: { label: { ko: '자격증이나 학위 준비', en: 'Prepare for certification or degree', zh: '准备证书或学位' }, score: 4 },
            5: { label: { ko: '체계적인 커리어 개발 계획 실행', en: 'Execute systematic career development plan', zh: '执行系统的职业发展计划' }, score: 5 }
        }
    }
};

// ============================================
// 30대 남성 (Thirties Male)
// ============================================
export const QUESTIONS_30_MALE = {
    thm_1: {
        id: 'thm_1',
        category: 'emotion',
        text: {
            ko: '업무 스트레스를 어떻게 관리하나요?',
            en: 'How do you manage work stress?',
            zh: '你如何管理工作压力？'
        },
        options: {
            1: { label: { ko: '술로 푼다', en: 'Drink alcohol', zh: '喝酒' }, score: 1 },
            2: { label: { ko: '집에 가져와 가족에게 풀음', en: 'Bring it home to family', zh: '带回家向家人发泄' }, score: 2 },
            3: { label: { ko: '혼자 삭임', en: 'Suppress alone', zh: '独自压抑' }, score: 3 },
            4: { label: { ko: '운동이나 취미로 해소', en: 'Relieve through exercise or hobbies', zh: '通过运动或爱好缓解' }, score: 4 },
            5: { label: { ko: '근본 원인을 해결하려 노력', en: 'Try to solve root cause', zh: '努力解决根本原因' }, score: 5 }
        }
    },
    thm_2: {
        id: 'thm_2',
        category: 'responsibility',
        text: {
            ko: '가계 재정을 어떻게 관리하나요?',
            en: 'How do you manage household finances?',
            zh: '你如何管理家庭财务？'
        },
        options: {
            1: { label: { ko: '배우자에게 맡김', en: 'Leave it to spouse', zh: '交给配偶' }, score: 1 },
            2: { label: { ko: '대충 관리', en: 'Manage roughly', zh: '粗略管理' }, score: 2 },
            3: { label: { ko: '수입과 지출 파악', en: 'Track income and expenses', zh: '了解收入和支出' }, score: 3 },
            4: { label: { ko: '예산 수립하고 저축', en: 'Budget and save', zh: '制定预算并储蓄' }, score: 4 },
            5: { label: { ko: '장기 재무 계획 수립', en: 'Establish long-term financial plan', zh: '建立长期财务计划' }, score: 5 }
        }
    },
    thm_3: {
        id: 'thm_3',
        category: 'relationship',
        text: {
            ko: '배우자와의 갈등을 어떻게 해결하나요?',
            en: 'How do you resolve conflicts with your spouse?',
            zh: '你如何解决与配偶的冲突？'
        },
        options: {
            1: { label: { ko: '무시하거나 회피', en: 'Ignore or avoid', zh: '忽视或回避' }, score: 1 },
            2: { label: { ko: '자기 주장만 함', en: 'Only assert own opinion', zh: '只坚持己见' }, score: 2 },
            3: { label: { ko: '시간이 해결해주길 기다림', en: 'Wait for time to heal', zh: '等待时间解决' }, score: 3 },
            4: { label: { ko: '대화로 타협점 찾음', en: 'Find compromise through talk', zh: '通过对话寻找妥协' }, score: 4 },
            5: { label: { ko: '서로 이해하고 함께 해결책 모색', en: 'Understand each other and find solutions together', zh: '互相理解并共同寻找解决方案' }, score: 5 }
        }
    },
    thm_4: {
        id: 'thm_4',
        category: 'values',
        text: {
            ko: '일과 가정 중 무엇을 우선시하나요?',
            en: 'What do you prioritize between work and family?',
            zh: '在工作和家庭之间你优先考虑什么？'
        },
        options: {
            1: { label: { ko: '일만 중요', en: 'Only work matters', zh: '只有工作重要' }, score: 1 },
            2: { label: { ko: '일이 우선', en: 'Work first', zh: '工作优先' }, score: 2 },
            3: { label: { ko: '상황에 따라', en: 'Depends on situation', zh: '根据情况' }, score: 3 },
            4: { label: { ko: '가정이 우선', en: 'Family first', zh: '家庭优先' }, score: 4 },
            5: { label: { ko: '균형 있게 조화', en: 'Balance harmoniously', zh: '平衡协调' }, score: 5 }
        }
    },
    thm_5: {
        id: 'thm_5',
        category: 'emotion',
        text: {
            ko: '중년의 위기감을 느끼나요?',
            en: 'Do you feel a midlife crisis?',
            zh: '你感到中年危机吗？'
        },
        options: {
            1: { label: { ko: '매우 심각하게 느낌', en: 'Feel very seriously', zh: '非常严重地感受到' }, score: 1 },
            2: { label: { ko: '자주 느낌', en: 'Feel often', zh: '经常感受到' }, score: 2 },
            3: { label: { ko: '가끔 느낌', en: 'Feel occasionally', zh: '偶尔感受到' }, score: 3 },
            4: { label: { ko: '거의 안 느낌', en: 'Rarely feel', zh: '很少感受到' }, score: 4 },
            5: { label: { ko: '전혀 안 느끼고 긍정적', en: 'Not at all and positive', zh: '完全没有且积极' }, score: 5 }
        }
    },
    thm_6: {
        id: 'thm_6',
        category: 'responsibility',
        text: {
            ko: '자녀 교육에 얼마나 관여하나요?',
            en: 'How involved are you in your children\'s education?',
            zh: '你在子女教育中参与多少？'
        },
        options: {
            1: { label: { ko: '전혀 관여 안 함', en: 'Not involved at all', zh: '完全不参与' }, score: 1 },
            2: { label: { ko: '배우자에게 맡김', en: 'Leave it to spouse', zh: '交给配偶' }, score: 2 },
            3: { label: { ko: '가끔 관심', en: 'Occasionally interested', zh: '偶尔关心' }, score: 3 },
            4: { label: { ko: '적극적으로 참여', en: 'Actively participate', zh: '积极参与' }, score: 4 },
            5: { label: { ko: '함께 계획하고 실천', en: 'Plan and practice together', zh: '共同计划并实践' }, score: 5 }
        }
    },
    thm_7: {
        id: 'thm_7',
        category: 'self',
        text: {
            ko: '건강 관리를 어떻게 하나요?',
            en: 'How do you manage your health?',
            zh: '你如何管理健康？'
        },
        options: {
            1: { label: { ko: '전혀 신경 안 씀', en: "Don't care at all", zh: '完全不在意' }, score: 1 },
            2: { label: { ko: '아플 때만 병원', en: 'Only hospital when sick', zh: '只在生病时去医院' }, score: 2 },
            3: { label: { ko: '가끔 운동', en: 'Exercise occasionally', zh: '偶尔运动' }, score: 3 },
            4: { label: { ko: '규칙적인 운동과 식단', en: 'Regular exercise and diet', zh: '定期运动和饮食' }, score: 4 },
            5: { label: { ko: '정기 검진과 체계적 관리', en: 'Regular checkups and systematic care', zh: '定期检查和系统管理' }, score: 5 }
        }
    },
    thm_8: {
        id: 'thm_8',
        category: 'relationship',
        text: {
            ko: '부모님을 얼마나 자주 찾아뵙나요?',
            en: 'How often do you visit your parents?',
            zh: '你多久拜访一次父母？'
        },
        options: {
            1: { label: { ko: '거의 안 감', en: 'Rarely visit', zh: '很少拜访' }, score: 1 },
            2: { label: { ko: '명절에만', en: 'Only on holidays', zh: '只在节日' }, score: 2 },
            3: { label: { ko: '분기별 1회', en: 'Once per quarter', zh: '每季度一次' }, score: 3 },
            4: { label: { ko: '월 1-2회', en: '1-2 times per month', zh: '每月1-2次' }, score: 4 },
            5: { label: { ko: '주 1회 이상', en: 'Once a week or more', zh: '每周一次以上' }, score: 5 }
        }
    },
    thm_9: {
        id: 'thm_9',
        category: 'values',
        text: {
            ko: '노후 준비를 하고 있나요?',
            en: 'Are you preparing for retirement?',
            zh: '你在为退休做准备吗？'
        },
        options: {
            1: { label: { ko: '전혀 안 함', en: 'Not at all', zh: '完全不' }, score: 1 },
            2: { label: { ko: '생각만 함', en: 'Only thinking about it', zh: '只是想想' }, score: 2 },
            3: { label: { ko: '조금씩 저축', en: 'Save little by little', zh: '一点点储蓄' }, score: 3 },
            4: { label: { ko: '체계적으로 준비 중', en: 'Preparing systematically', zh: '系统地准备' }, score: 4 },
            5: { label: { ko: '구체적인 계획 실행 중', en: 'Executing specific plans', zh: '执行具体计划' }, score: 5 }
        }
    },
    thm_10: {
        id: 'thm_10',
        category: 'self',
        text: {
            ko: '자기계발을 계속하고 있나요?',
            en: 'Are you continuing self-development?',
            zh: '你在继续自我发展吗？'
        },
        options: {
            1: { label: { ko: '전혀 안 함', en: 'Not at all', zh: '完全不' }, score: 1 },
            2: { label: { ko: '필요할 때만', en: 'Only when necessary', zh: '只在必要时' }, score: 2 },
            3: { label: { ko: '가끔', en: 'Occasionally', zh: '偶尔' }, score: 3 },
            4: { label: { ko: '꾸준히', en: 'Consistently', zh: '持续' }, score: 4 },
            5: { label: { ko: '적극적으로 투자', en: 'Actively invest', zh: '积极投资' }, score: 5 }
        }
    }
};

// 30대 여성, 40대, 50대는 다음 파일에 계속...

// mentalAgeQuestions_part3.js - 30대 여성, 40대, 50대 질문

// ============================================
// 30대 여성 (Thirties Female)
// ============================================
export const QUESTIONS_30_FEMALE = {
    thf_1: {
        id: 'thf_1',
        category: 'emotion',
        text: {
            ko: '육아와 일을 병행하면서 느끼는 스트레스를 어떻게 관리하나요?',
            en: 'How do you manage stress from balancing childcare and work?',
            zh: '在平衡育儿和工作时如何管理压力？'
        },
        options: {
            1: { label: { ko: '폭발하거나 우울해짐', en: 'Explode or get depressed', zh: '爆发或抑郁' }, score: 1 },
            2: { label: { ko: '참다가 가족에게 풀음', en: 'Endure then take it out on family', zh: '忍耐后向家人发泄' }, score: 2 },
            3: { label: { ko: '친구와 수다', en: 'Chat with friends', zh: '和朋友聊天' }, score: 3 },
            4: { label: { ko: '나만의 시간 확보', en: 'Secure personal time', zh: '确保个人时间' }, score: 4 },
            5: { label: { ko: '배우자와 역할 분담 조정', en: 'Adjust role sharing with spouse', zh: '与配偶调整角色分担' }, score: 5 }
        }
    },
    thf_2: {
        id: 'thf_2',
        category: 'responsibility',
        text: {
            ko: '가계 재정 관리에 얼마나 참여하나요?',
            en: 'How much do you participate in household financial management?',
            zh: '你在家庭财务管理中参与多少？'
        },
        options: {
            1: { label: { ko: '배우자에게 맡김', en: 'Leave it to spouse', zh: '交给配偶' }, score: 1 },
            2: { label: { ko: '대충 파악', en: 'Roughly aware', zh: '大致了解' }, score: 2 },
            3: { label: { ko: '함께 관리', en: 'Manage together', zh: '共同管理' }, score: 3 },
            4: { label: { ko: '주도적으로 관리', en: 'Manage proactively', zh: '主动管理' }, score: 4 },
            5: { label: { ko: '장기 재무 계획 수립', en: 'Establish long-term financial plan', zh: '建立长期财务计划' }, score: 5 }
        }
    },
    thf_3: {
        id: 'thf_3',
        category: 'relationship',
        text: {
            ko: '배우자와의 관계를 어떻게 유지하나요?',
            en: 'How do you maintain your relationship with your spouse?',
            zh: '你如何维持与配偶的关系？'
        },
        options: {
            1: { label: { ko: '거의 대화 안 함', en: 'Barely talk', zh: '几乎不交谈' }, score: 1 },
            2: { label: { ko: '필요한 말만', en: 'Only necessary words', zh: '只说必要的话' }, score: 2 },
            3: { label: { ko: '일상적인 대화', en: 'Daily conversations', zh: '日常对话' }, score: 3 },
            4: { label: { ko: '깊은 대화 시간 마련', en: 'Make time for deep talks', zh: '安排深入对话时间' }, score: 4 },
            5: { label: { ko: '정기적인 데이트와 소통', en: 'Regular dates and communication', zh: '定期约会和沟通' }, score: 5 }
        }
    },
    thf_4: {
        id: 'thf_4',
        category: 'values',
        text: {
            ko: '자녀 교육에서 가장 중요하게 생각하는 것은?',
            en: 'What do you value most in children\'s education?',
            zh: '在子女教育中你最重视什么？'
        },
        options: {
            1: { label: { ko: '성적과 명문대', en: 'Grades and prestigious university', zh: '成绩和名校' }, score: 1 },
            2: { label: { ko: '좋은 직업', en: 'Good career', zh: '好的职业' }, score: 2 },
            3: { label: { ko: '다양한 경험', en: 'Diverse experiences', zh: '多样的经验' }, score: 3 },
            4: { label: { ko: '인성과 가치관', en: 'Character and values', zh: '品格和价值观' }, score: 4 },
            5: { label: { ko: '자녀의 행복과 자아실현', en: 'Child\'s happiness and self-actualization', zh: '孩子的幸福和自我实现' }, score: 5 }
        }
    },
    thf_5: {
        id: 'thf_5',
        category: 'emotion',
        text: {
            ko: '자신의 커리어를 포기한 것에 대해 어떻게 생각하나요?',
            en: 'How do you feel about giving up your career?',
            zh: '你对放弃职业有什么看法？'
        },
        options: {
            1: { label: { ko: '매우 후회하고 우울함', en: 'Very regretful and depressed', zh: '非常后悔和抑郁' }, score: 1 },
            2: { label: { ko: '아쉽지만 어쩔 수 없음', en: 'Regretful but inevitable', zh: '遗憾但无奈' }, score: 2 },
            3: { label: { ko: '가족을 위한 선택', en: 'Choice for family', zh: '为家庭的选择' }, score: 3 },
            4: { label: { ko: '만족하고 새로운 목표 설정', en: 'Satisfied and set new goals', zh: '满意并设定新目标' }, score: 4 },
            5: { label: { ko: '커리어를 유지하거나 재개 계획', en: 'Maintain career or plan to resume', zh: '维持职业或计划重启' }, score: 5 }
        }
    },
    thf_6: {
        id: 'thf_6',
        category: 'responsibility',
        text: {
            ko: '자신의 건강 관리를 어떻게 하나요?',
            en: 'How do you manage your own health?',
            zh: '你如何管理自己的健康？'
        },
        options: {
            1: { label: { ko: '전혀 신경 못 씀', en: "Can't care at all", zh: '完全无法顾及' }, score: 1 },
            2: { label: { ko: '아플 때만 병원', en: 'Only hospital when sick', zh: '只在生病时去医院' }, score: 2 },
            3: { label: { ko: '가끔 운동 시도', en: 'Try to exercise occasionally', zh: '偶尔尝试运动' }, score: 3 },
            4: { label: { ko: '규칙적인 운동과 식단', en: 'Regular exercise and diet', zh: '定期运动和饮食' }, score: 4 },
            5: { label: { ko: '정기 검진과 체계적 관리', en: 'Regular checkups and systematic care', zh: '定期检查和系统管理' }, score: 5 }
        }
    },
    thf_7: {
        id: 'thf_7',
        category: 'self',
        text: {
            ko: '자신만의 시간을 얼마나 확보하나요?',
            en: 'How much personal time do you secure?',
            zh: '你能确保多少个人时间？'
        },
        options: {
            1: { label: { ko: '전혀 없음', en: 'None at all', zh: '完全没有' }, score: 1 },
            2: { label: { ko: '거의 없음', en: 'Almost none', zh: '几乎没有' }, score: 2 },
            3: { label: { ko: '가끔', en: 'Occasionally', zh: '偶尔' }, score: 3 },
            4: { label: { ko: '주 1-2회', en: '1-2 times per week', zh: '每周1-2次' }, score: 4 },
            5: { label: { ko: '매일 일정 시간 확보', en: 'Secure time daily', zh: '每天确保一定时间' }, score: 5 }
        }
    },
    thf_8: {
        id: 'thf_8',
        category: 'relationship',
        text: {
            ko: '친구 관계를 어떻게 유지하나요?',
            en: 'How do you maintain friendships?',
            zh: '你如何维持友谊？'
        },
        options: {
            1: { label: { ko: '거의 끊김', en: 'Almost cut off', zh: '几乎断绝' }, score: 1 },
            2: { label: { ko: 'SNS로만 소통', en: 'Only communicate via SNS', zh: '只通过社交媒体沟通' }, score: 2 },
            3: { label: { ko: '가끔 연락', en: 'Contact occasionally', zh: '偶尔联系' }, score: 3 },
            4: { label: { ko: '정기적으로 만남', en: 'Meet regularly', zh: '定期见面' }, score: 4 },
            5: { label: { ko: '깊은 관계 지속 유지', en: 'Continuously maintain deep relationships', zh: '持续维持深厚关系' }, score: 5 }
        }
    },
    thf_9: {
        id: 'thf_9',
        category: 'emotion',
        text: {
            ko: '엄마로서의 죄책감을 어떻게 다루나요?',
            en: 'How do you handle guilt as a mother?',
            zh: '作为母亲你如何处理内疚感？'
        },
        options: {
            1: { label: { ko: '항상 죄책감에 시달림', en: 'Always suffer from guilt', zh: '总是受内疚困扰' }, score: 1 },
            2: { label: { ko: '자주 느낌', en: 'Feel often', zh: '经常感受到' }, score: 2 },
            3: { label: { ko: '가끔 느낌', en: 'Feel occasionally', zh: '偶尔感受到' }, score: 3 },
            4: { label: { ko: '최선을 다한다고 생각', en: 'Think I do my best', zh: '认为已尽力' }, score: 4 },
            5: { label: { ko: '건강한 경계 설정', en: 'Set healthy boundaries', zh: '设定健康界限' }, score: 5 }
        }
    },
    thf_10: {
        id: 'thf_10',
        category: 'self',
        text: {
            ko: '자기계발을 계속하고 있나요?',
            en: 'Are you continuing self-development?',
            zh: '你在继续自我发展吗？'
        },
        options: {
            1: { label: { ko: '전혀 못 함', en: "Can't at all", zh: '完全不能' }, score: 1 },
            2: { label: { ko: '하고 싶지만 여유 없음', en: 'Want to but no time', zh: '想但没时间' }, score: 2 },
            3: { label: { ko: '틈틈이 노력', en: 'Try when possible', zh: '有空时努力' }, score: 3 },
            4: { label: { ko: '시간을 내서 함', en: 'Make time for it', zh: '抽时间做' }, score: 4 },
            5: { label: { ko: '적극적으로 투자', en: 'Actively invest', zh: '积极投资' }, score: 5 }
        }
    }
};

// ============================================
// 40대 남성 (Forties Male)
// ============================================
export const QUESTIONS_40_MALE = {
    fm_1: {
        id: 'fm_1',
        category: 'emotion',
        text: {
            ko: '중년의 위기를 어떻게 극복하고 있나요?',
            en: 'How are you overcoming midlife crisis?',
            zh: '你如何克服中年危机？'
        },
        options: {
            1: { label: { ko: '부정하거나 회피', en: 'Deny or avoid', zh: '否认或回避' }, score: 1 },
            2: { label: { ko: '술이나 외도', en: 'Alcohol or affair', zh: '酒精或外遇' }, score: 2 },
            3: { label: { ko: '그냥 참고 살아감', en: 'Just endure and live', zh: '只是忍耐并生活' }, score: 3 },
            4: { label: { ko: '새로운 취미나 목표 설정', en: 'Set new hobbies or goals', zh: '设定新爱好或目标' }, score: 4 },
            5: { label: { ko: '성찰하고 의미 있는 변화 추구', en: 'Reflect and pursue meaningful change', zh: '反思并追求有意义的改变' }, score: 5 }
        }
    },
    fm_2: {
        id: 'fm_2',
        category: 'responsibility',
        text: {
            ko: '노후 준비를 얼마나 하고 있나요?',
            en: 'How much are you preparing for retirement?',
            zh: '你在为退休做多少准备？'
        },
        options: {
            1: { label: { ko: '전혀 안 함', en: 'Not at all', zh: '完全不' }, score: 1 },
            2: { label: { ko: '막연하게 생각만', en: 'Only vaguely thinking', zh: '只是模糊地想' }, score: 2 },
            3: { label: { ko: '조금씩 저축', en: 'Save little by little', zh: '一点点储蓄' }, score: 3 },
            4: { label: { ko: '체계적으로 준비', en: 'Prepare systematically', zh: '系统地准备' }, score: 4 },
            5: { label: { ko: '구체적인 계획 실행 중', en: 'Executing specific plans', zh: '执行具体计划' }, score: 5 }
        }
    },
    fm_3: {
        id: 'fm_3',
        category: 'relationship',
        text: {
            ko: '자녀와의 관계는 어떤가요?',
            en: 'How is your relationship with your children?',
            zh: '你和子女的关系如何？'
        },
        options: {
            1: { label: { ko: '거의 대화 안 함', en: 'Barely talk', zh: '几乎不交谈' }, score: 1 },
            2: { label: { ko: '훈계만 함', en: 'Only lecture', zh: '只是训诫' }, score: 2 },
            3: { label: { ko: '필요한 대화만', en: 'Only necessary talks', zh: '只进行必要对话' }, score: 3 },
            4: { label: { ko: '자주 대화하고 관심', en: 'Talk often and show interest', zh: '经常交谈并关心' }, score: 4 },
            5: { label: { ko: '친구처럼 깊은 소통', en: 'Deep communication like friends', zh: '像朋友一样深入沟通' }, score: 5 }
        }
    },
    fm_4: {
        id: 'fm_4',
        category: 'values',
        text: {
            ko: '인생에서 가장 중요한 가치는?',
            en: 'What is the most important value in life?',
            zh: '人生中最重要的价值是什么？'
        },
        options: {
            1: { label: { ko: '돈과 권력', en: 'Money and power', zh: '金钱和权力' }, score: 1 },
            2: { label: { ko: '사회적 성공', en: 'Social success', zh: '社会成功' }, score: 2 },
            3: { label: { ko: '가족의 안정', en: 'Family stability', zh: '家庭稳定' }, score: 3 },
            4: { label: { ko: '건강과 행복', en: 'Health and happiness', zh: '健康和幸福' }, score: 4 },
            5: { label: { ko: '삶의 의미와 기여', en: 'Life meaning and contribution', zh: '生活意义和贡献' }, score: 5 }
        }
    },
    fm_5: {
        id: 'fm_5',
        category: 'emotion',
        text: {
            ko: '건강 문제에 대한 불안을 어떻게 다루나요?',
            en: 'How do you handle anxiety about health issues?',
            zh: '你如何处理对健康问题的焦虑？'
        },
        options: {
            1: { label: { ko: '무시하고 방치', en: 'Ignore and neglect', zh: '忽视并放任' }, score: 1 },
            2: { label: { ko: '걱정만 함', en: 'Only worry', zh: '只是担心' }, score: 2 },
            3: { label: { ko: '가끔 검진', en: 'Occasional checkups', zh: '偶尔检查' }, score: 3 },
            4: { label: { ko: '정기 검진과 관리', en: 'Regular checkups and care', zh: '定期检查和管理' }, score: 4 },
            5: { label: { ko: '적극적인 건강 관리', en: 'Active health management', zh: '积极的健康管理' }, score: 5 }
        }
    },
    fm_6: {
        id: 'fm_6',
        category: 'responsibility',
        text: {
            ko: '부모님 부양에 대해 어떻게 생각하나요?',
            en: 'What do you think about supporting your parents?',
            zh: '你对赡养父母有什么看法？'
        },
        options: {
            1: { label: { ko: '생각 안 함', en: "Don't think about it", zh: '不想' }, score: 1 },
            2: { label: { ko: '형제들과 나눔', en: 'Share with siblings', zh: '与兄弟姐妹分担' }, score: 2 },
            3: { label: { ko: '경제적으로만 지원', en: 'Only financial support', zh: '只提供经济支持' }, score: 3 },
            4: { label: { ko: '정기적으로 방문하고 지원', en: 'Visit and support regularly', zh: '定期拜访并支持' }, score: 4 },
            5: { label: { ko: '적극적으로 모시고 돌봄', en: 'Actively care for them', zh: '积极照顾' }, score: 5 }
        }
    },
    fm_7: {
        id: 'fm_7',
        category: 'self',
        text: {
            ko: '새로운 것을 배우는 것에 대해 어떻게 생각하나요?',
            en: 'How do you feel about learning new things?',
            zh: '你对学习新事物有什么看法？'
        },
        options: {
            1: { label: { ko: '너무 늦었다고 생각', en: 'Think it\'s too late', zh: '认为太晚了' }, score: 1 },
            2: { label: { ko: '관심 없음', en: 'Not interested', zh: '不感兴趣' }, score: 2 },
            3: { label: { ko: '필요하면 배움', en: 'Learn if necessary', zh: '必要时学习' }, score: 3 },
            4: { label: { ko: '적극적으로 배움', en: 'Actively learn', zh: '积极学习' }, score: 4 },
            5: { label: { ko: '평생 학습 실천', en: 'Practice lifelong learning', zh: '实践终身学习' }, score: 5 }
        }
    },
    fm_8: {
        id: 'fm_8',
        category: 'relationship',
        text: {
            ko: '배우자와의 관계는 어떤가요?',
            en: 'How is your relationship with your spouse?',
            zh: '你和配偶的关系如何？'
        },
        options: {
            1: { label: { ko: '거의 대화 없음', en: 'Almost no conversation', zh: '几乎没有对话' }, score: 1 },
            2: { label: { ko: '필요한 말만', en: 'Only necessary words', zh: '只说必要的话' }, score: 2 },
            3: { label: { ko: '일상적인 대화', en: 'Daily conversations', zh: '日常对话' }, score: 3 },
            4: { label: { ko: '친밀하고 깊은 대화', en: 'Intimate and deep talks', zh: '亲密而深入的对话' }, score: 4 },
            5: { label: { ko: '최고의 친구이자 동반자', en: 'Best friend and partner', zh: '最好的朋友和伴侣' }, score: 5 }
        }
    },
    fm_9: {
        id: 'fm_9',
        category: 'values',
        text: {
            ko: '은퇴 후 계획이 있나요?',
            en: 'Do you have plans after retirement?',
            zh: '你有退休后的计划吗？'
        },
        options: {
            1: { label: { ko: '전혀 없음', en: 'None at all', zh: '完全没有' }, score: 1 },
            2: { label: { ko: '그냥 쉬고 싶음', en: 'Just want to rest', zh: '只想休息' }, score: 2 },
            3: { label: { ko: '취미 생활', en: 'Hobbies', zh: '爱好' }, score: 3 },
            4: { label: { ko: '새로운 일 시작', en: 'Start new work', zh: '开始新工作' }, score: 4 },
            5: { label: { ko: '사회 기여 활동', en: 'Social contribution activities', zh: '社会贡献活动' }, score: 5 }
        }
    },
    fm_10: {
        id: 'fm_10',
        category: 'self',
        text: {
            ko: '자신의 인생을 돌아볼 때 어떤 생각이 드나요?',
            en: 'What do you think when you look back on your life?',
            zh: '回顾人生时你有什么想法？'
        },
        options: {
            1: { label: { ko: '후회만 가득', en: 'Full of regrets', zh: '充满遗憾' }, score: 1 },
            2: { label: { ko: '아쉬움이 많음', en: 'Many regrets', zh: '很多遗憾' }, score: 2 },
            3: { label: { ko: '그럭저럭 살았음', en: 'Lived so-so', zh: '勉强过来了' }, score: 3 },
            4: { label: { ko: '만족스러움', en: 'Satisfactory', zh: '满意' }, score: 4 },
            5: { label: { ko: '의미 있고 감사함', en: 'Meaningful and grateful', zh: '有意义且感恩' }, score: 5 }
        }
    }
};

// 40대 여성, 50대는 다음 파일에...

// mentalAgeQuestions_part4.js - 40대 여성, 50대 남성/여성 질문

// ============================================
// 40대 여성 (Forties Female)
// ============================================
export const QUESTIONS_40_FEMALE = {
    ff_1: {
        id: 'ff_1',
        category: 'emotion',
        text: {
            ko: '갱년기 증상을 어떻게 관리하고 있나요?',
            en: 'How are you managing menopause symptoms?',
            zh: '你如何管理更年期症状？'
        },
        options: {
            1: { label: { ko: '무시하고 참음', en: 'Ignore and endure', zh: '忽视并忍耐' }, score: 1 },
            2: { label: { ko: '주변에 짜증냄', en: 'Take it out on others', zh: '对周围人发脾气' }, score: 2 },
            3: { label: { ko: '민간요법 시도', en: 'Try folk remedies', zh: '尝试民间疗法' }, score: 3 },
            4: { label: { ko: '병원 치료', en: 'Medical treatment', zh: '医院治疗' }, score: 4 },
            5: { label: { ko: '체계적인 건강 관리', en: 'Systematic health management', zh: '系统的健康管理' }, score: 5 }
        }
    },
    ff_2: {
        id: 'ff_2',
        category: 'responsibility',
        text: {
            ko: '자녀의 독립을 어떻게 준비하고 있나요?',
            en: 'How are you preparing for your children\'s independence?',
            zh: '你如何为子女的独立做准备？'
        },
        options: {
            1: { label: { ko: '독립 못하게 붙잡음', en: 'Hold them back', zh: '阻止独立' }, score: 1 },
            2: { label: { ko: '불안해하며 걱정', en: 'Anxious and worried', zh: '焦虑并担心' }, score: 2 },
            3: { label: { ko: '어쩔 수 없이 받아들임', en: 'Accept reluctantly', zh: '勉强接受' }, score: 3 },
            4: { label: { ko: '적극적으로 지원', en: 'Actively support', zh: '积极支持' }, score: 4 },
            5: { label: { ko: '독립을 격려하고 자신의 삶 준비', en: 'Encourage independence and prepare own life', zh: '鼓励独立并准备自己的生活' }, score: 5 }
        }
    },
    ff_3: {
        id: 'ff_3',
        category: 'relationship',
        text: {
            ko: '배우자와의 관계를 어떻게 재정립하고 있나요?',
            en: 'How are you redefining your relationship with your spouse?',
            zh: '你如何重新定义与配偶的关系？'
        },
        options: {
            1: { label: { ko: '관계가 소원해짐', en: 'Relationship becomes distant', zh: '关系变得疏远' }, score: 1 },
            2: { label: { ko: '그냥 익숙함으로 지냄', en: 'Just live with familiarity', zh: '只是习惯性地生活' }, score: 2 },
            3: { label: { ko: '필요한 대화만', en: 'Only necessary talks', zh: '只进行必要对话' }, score: 3 },
            4: { label: { ko: '새로운 관계 모색', en: 'Seek new relationship', zh: '寻找新关系' }, score: 4 },
            5: { label: { ko: '제2의 신혼처럼 친밀함', en: 'Intimate like second honeymoon', zh: '像第二次蜜月般亲密' }, score: 5 }
        }
    },
    ff_4: {
        id: 'ff_4',
        category: 'values',
        text: {
            ko: '이제 자신을 위한 시간을 어떻게 보내나요?',
            en: 'How do you spend time for yourself now?',
            zh: '现在你如何为自己花时间？'
        },
        options: {
            1: { label: { ko: '여전히 가족만 돌봄', en: 'Still only care for family', zh: '仍然只照顾家人' }, score: 1 },
            2: { label: { ko: 'TV나 스마트폰', en: 'TV or smartphone', zh: '电视或手机' }, score: 2 },
            3: { label: { ko: '친구들과 수다', en: 'Chat with friends', zh: '和朋友聊天' }, score: 3 },
            4: { label: { ko: '취미나 운동', en: 'Hobbies or exercise', zh: '爱好或运动' }, score: 4 },
            5: { label: { ko: '자기계발과 새로운 도전', en: 'Self-development and new challenges', zh: '自我发展和新挑战' }, score: 5 }
        }
    },
    ff_5: {
        id: 'ff_5',
        category: 'emotion',
        text: {
            ko: '빈둥지 증후군을 어떻게 극복하고 있나요?',
            en: 'How are you overcoming empty nest syndrome?',
            zh: '你如何克服空巢综合症？'
        },
        options: {
            1: { label: { ko: '우울하고 무기력함', en: 'Depressed and lethargic', zh: '抑郁且无力' }, score: 1 },
            2: { label: { ko: '자녀에게 자주 연락', en: 'Contact children often', zh: '经常联系子女' }, score: 2 },
            3: { label: { ko: '적응하려 노력', en: 'Try to adapt', zh: '努力适应' }, score: 3 },
            4: { label: { ko: '새로운 관계와 활동', en: 'New relationships and activities', zh: '新关系和活动' }, score: 4 },
            5: { label: { ko: '자유를 즐기고 새 인생 시작', en: 'Enjoy freedom and start new life', zh: '享受自由并开始新生活' }, score: 5 }
        }
    },
    ff_6: {
        id: 'ff_6',
        category: 'responsibility',
        text: {
            ko: '노후 준비를 어떻게 하고 있나요?',
            en: 'How are you preparing for retirement?',
            zh: '你如何为退休做准备？'
        },
        options: {
            1: { label: { ko: '전혀 안 함', en: 'Not at all', zh: '完全不' }, score: 1 },
            2: { label: { ko: '배우자에게 의존', en: 'Depend on spouse', zh: '依赖配偶' }, score: 2 },
            3: { label: { ko: '조금씩 저축', en: 'Save little by little', zh: '一点点储蓄' }, score: 3 },
            4: { label: { ko: '체계적으로 준비', en: 'Prepare systematically', zh: '系统地准备' }, score: 4 },
            5: { label: { ko: '경제적·정서적 독립 준비', en: 'Prepare financial and emotional independence', zh: '准备经济和情感独立' }, score: 5 }
        }
    },
    ff_7: {
        id: 'ff_7',
        category: 'self',
        text: {
            ko: '자신의 정체성을 어떻게 찾고 있나요?',
            en: 'How are you finding your identity?',
            zh: '你如何寻找自己的身份？'
        },
        options: {
            1: { label: { ko: '여전히 엄마로만 생각', en: 'Still think only as a mother', zh: '仍然只认为是母亲' }, score: 1 },
            2: { label: { ko: '혼란스러움', en: 'Confused', zh: '困惑' }, score: 2 },
            3: { label: { ko: '서서히 찾아가는 중', en: 'Gradually finding', zh: '逐渐寻找' }, score: 3 },
            4: { label: { ko: '새로운 나를 발견', en: 'Discovering new self', zh: '发现新自我' }, score: 4 },
            5: { label: { ko: '명확한 정체성 확립', en: 'Establish clear identity', zh: '建立清晰身份' }, score: 5 }
        }
    },
    ff_8: {
        id: 'ff_8',
        category: 'relationship',
        text: {
            ko: '친구 관계를 어떻게 유지하나요?',
            en: 'How do you maintain friendships?',
            zh: '你如何维持友谊？'
        },
        options: {
            1: { label: { ko: '거의 없음', en: 'Almost none', zh: '几乎没有' }, score: 1 },
            2: { label: { ko: '가끔 연락', en: 'Contact occasionally', zh: '偶尔联系' }, score: 2 },
            3: { label: { ko: '정기적으로 만남', en: 'Meet regularly', zh: '定期见面' }, score: 3 },
            4: { label: { ko: '깊은 우정 유지', en: 'Maintain deep friendship', zh: '维持深厚友谊' }, score: 4 },
            5: { label: { ko: '새로운 친구도 사귐', en: 'Make new friends too', zh: '也结交新朋友' }, score: 5 }
        }
    },
    ff_9: {
        id: 'ff_9',
        category: 'values',
        text: {
            ko: '인생의 후반부를 어떻게 보내고 싶나요?',
            en: 'How do you want to spend the latter half of your life?',
            zh: '你想如何度过人生的后半段？'
        },
        options: {
            1: { label: { ko: '생각 안 함', en: "Don't think about it", zh: '不想' }, score: 1 },
            2: { label: { ko: '그냥 편하게', en: 'Just comfortably', zh: '只是舒适地' }, score: 2 },
            3: { label: { ko: '가족과 함께', en: 'With family', zh: '和家人一起' }, score: 3 },
            4: { label: { ko: '하고 싶은 일 하며', en: 'Doing what I want', zh: '做想做的事' }, score: 4 },
            5: { label: { ko: '의미 있는 일로 사회 기여', en: 'Contribute to society with meaningful work', zh: '通过有意义的工作贡献社会' }, score: 5 }
        }
    },
    ff_10: {
        id: 'ff_10',
        category: 'self',
        text: {
            ko: '자기계발을 계속하고 있나요?',
            en: 'Are you continuing self-development?',
            zh: '你在继续自我发展吗？'
        },
        options: {
            1: { label: { ko: '전혀 안 함', en: 'Not at all', zh: '完全不' }, score: 1 },
            2: { label: { ko: '관심 없음', en: 'Not interested', zh: '不感兴趣' }, score: 2 },
            3: { label: { ko: '가끔', en: 'Occasionally', zh: '偶尔' }, score: 3 },
            4: { label: { ko: '적극적으로', en: 'Actively', zh: '积极地' }, score: 4 },
            5: { label: { ko: '평생 학습 실천', en: 'Practice lifelong learning', zh: '实践终身学习' }, score: 5 }
        }
    }
};

// ============================================
// 50대 남성 (Fifties Male)
// ============================================
export const QUESTIONS_50_MALE = {
    fim_1: {
        id: 'fim_1',
        category: 'emotion',
        text: {
            ko: '은퇴에 대한 두려움을 어떻게 다루나요?',
            en: 'How do you handle fear of retirement?',
            zh: '你如何处理对退休的恐惧？'
        },
        options: {
            1: { label: { ko: '매우 불안하고 우울함', en: 'Very anxious and depressed', zh: '非常焦虑和抑郁' }, score: 1 },
            2: { label: { ko: '부정하고 회피', en: 'Deny and avoid', zh: '否认并回避' }, score: 2 },
            3: { label: { ko: '걱정은 하지만 준비 안 함', en: 'Worry but don\'t prepare', zh: '担心但不准备' }, score: 3 },
            4: { label: { ko: '적극적으로 준비', en: 'Actively prepare', zh: '积极准备' }, score: 4 },
            5: { label: { ko: '새로운 시작으로 긍정적 수용', en: 'Accept positively as new beginning', zh: '积极接受为新开始' }, score: 5 }
        }
    },
    fim_2: {
        id: 'fim_2',
        category: 'responsibility',
        text: {
            ko: '노후 자금은 충분히 준비되어 있나요?',
            en: 'Do you have sufficient retirement funds prepared?',
            zh: '你准备了足够的退休资金吗？'
        },
        options: {
            1: { label: { ko: '전혀 없음', en: 'None at all', zh: '完全没有' }, score: 1 },
            2: { label: { ko: '매우 부족', en: 'Very insufficient', zh: '非常不足' }, score: 2 },
            3: { label: { ko: '어느 정도 준비', en: 'Somewhat prepared', zh: '有一定准备' }, score: 3 },
            4: { label: { ko: '충분히 준비', en: 'Well prepared', zh: '充分准备' }, score: 4 },
            5: { label: { ko: '여유 있게 준비', en: 'Comfortably prepared', zh: '宽裕地准备' }, score: 5 }
        }
    },
    fim_3: {
        id: 'fim_3',
        category: 'relationship',
        text: {
            ko: '배우자와 은퇴 후 생활을 어떻게 준비하나요?',
            en: 'How do you prepare for post-retirement life with your spouse?',
            zh: '你如何与配偶准备退休后的生活？'
        },
        options: {
            1: { label: { ko: '전혀 대화 안 함', en: 'No discussion at all', zh: '完全不讨论' }, score: 1 },
            2: { label: { ko: '각자 알아서', en: 'Each on their own', zh: '各自为政' }, score: 2 },
            3: { label: { ko: '가끔 이야기', en: 'Talk occasionally', zh: '偶尔谈论' }, score: 3 },
            4: { label: { ko: '함께 계획', en: 'Plan together', zh: '共同计划' }, score: 4 },
            5: { label: { ko: '구체적인 계획 수립', en: 'Establish specific plans', zh: '建立具体计划' }, score: 5 }
        }
    },
    fim_4: {
        id: 'fim_4',
        category: 'values',
        text: {
            ko: '은퇴 후 무엇을 하고 싶나요?',
            en: 'What do you want to do after retirement?',
            zh: '退休后你想做什么？'
        },
        options: {
            1: { label: { ko: '아무 생각 없음', en: 'No thoughts', zh: '没想法' }, score: 1 },
            2: { label: { ko: '그냥 쉬고 싶음', en: 'Just want to rest', zh: '只想休息' }, score: 2 },
            3: { label: { ko: '취미 생활', en: 'Hobbies', zh: '爱好' }, score: 3 },
            4: { label: { ko: '새로운 일 시작', en: 'Start new work', zh: '开始新工作' }, score: 4 },
            5: { label: { ko: '사회 기여 활동', en: 'Social contribution', zh: '社会贡献' }, score: 5 }
        }
    },
    fim_5: {
        id: 'fim_5',
        category: 'emotion',
        text: {
            ko: '건강 문제를 어떻게 관리하나요?',
            en: 'How do you manage health issues?',
            zh: '你如何管理健康问题？'
        },
        options: {
            1: { label: { ko: '무시하고 방치', en: 'Ignore and neglect', zh: '忽视并放任' }, score: 1 },
            2: { label: { ko: '아플 때만 병원', en: 'Only hospital when sick', zh: '只在生病时去医院' }, score: 2 },
            3: { label: { ko: '정기 검진', en: 'Regular checkups', zh: '定期检查' }, score: 3 },
            4: { label: { ko: '운동과 식단 관리', en: 'Exercise and diet management', zh: '运动和饮食管理' }, score: 4 },
            5: { label: { ko: '체계적인 건강 관리', en: 'Systematic health management', zh: '系统的健康管理' }, score: 5 }
        }
    },
    fim_6: {
        id: 'fim_6',
        category: 'responsibility',
        text: {
            ko: '자녀들의 독립을 어떻게 지원하나요?',
            en: 'How do you support your children\'s independence?',
            zh: '你如何支持子女的独立？'
        },
        options: {
            1: { label: { ko: '계속 의존하게 함', en: 'Keep them dependent', zh: '让他们继续依赖' }, score: 1 },
            2: { label: { ko: '경제적으로만 지원', en: 'Only financial support', zh: '只提供经济支持' }, score: 2 },
            3: { label: { ko: '필요할 때 도움', en: 'Help when needed', zh: '需要时帮助' }, score: 3 },
            4: { label: { ko: '독립을 격려', en: 'Encourage independence', zh: '鼓励独立' }, score: 4 },
            5: { label: { ko: '완전한 독립 지원', en: 'Support complete independence', zh: '支持完全独立' }, score: 5 }
        }
    },
    fim_7: {
        id: 'fim_7',
        category: 'self',
        text: {
            ko: '인생을 돌아볼 때 어떤 생각이 드나요?',
            en: 'What do you think when you look back on your life?',
            zh: '回顾人生时你有什么想法？'
        },
        options: {
            1: { label: { ko: '후회만 가득', en: 'Full of regrets', zh: '充满遗憾' }, score: 1 },
            2: { label: { ko: '아쉬움이 많음', en: 'Many regrets', zh: '很多遗憾' }, score: 2 },
            3: { label: { ko: '그럭저럭 살았음', en: 'Lived so-so', zh: '勉强过来了' }, score: 3 },
            4: { label: { ko: '만족스러움', en: 'Satisfactory', zh: '满意' }, score: 4 },
            5: { label: { ko: '의미 있고 감사함', en: 'Meaningful and grateful', zh: '有意义且感恩' }, score: 5 }
        }
    },
    fim_8: {
        id: 'fim_8',
        category: 'relationship',
        text: {
            ko: '손주들과의 관계는 어떤가요?',
            en: 'How is your relationship with grandchildren?',
            zh: '你和孙辈的关系如何？'
        },
        options: {
            1: { label: { ko: '거의 안 봄', en: 'Rarely see them', zh: '很少见' }, score: 1 },
            2: { label: { ko: '가끔 봄', en: 'See occasionally', zh: '偶尔见' }, score: 2 },
            3: { label: { ko: '자주 봄', en: 'See often', zh: '经常见' }, score: 3 },
            4: { label: { ko: '친밀하게 지냄', en: 'Close relationship', zh: '亲密相处' }, score: 4 },
            5: { label: { ko: '적극적으로 돌봄', en: 'Actively care for them', zh: '积极照顾' }, score: 5 }
        }
    },
    fim_9: {
        id: 'fim_9',
        category: 'values',
        text: {
            ko: '남은 인생에서 가장 중요한 것은?',
            en: 'What is most important in your remaining life?',
            zh: '在余生中最重要的是什么？'
        },
        options: {
            1: { label: { ko: '돈', en: 'Money', zh: '金钱' }, score: 1 },
            2: { label: { ko: '편안함', en: 'Comfort', zh: '舒适' }, score: 2 },
            3: { label: { ko: '가족', en: 'Family', zh: '家庭' }, score: 3 },
            4: { label: { ko: '건강과 행복', en: 'Health and happiness', zh: '健康和幸福' }, score: 4 },
            5: { label: { ko: '삶의 의미와 유산', en: 'Life meaning and legacy', zh: '生活意义和遗产' }, score: 5 }
        }
    },
    fim_10: {
        id: 'fim_10',
        category: 'self',
        text: {
            ko: '새로운 것을 배우는 것에 대해 어떻게 생각하나요?',
            en: 'How do you feel about learning new things?',
            zh: '你对学习新事物有什么看法？'
        },
        options: {
            1: { label: { ko: '너무 늦었다고 생각', en: 'Think it\'s too late', zh: '认为太晚了' }, score: 1 },
            2: { label: { ko: '관심 없음', en: 'Not interested', zh: '不感兴趣' }, score: 2 },
            3: { label: { ko: '필요하면 배움', en: 'Learn if necessary', zh: '必要时学习' }, score: 3 },
            4: { label: { ko: '적극적으로 배움', en: 'Actively learn', zh: '积极学习' }, score: 4 },
            5: { label: { ko: '평생 학습 실천', en: 'Practice lifelong learning', zh: '实践终身学习' }, score: 5 }
        }
    }
};

// ============================================
// 50대 여성 (Fifties Female)
// ============================================
export const QUESTIONS_50_FEMALE = {
    fif_1: {
        id: 'fif_1',
        category: 'emotion',
        text: {
            ko: '갱년기 이후 자신의 변화를 어떻게 받아들이나요?',
            en: 'How do you accept changes after menopause?',
            zh: '你如何接受更年期后的变化？'
        },
        options: {
            1: { label: { ko: '부정하고 우울함', en: 'Deny and depressed', zh: '否认并抑郁' }, score: 1 },
            2: { label: { ko: '받아들이기 힘듦', en: 'Hard to accept', zh: '难以接受' }, score: 2 },
            3: { label: { ko: '어쩔 수 없이 수용', en: 'Accept reluctantly', zh: '勉强接受' }, score: 3 },
            4: { label: { ko: '자연스럽게 받아들임', en: 'Accept naturally', zh: '自然接受' }, score: 4 },
            5: { label: { ko: '긍정적으로 새 출발', en: 'Positive new start', zh: '积极的新开始' }, score: 5 }
        }
    },
    fif_2: {
        id: 'fif_2',
        category: 'responsibility',
        text: {
            ko: '노후 준비를 어떻게 하고 있나요?',
            en: 'How are you preparing for retirement?',
            zh: '你如何为退休做准备？'
        },
        options: {
            1: { label: { ko: '전혀 안 함', en: 'Not at all', zh: '完全不' }, score: 1 },
            2: { label: { ko: '배우자에게 의존', en: 'Depend on spouse', zh: '依赖配偶' }, score: 2 },
            3: { label: { ko: '조금씩 저축', en: 'Save little by little', zh: '一点点储蓄' }, score: 3 },
            4: { label: { ko: '체계적으로 준비', en: 'Prepare systematically', zh: '系统地准备' }, score: 4 },
            5: { label: { ko: '독립적으로 충분히 준비', en: 'Independently well prepared', zh: '独立地充分准备' }, score: 5 }
        }
    },
    fif_3: {
        id: 'fif_3',
        category: 'relationship',
        text: {
            ko: '배우자와의 관계는 어떤가요?',
            en: 'How is your relationship with your spouse?',
            zh: '你和配偶的关系如何？'
        },
        options: {
            1: { label: { ko: '거의 대화 없음', en: 'Almost no conversation', zh: '几乎没有对话' }, score: 1 },
            2: { label: { ko: '필요한 말만', en: 'Only necessary words', zh: '只说必要的话' }, score: 2 },
            3: { label: { ko: '일상적인 대화', en: 'Daily conversations', zh: '日常对话' }, score: 3 },
            4: { label: { ko: '친밀하고 깊은 대화', en: 'Intimate and deep talks', zh: '亲密而深入的对话' }, score: 4 },
            5: { label: { ko: '최고의 동반자', en: 'Best companion', zh: '最好的伴侣' }, score: 5 }
        }
    },
    fif_4: {
        id: 'fif_4',
        category: 'values',
        text: {
            ko: '남은 인생을 어떻게 보내고 싶나요?',
            en: 'How do you want to spend your remaining life?',
            zh: '你想如何度过余生？'
        },
        options: {
            1: { label: { ko: '생각 안 함', en: "Don't think about it", zh: '不想' }, score: 1 },
            2: { label: { ko: '그냥 편하게', en: 'Just comfortably', zh: '只是舒适地' }, score: 2 },
            3: { label: { ko: '가족과 함께', en: 'With family', zh: '和家人一起' }, score: 3 },
            4: { label: { ko: '하고 싶은 일 하며', en: 'Doing what I want', zh: '做想做的事' }, score: 4 },
            5: { label: { ko: '의미 있는 일로 기여', en: 'Contribute with meaningful work', zh: '通过有意义的工作贡献' }, score: 5 }
        }
    },
    fif_5: {
        id: 'fif_5',
        category: 'emotion',
        text: {
            ko: '손주 돌봄에 대해 어떻게 생각하나요?',
            en: 'What do you think about caring for grandchildren?',
            zh: '你对照顾孙辈有什么看法？'
        },
        options: {
            1: { label: { ko: '부담스럽고 싫음', en: 'Burdensome and dislike', zh: '负担且不喜欢' }, score: 1 },
            2: { label: { ko: '어쩔 수 없이 함', en: 'Do it reluctantly', zh: '勉强做' }, score: 2 },
            3: { label: { ko: '가끔은 좋음', en: 'Good occasionally', zh: '偶尔还好' }, score: 3 },
            4: { label: { ko: '기쁘게 도움', en: 'Happily help', zh: '高兴地帮助' }, score: 4 },
            5: { label: { ko: '적절한 경계 유지하며 즐김', en: 'Enjoy while maintaining boundaries', zh: '保持适当界限并享受' }, score: 5 }
        }
    },
    fif_6: {
        id: 'fif_6',
        category: 'responsibility',
        text: {
            ko: '건강 관리를 어떻게 하나요?',
            en: 'How do you manage your health?',
            zh: '你如何管理健康？'
        },
        options: {
            1: { label: { ko: '전혀 신경 안 씀', en: "Don't care at all", zh: '完全不在意' }, score: 1 },
            2: { label: { ko: '아플 때만 병원', en: 'Only hospital when sick', zh: '只在生病时去医院' }, score: 2 },
            3: { label: { ko: '정기 검진', en: 'Regular checkups', zh: '定期检查' }, score: 3 },
            4: { label: { ko: '운동과 식단 관리', en: 'Exercise and diet management', zh: '运动和饮食管理' }, score: 4 },
            5: { label: { ko: '체계적인 건강 관리', en: 'Systematic health management', zh: '系统的健康管理' }, score: 5 }
        }
    },
    fif_7: {
        id: 'fif_7',
        category: 'self',
        text: {
            ko: '자신만의 정체성을 찾았나요?',
            en: 'Have you found your own identity?',
            zh: '你找到了自己的身份吗？'
        },
        options: {
            1: { label: { ko: '여전히 혼란스러움', en: 'Still confused', zh: '仍然困惑' }, score: 1 },
            2: { label: { ko: '찾고 있는 중', en: 'Still searching', zh: '正在寻找' }, score: 2 },
            3: { label: { ko: '어느 정도 찾음', en: 'Found somewhat', zh: '找到了一些' }, score: 3 },
            4: { label: { ko: '명확히 찾음', en: 'Clearly found', zh: '清楚地找到' }, score: 4 },
            5: { label: { ko: '확립하고 실천 중', en: 'Established and practicing', zh: '确立并实践中' }, score: 5 }
        }
    },
    fif_8: {
        id: 'fif_8',
        category: 'relationship',
        text: {
            ko: '친구 관계를 어떻게 유지하나요?',
            en: 'How do you maintain friendships?',
            zh: '你如何维持友谊？'
        },
        options: {
            1: { label: { ko: '거의 없음', en: 'Almost none', zh: '几乎没有' }, score: 1 },
            2: { label: { ko: '가끔 연락', en: 'Contact occasionally', zh: '偶尔联系' }, score: 2 },
            3: { label: { ko: '정기적으로 만남', en: 'Meet regularly', zh: '定期见面' }, score: 3 },
            4: { label: { ko: '깊은 우정 유지', en: 'Maintain deep friendship', zh: '维持深厚友谊' }, score: 4 },
            5: { label: { ko: '새로운 친구도 사귐', en: 'Make new friends too', zh: '也结交新朋友' }, score: 5 }
        }
    },
    fif_9: {
        id: 'fif_9',
        category: 'values',
        text: {
            ko: '사회 활동이나 봉사를 하고 있나요?',
            en: 'Are you doing social activities or volunteering?',
            zh: '你在进行社会活动或志愿服务吗？'
        },
        options: {
            1: { label: { ko: '전혀 안 함', en: 'Not at all', zh: '完全不' }, score: 1 },
            2: { label: { ko: '관심 없음', en: 'Not interested', zh: '不感兴趣' }, score: 2 },
            3: { label: { ko: '가끔', en: 'Occasionally', zh: '偶尔' }, score: 3 },
            4: { label: { ko: '정기적으로', en: 'Regularly', zh: '定期' }, score: 4 },
            5: { label: { ko: '적극적으로 참여', en: 'Actively participate', zh: '积极参与' }, score: 5 }
        }
    },
    fif_10: {
        id: 'fif_10',
        category: 'self',
        text: {
            ko: '자기계발을 계속하고 있나요?',
            en: 'Are you continuing self-development?',
            zh: '你在继续自我发展吗？'
        },
        options: {
            1: { label: { ko: '전혀 안 함', en: 'Not at all', zh: '完全不' }, score: 1 },
            2: { label: { ko: '관심 없음', en: 'Not interested', zh: '不感兴趣' }, score: 2 },
            3: { label: { ko: '가끔', en: 'Occasionally', zh: '偶尔' }, score: 3 },
            4: { label: { ko: '적극적으로', en: 'Actively', zh: '积极地' }, score: 4 },
            5: { label: { ko: '평생 학습 실천', en: 'Practice lifelong learning', zh: '实践终身学习' }, score: 5 }
        }
    }
};
