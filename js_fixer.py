
import os

# Clean formatted Work Life Content
WORK_LIFE = """
    // ============================================
    // 직장·회사 생활 (w_t1 ~ w_50_10)
    // ============================================

    // 10대 - 아르바이트/진로 (w_t1~w_t10)
    w_t1: {
        id: 'w_t1',
        text: {
            ko: '아르바이트 경험이 있나요?',
            en: 'Do you have part-time job experience?',
            zh: '有兼职经验吗？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '있음', en: 'Yes', zh: '有' }, score: 5 },
            2: { label: { ko: '없음', en: 'No', zh: '没有' }, score: 2 }
        }
    },

    w_t2: {
        id: 'w_t2',
        text: {
            ko: '장래 희망 직업이 정해졌나요?',
            en: 'Have you decided on a future career?',
            zh: '决定了未来职业吗？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '정해짐', en: 'Decided', zh: '已决定' }, score: 5 },
            2: { label: { ko: '고민 중', en: 'Considering', zh: '考虑中' }, score: 3 },
            3: { label: { ko: '모름', en: 'Not sure', zh: '不确定' }, score: 1 }
        }
    },

    w_t3: {
        id: 'w_t3',
        text: {
            ko: '진로 상담을 받아본 적이 있나요?',
            en: 'Have you received career counseling?',
            zh: '接受过职业咨询吗？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '있음', en: 'Yes', zh: '有' }, score: 5 },
            2: { label: { ko: '없음', en: 'No', zh: '没有' }, score: 2 }
        }
    },

    w_t4: {
        id: 'w_t4',
        text: {
            ko: '직업 선택 시 가장 중요한 것은?',
            en: 'What matters most in choosing a career?',
            zh: '选择职业时最重要的是？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '적성', en: 'Aptitude', zh: '适性' }, score: 5 },
            2: { label: { ko: '연봉', en: 'Salary', zh: '薪水' }, score: 3 },
            3: { label: { ko: '안정성', en: 'Stability', zh: '稳定性' }, score: 4 }
        }
    },

    w_t5: {
        id: 'w_t5',
        text: {
            ko: '인턴십에 관심이 있나요?',
            en: 'Are you interested in internships?',
            zh: '对实习感兴趣吗？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '매우', en: 'Very', zh: '非常' }, score: 5 },
            2: { label: { ko: '보통', en: 'Moderate', zh: '一般' }, score: 3 },
            3: { label: { ko: '없음', en: 'Not really', zh: '不太' }, score: 1 }
        }
    },

    w_t6: {
        id: 'w_t6',
        text: {
            ko: '팀 프로젝트 경험은?',
            en: 'Team project experience?',
            zh: '团队项目经验？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '많음', en: 'A lot', zh: '很多' }, score: 5 },
            2: { label: { ko: '보통', en: 'Some', zh: '一些' }, score: 3 },
            3: { label: { ko: '없음', en: 'None', zh: '没有' }, score: 1 }
        }
    },

    w_t7: {
        id: 'w_t7',
        text: {
            ko: '리더 역할을 맡아본 적이 있나요?',
            en: 'Have you taken a leadership role?',
            zh: '担任过领导角色吗？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '있음', en: 'Yes', zh: '有' }, score: 5 },
            2: { label: { ko: '없음', en: 'No', zh: '没有' }, score: 2 }
        }
    },

    w_t8: {
        id: 'w_t8',
        text: {
            ko: '자격증 취득 계획이 있나요?',
            en: 'Do you plan to get certifications?',
            zh: '有考证计划吗？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '있음', en: 'Yes', zh: '有' }, score: 5 },
            2: { label: { ko: '고민 중', en: 'Considering', zh: '考虑中' }, score: 3 },
            3: { label: { ko: '없음', en: 'No', zh: '没有' }, score: 1 }
        }
    },

    w_t9: {
        id: 'w_t9',
        text: {
            ko: '대학 전공 선택은?',
            en: 'How did you choose your major?',
            zh: '如何选择专业？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '적성 고려', en: 'Based on aptitude', zh: '根据适性' }, score: 5 },
            2: { label: { ko: '취업률', en: 'Job prospects', zh: '就业率' }, score: 3 },
            3: { label: { ko: '부모 권유', en: 'Parents suggestion', zh: '父母建议' }, score: 2 }
        }
    },

    w_t10: {
        id: 'w_t10',
        text: {
            ko: '창업에 관심이 있나요?',
            en: 'Interested in starting a business?',
            zh: '对创业感兴趣吗？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '있음', en: 'Yes', zh: '有' }, score: 4 },
            2: { label: { ko: '없음', en: 'No', zh: '没有' }, score: 2 }
        }
    },

    // 20대 - 첫 직장/커리어 시작 (w_20_1~w_20_10)
    w_20_1: {
        id: 'w_20_1',
        text: {
            ko: '현재 직장 상태는?',
            en: 'Current employment status?',
            zh: '目前就业状态？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '재직 중', en: 'Employed', zh: '在职' }, score: 5 },
            2: { label: { ko: '구직 중', en: 'Job seeking', zh: '求职中' }, score: 3 },
            3: { label: { ko: '학생', en: 'Student', zh: '学生' }, score: 2 }
        }
    },

    w_20_2: {
        id: 'w_20_2',
        text: {
            ko: '업무 스트레스 수준은?',
            en: 'Work stress level?',
            zh: '工作压力水平？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '높음', en: 'High', zh: '高' }, score: 5 },
            2: { label: { ko: '보통', en: 'Moderate', zh: '一般' }, score: 3 },
            3: { label: { ko: '낮음', en: 'Low', zh: '低' }, score: 1 }
        }
    },

    w_20_3: {
        id: 'w_20_3',
        text: {
            ko: '야근 빈도는?',
            en: 'Overtime frequency?',
            zh: '加班频率？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '자주', en: 'Often', zh: '经常' }, score: 5 },
            2: { label: { ko: '가끔', en: 'Sometimes', zh: '偶尔' }, score: 3 },
            3: { label: { ko: '거의 없음', en: 'Rarely', zh: '很少' }, score: 1 }
        }
    },

    w_20_4: {
        id: 'w_20_4',
        text: {
            ko: '이직 계획이 있나요?',
            en: 'Do you plan to change jobs?',
            zh: '有换工作计划吗？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '있음', en: 'Yes', zh: '有' }, score: 4 },
            2: { label: { ko: '고민 중', en: 'Considering', zh: '考虑中' }, score: 3 },
            3: { label: { ko: '없음', en: 'No', zh: '没有' }, score: 5 }
        }
    },

    w_20_5: {
        id: 'w_20_5',
        text: {
            ko: '직장 동료와의 관계는?',
            en: 'Relationship with colleagues?',
            zh: '与同事的关系？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '좋음', en: 'Good', zh: '好' }, score: 5 },
            2: { label: { ko: '보통', en: 'Okay', zh: '一般' }, score: 3 },
            3: { label: { ko: '나쁨', en: 'Bad', zh: '不好' }, score: 1 }
        }
    },

    w_20_6: {
        id: 'w_20_6',
        text: {
            ko: '업무 외 자기계발 시간은?',
            en: 'Time for self-development outside work?',
            zh: '工作外自我发展时间？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '많음', en: 'A lot', zh: '很多' }, score: 5 },
            2: { label: { ko: '보통', en: 'Some', zh: '一些' }, score: 3 },
            3: { label: { ko: '없음', en: 'None', zh: '没有' }, score: 1 }
        }
    },

    w_20_7: {
        id: 'w_20_7',
        text: {
            ko: '상사와의 관계는?',
            en: 'Relationship with boss?',
            zh: '与上司的关系？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '좋음', en: 'Good', zh: '好' }, score: 5 },
            2: { label: { ko: '보통', en: 'Okay', zh: '一般' }, score: 3 },
            3: { label: { ko: '나쁨', en: 'Bad', zh: '不好' }, score: 1 }
        }
    },

    w_20_8: {
        id: 'w_20_8',
        text: {
            ko: '연봉 협상 경험은?',
            en: 'Salary negotiation experience?',
            zh: '薪资谈判经验？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '있음', en: 'Yes', zh: '有' }, score: 5 },
            2: { label: { ko: '없음', en: 'No', zh: '没有' }, score: 2 }
        }
    },

    w_20_9: {
        id: 'w_20_9',
        text: {
            ko: '회사 복지 만족도는?',
            en: 'Satisfaction with company benefits?',
            zh: '对公司福利的满意度？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '만족', en: 'Satisfied', zh: '满意' }, score: 5 },
            2: { label: { ko: '보통', en: 'Okay', zh: '一般' }, score: 3 },
            3: { label: { ko: '불만', en: 'Unsatisfied', zh: '不满' }, score: 1 }
        }
    },

    w_20_10: {
        id: 'w_20_10',
        text: {
            ko: '퇴근 후 업무 연락에 대한 태도는?',
            en: 'Attitude toward work calls after hours?',
            zh: '下班后工作联系的态度？'
        },
        type: 'single',
        options: {
            1: { label: { ko: '받지 않음', en: 'Don\\'t answer', zh: '不接' }, score: 2 },
            2: { label: { ko: '상황에 따라', en: 'Depends', zh: '看情况' }, score: 4 },
            3: { label: { ko: '항상 받음', en: 'Always answer', zh: '总是接' }, score: 5 }
        }
    },

    // 30대 - 중간 관리자/전문가 (w_30_1~w_30_10)
    w_30_1: {
        id: 'w_30_1',
        text: { ko: '현재 직급은?', en: 'Current position?', zh: '目前职位？' },
        type: 'single',
        options: {
            1: { label: { ko: '팀장급 이상', en: 'Team leader+', zh: '组长以上' }, score: 5 },
            2: { label: { ko: '중간 직급', en: 'Mid-level', zh: '中层' }, score: 3 },
            3: { label: { ko: '사원급', en: 'Staff', zh: '员工' }, score: 2 }
        }
    },
    w_30_2: {
        id: 'w_30_2',
        text: { ko: '부하 직원이 있나요?', en: 'Do you have subordinates?', zh: '有下属吗？' },
        type: 'single',
        options: {
            1: { label: { ko: '있음', en: 'Yes', zh: '有' }, score: 5 },
            2: { label: { ko: '없음', en: 'No', zh: '没有' }, score: 2 }
        }
    },
    w_30_3: {
        id: 'w_30_3',
        text: { ko: '업무와 가정의 균형은?', en: 'Work-life balance?', zh: '工作与家庭的平衡？' },
        type: 'single',
        options: {
            1: { label: { ko: '균형', en: 'Balanced', zh: '平衡' }, score: 5 },
            2: { label: { ko: '일 중심', en: 'Work-focused', zh: '以工作为主' }, score: 3 },
            3: { label: { ko: '불균형', en: 'Imbalanced', zh: '不平衡' }, score: 2 }
        }
    },
    w_30_4: {
        id: 'w_30_4',
        text: { ko: '승진 기회에 대한 생각은?', en: 'Thoughts on promotion opportunities?', zh: '对晋升机会的看法？' },
        type: 'single',
        options: {
            1: { label: { ko: '적극적', en: 'Actively pursuing', zh: '积极追求' }, score: 5 },
            2: { label: { ko: '보통', en: 'Moderate', zh: '一般' }, score: 3 },
            3: { label: { ko: '관심 없음', en: 'Not interested', zh: '不感兴趣' }, score: 1 }
        }
    },
    w_30_5: {
        id: 'w_30_5',
        text: { ko: '회사 내 인맥 관리는?', en: 'How do you manage workplace relationships?', zh: '如何管理职场人脉？' },
        type: 'single',
        options: {
            1: { label: { ko: '적극적', en: 'Actively', zh: '积极' }, score: 5 },
            2: { label: { ko: '보통', en: 'Moderate', zh: '一般' }, score: 3 },
            3: { label: { ko: '소극적', en: 'Passive', zh: '消极' }, score: 1 }
        }
    },
    w_30_6: {
        id: 'w_30_6',
        text: { ko: '업무 관련 스트레스 해소법은?', en: 'How do you relieve work stress?', zh: '如何缓解工作压力？' },
        type: 'single',
        options: {
            1: { label: { ko: '운동', en: 'Exercise', zh: '运动' }, score: 5 },
            2: { label: { ko: '취미', en: 'Hobbies', zh: '爱好' }, score: 4 },
            3: { label: { ko: '음주', en: 'Drinking', zh: '喝酒' }, score: 2 }
        }
    },
    w_30_7: {
        id: 'w_30_7',
        text: { ko: '이직 경험은?', en: 'Job change experience?', zh: '换工作经验？' },
        type: 'single',
        options: {
            1: { label: { ko: '3회 이상', en: '3+ times', zh: '3次以上' }, score: 4 },
            2: { label: { ko: '1-2회', en: '1-2 times', zh: '1-2次' }, score: 3 },
            3: { label: { ko: '없음', en: 'None', zh: '没有' }, score: 5 }
        }
    },
    w_30_8: {
        id: 'w_30_8',
        text: { ko: '회의 시 발언 빈도는?', en: 'How often do you speak in meetings?', zh: '会议中发言频率？' },
        type: 'single',
        options: {
            1: { label: { ko: '자주', en: 'Often', zh: '经常' }, score: 5 },
            2: { label: { ko: '가끔', en: 'Sometimes', zh: '偶尔' }, score: 3 },
            3: { label: { ko: '거의 없음', en: 'Rarely', zh: '很少' }, score: 1 }
        }
    },
    w_30_9: {
        id: 'w_30_9',
        text: { ko: '업무 외 네트워킹 활동은?', en: 'Networking activities outside work?', zh: '工作外的社交活动？' },
        type: 'single',
        options: {
            1: { label: { ko: '적극적', en: 'Active', zh: '积极' }, score: 5 },
            2: { label: { ko: '보통', en: 'Moderate', zh: '一般' }, score: 3 },
            3: { label: { ko: '없음', en: 'None', zh: '没有' }, score: 1 }
        }
    },
    w_30_10: {
        id: 'w_30_10',
        text: { ko: '현재 직장 만족도는?', en: 'Current job satisfaction?', zh: '目前工作满意度？' },
        type: 'single',
        options: {
            1: { label: { ko: '만족', en: 'Satisfied', zh: '满意' }, score: 5 },
            2: { label: { ko: '보통', en: 'Okay', zh: '一般' }, score: 3 },
            3: { label: { ko: '불만', en: 'Unsatisfied', zh: '不满' }, score: 1 }
        }
    },

    // 40대 - 고위 관리자/임원 (w_40_1~w_40_10)
    w_40_1: {
        id: 'w_40_1',
        text: { ko: '현재 직책은?', en: 'Current title?', zh: '目前职务？' },
        type: 'single',
        options: {
            1: { label: { ko: '임원급', en: 'Executive', zh: '高管' }, score: 5 },
            2: { label: { ko: '부장급', en: 'Director', zh: '部长' }, score: 4 },
            3: { label: { ko: '팀장급', en: 'Manager', zh: '经理' }, score: 3 }
        }
    },
    w_40_2: {
        id: 'w_40_2',
        text: { ko: '관리하는 팀 규모는?', en: 'Size of team you manage?', zh: '管理的团队规模？' },
        type: 'single',
        options: {
            1: { label: { ko: '10명 이상', en: '10+ people', zh: '10人以上' }, score: 5 },
            2: { label: { ko: '5-10명', en: '5-10 people', zh: '5-10人' }, score: 4 },
            3: { label: { ko: '5명 미만', en: 'Less than 5', zh: '5人以下' }, score: 2 }
        }
    },
    w_40_3: {
        id: 'w_40_3',
        text: { ko: '의사결정 권한은?', en: 'Decision-making authority?', zh: '决策权限？' },
        type: 'single',
        options: {
            1: { label: { ko: '높음', en: 'High', zh: '高' }, score: 5 },
            2: { label: { ko: '보통', en: 'Moderate', zh: '一般' }, score: 3 },
            3: { label: { ko: '낮음', en: 'Low', zh: '低' }, score: 1 }
        }
    },
    w_40_4: {
        id: 'w_40_4',
        text: { ko: '퇴직 준비는?', en: 'Retirement preparation?', zh: '退休准备？' },
        type: 'single',
        options: {
            1: { label: { ko: '준비 중', en: 'Preparing', zh: '准备中' }, score: 5 },
            2: { label: { ko: '고민 중', en: 'Considering', zh: '考虑中' }, score: 3 },
            3: { label: { ko: '아직', en: 'Not yet', zh: '还没' }, score: 1 }
        }
    },
    w_40_5: {
        id: 'w_40_5',
        text: { ko: '후배 양성에 관심이 있나요?', en: 'Interested in mentoring juniors?', zh: '对培养后辈感兴趣吗？' },
        type: 'single',
        options: {
            1: { label: { ko: '많음', en: 'Very', zh: '很多' }, score: 5 },
            2: { label: { ko: '보통', en: 'Moderate', zh: '一般' }, score: 3 },
            3: { label: { ko: '없음', en: 'Not really', zh: '不太' }, score: 1 }
        }
    },
    w_40_6: {
        id: 'w_40_6',
        text: { ko: '업무 시간은?', en: 'Working hours?', zh: '工作时间？' },
        type: 'single',
        options: {
            1: { label: { ko: '10시간 이상', en: '10+ hours', zh: '10小时以上' }, score: 5 },
            2: { label: { ko: '8-10시간', en: '8-10 hours', zh: '8-10小时' }, score: 3 },
            3: { label: { ko: '8시간 이하', en: 'Less than 8', zh: '8小时以下' }, score: 2 }
        }
    },
    w_40_7: {
        id: 'w_40_7',
        text: { ko: '회사 경영 참여도는?', en: 'Involvement in company management?', zh: '参与公司管理程度？' },
        type: 'single',
        options: {
            1: { label: { ko: '높음', en: 'High', zh: '高' }, score: 5 },
            2: { label: { ko: '보통', en: 'Moderate', zh: '一般' }, score: 3 },
            3: { label: { ko: '낮음', en: 'Low', zh: '低' }, score: 1 }
        }
    },
    w_40_8: {
        id: 'w_40_8',
        text: { ko: '업무 스트레스 관리는?', en: 'How do you manage work stress?', zh: '如何管理工作压力？' },
        type: 'single',
        options: {
            1: { label: { ko: '잘함', en: 'Well', zh: '很好' }, score: 5 },
            2: { label: { ko: '보통', en: 'Okay', zh: '一般' }, score: 3 },
            3: { label: { ko: '어려움', en: 'Difficult', zh: '困难' }, score: 1 }
        }
    },
    w_40_9: {
        id: 'w_40_9',
        text: { ko: '재취업 계획이 있나요?', en: 'Do you plan to work after retirement?', zh: '有再就业计划吗？' },
        type: 'single',
        options: {
            1: { label: { ko: '있음', en: 'Yes', zh: '有' }, score: 5 },
            2: { label: { ko: '고민 중', en: 'Considering', zh: '考虑中' }, score: 3 },
            3: { label: { ko: '없음', en: 'No', zh: '没有' }, score: 1 }
        }
    },
    w_40_10: {
        id: 'w_40_10',
        text: { ko: '업무 만족도는?', en: 'Job satisfaction?', zh: '工作满意度？' },
        type: 'single',
        options: {
            1: { label: { ko: '높음', en: 'High', zh: '高' }, score: 5 },
            2: { label: { ko: '보통', en: 'Moderate', zh: '一般' }, score: 3 },
            3: { label: { ko: '낮음', en: 'Low', zh: '低' }, score: 1 }
        }
    },

    // 50대 - 은퇴 준비/전문 컨설턴트 (w_50_1~w_50_10)
    w_50_1: {
        id: 'w_50_1',
        text: { ko: '현재 근무 상태는?', en: 'Current work status?', zh: '目前工作状态？' },
        type: 'single',
        options: {
            1: { label: { ko: '재직 중', en: 'Employed', zh: '在职' }, score: 5 },
            2: { label: { ko: '은퇴', en: 'Retired', zh: '退休' }, score: 3 },
            3: { label: { ko: '재취업', en: 'Re-employed', zh: '再就业' }, score: 4 }
        }
    },
    w_50_2: {
        id: 'w_50_2',
        text: { ko: '은퇴 후 계획은?', en: 'Plans after retirement?', zh: '退休后计划？' },
        type: 'single',
        options: {
            1: { label: { ko: '창업', en: 'Start business', zh: '创业' }, score: 5 },
            2: { label: { ko: '여가', en: 'Leisure', zh: '休闲' }, score: 3 },
            3: { label: { ko: '재취업', en: 'Re-employment', zh: '再就业' }, score: 4 }
        }
    },
    w_50_3: {
        id: 'w_50_3',
        text: { ko: '후배 멘토링 활동은?', en: 'Mentoring activities?', zh: '指导后辈活动？' },
        type: 'single',
        options: {
            1: { label: { ko: '적극적', en: 'Active', zh: '积极' }, score: 5 },
            2: { label: { ko: '가끔', en: 'Occasionally', zh: '偶尔' }, score: 3 },
            3: { label: { ko: '없음', en: 'None', zh: '没有' }, score: 1 }
        }
    },
    w_50_4: {
        id: 'w_50_4',
        text: { ko: '전문성 유지를 위한 노력은?', en: 'Efforts to maintain expertise?', zh: '为保持专业性的努力？' },
        type: 'single',
        options: {
            1: { label: { ko: '많음', en: 'A lot', zh: '很多' }, score: 5 },
            2: { label: { ko: '보통', en: 'Some', zh: '一些' }, score: 3 },
            3: { label: { ko: '없음', en: 'None', zh: '没有' }, score: 1 }
        }
    },
    w_50_5: {
        id: 'w_50_5',
        text: { ko: '업계 네트워크 활동은?', en: 'Industry networking activities?', zh: '行业社交活动？' },
        type: 'single',
        options: {
            1: { label: { ko: '적극적', en: 'Active', zh: '积极' }, score: 5 },
            2: { label: { ko: '보통', en: 'Moderate', zh: '一般' }, score: 3 },
            3: { label: { ko: '없음', en: 'None', zh: '没有' }, score: 1 }
        }
    },
    w_50_6: {
        id: 'w_50_6',
        text: { ko: '컨설팅 활동에 관심이 있나요?', en: 'Interested in consulting?', zh: '对咨询工作感兴趣吗？' },
        type: 'single',
        options: {
            1: { label: { ko: '있음', en: 'Yes', zh: '有' }, score: 5 },
            2: { label: { ko: '고민 중', en: 'Considering', zh: '考虑中' }, score: 3 },
            3: { label: { ko: '없음', en: 'No', zh: '没有' }, score: 1 }
        }
    },
    w_50_7: {
        id: 'w_50_7',
        text: { ko: '강의·교육 활동은?', en: 'Teaching/training activities?', zh: '讲课/培训活动？' },
        type: 'single',
        options: {
            1: { label: { ko: '하고 있음', en: 'Currently doing', zh: '正在做' }, score: 5 },
            2: { label: { ko: '계획 중', en: 'Planning', zh: '计划中' }, score: 3 },
            3: { label: { ko: '없음', en: 'None', zh: '没有' }, score: 1 }
        }
    },
    w_50_8: {
        id: 'w_50_8',
        text: { ko: '경력을 활용한 봉사 활동은?', en: 'Volunteer work using your career?', zh: '利用职业经验的志愿活动？' },
        type: 'single',
        options: {
            1: { label: { ko: '하고 있음', en: 'Currently doing', zh: '正在做' }, score: 5 },
            2: { label: { ko: '계획 중', en: 'Planning', zh: '计划中' }, score: 3 },
            3: { label: { ko: '없음', en: 'None', zh: '没有' }, score: 1 }
        }
    },
    w_50_9: {
        id: 'w_50_9',
        text: { ko: '업무 관련 건강 관리는?', en: 'Health management for work?', zh: '为工作的健康管理？' },
        type: 'single',
        options: {
            1: { label: { ko: '철저함', en: 'Thorough', zh: '彻底' }, score: 5 },
            2: { label: { ko: '보통', en: 'Moderate', zh: '一般' }, score: 3 },
            3: { label: { ko: '소홀함', en: 'Neglected', zh: '疏忽' }, score: 1 }
        }
    },
    w_50_10: {
        id: 'w_50_10',
        text: { ko: '일과 여가의 균형은?', en: 'Work-leisure balance?', zh: '工作与休闲的平衡？' },
        type: 'single',
        options: {
            1: { label: { ko: '균형', en: 'Balanced', zh: '平衡' }, score: 5 },
            2: { label: { ko: '일 중심', en: 'Work-focused', zh: '以工作为主' }, score: 3 },
            3: { label: { ko: '여가 중심', en: 'Leisure-focused', zh: '以休闲为主' }, score: 2 }
        }
    }
"""

def fix_file():
    target_file = 'js/scenarioQuestions.js'
    
    with open(target_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # Identify Daily Section End
    daily_end_line_idx = -1
    for i, line in enumerate(lines):
        if 'd_50_10:' in line:
            # Check a few lines after for the closing brace
            for j in range(i, min(i+20, len(lines))):
                if '};' in lines[j] and '//' not in lines[j]:
                    daily_end_line_idx = j
                    break
            break
            
    if daily_end_line_idx == -1:
        # Fallback: look for the "Work" header
        for i, line in enumerate(lines):
            if 'w_t1:' in line:
                daily_end_line_idx = i - 1
                while daily_end_line_idx > 0 and lines[daily_end_line_idx].strip() == '':
                    daily_end_line_idx -= 1
                if '};' in lines[daily_end_line_idx]:
                   pass # This is the target line
                break

    # Identify Entertainment Section Start
    ent_start_line_idx = -1
    for i in range(len(lines)-1, 0, -1):
        if 'e_t1:' in lines[i]:
            ent_start_line_idx = i
            # Move back to header
            # Look for "Entertainment" comment
            for j in range(i, max(0, i-20), -1):
                if 'e_t1 ~ e_50_10' in lines[j]:
                    ent_start_line_idx = j - 1 # Include the separator line before
                    break
            break
            
    if daily_end_line_idx == -1 or ent_start_line_idx == -1:
        print("Could not locate sections properly.")
        print(f"Daily End: {daily_end_line_idx}, Ent Start: {ent_start_line_idx}")
        return

    # Construct New Content
    # Daily Part: Up to daily_end_line_idx. 
    # NOTE: The current file has `};` at daily_end_line_idx. We want to REMOVE that `}` and add `,`.
    
    daily_part = "".join(lines[:daily_end_line_idx]).strip()
    if daily_part.endswith('};'):
        daily_part = daily_part[:-2] # Remove };
    elif daily_part.endswith('}'):
        daily_part = daily_part[:-1] # Remove }
        
    # Ensure d_50_10 block is closed properly, but the OBJECT is not.
    # The last line of daily part should be the closing brace of d_50_10.
    
    # Let's simplify: Take lines up to d_50_10 closing.
    # We know d_50_10 is around line 644. Line 654 is };
    # We want everything up to line 653, then add a comma.
    
    # Re-reading logic:
    # 1. Read up to the line BEFORE `w_t1` (or the Work header).
    # 2. If that chunk ends in `};`, replace with `,`.
    
    # Let's trust the logic:
    # daily_end_line_idx points to the line with `};`.
    # We take lines[:daily_end_line_idx].
    # Then we add `,`.
    
    daily_lines = lines[:daily_end_line_idx]
    
    # Ent Part
    ent_lines = lines[ent_start_line_idx:]
    
    # Combine
    new_content_list = daily_lines + [",\n", WORK_LIFE, ",\n"] + ent_lines
    new_content = "".join(new_content_list)
    
    # Write back
    with open(target_file, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print("File successfully rewritten.")

if __name__ == '__main__':
    fix_file()
