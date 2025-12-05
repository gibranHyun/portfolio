// 프로젝트 데이터
const projectsData = [
    {
        id: "system-operation-2024",
        title: "식수관리시스템 운영",
        period: "2024.02 ~ 2025.07 현재",
        client: "현대자동차",
        role: "개발 PM",
        description: "고객사 식수관리시스템 운영, ERP 고도화 및 멀티브라우저 대응",
        technologies: ["Miplatform", "Nexacro", "Oracle", "Tibero", "Android", "iOS", "C#", "Java", "JEUS", "Eclipse"],
        category: "Management",
        image: null
    },
    {
        id: "erp-upgrade-2022",
        title: "통합정보시스템(ERP) 고도화 및 웹표준화",
        period: "2022.01 ~ 2023.12",
        client: "에너지경제연구원",
        role: "개발 PM",
        description: "복무, 연구관리, 급여, 총무 관련 개선 및 ERP 연구관리, 경영지원 웹표준화",
        technologies: ["Miplatform", "JEUS", "Java", "PL/SQL", "Oracle", "Eclipse"],
        category: "ERP",
        image: null
    },
    {
        id: "logistics-pricing-2021",
        title: "물류가격관리시스템 개편",
        period: "2021.02 ~ 2021.08",
        client: "현대자동차",
        role: "개발 PM",
        description: "기존 물류가격관리 시스템의 고도화, 운송비 책정로직 보완, 물류비 정산일괄 I/F 처리 추가",
        technologies: ["Miplatform", "Nexacro", "Oracle", "Tibero", "Android", "iOS", "C#", "Java", "JEUS", "IntelliJ"],
        category: "Logistics",
        image: null
    },
    {
        id: "erp-upgrade",
        title: "ERP 시스템 고도화",
        period: "2021.01 ~ 2021.12",
        client: "현대자동차",
        role: "팀장/시스템 설계",
        description: "기존 ERP 시스템의 성능 개선 및 신규 모듈 개발을 통한 업무 효율성 향상 프로젝트",
        technologies: ["Java", "Spring", "Oracle", "MyBatis"],
        category: "ERP",
        image: "static/images/erp-project.png"
    },
    {
        id: "cost-bom-2020",
        title: "재료비 검증용 원가BOM 구축",
        period: "2020.07 ~ 2021.01",
        client: "현대자동차",
        role: "개발 PM",
        description: "원가 및 옵션재료비 검증용 시스템구축, 구매시스템내 원단위시스템 개편부분 PM",
        technologies: ["Nexacro17", "Miplatform", "JEUS", "Java", "PL/SQL", "Oracle", "Eclipse"],
        category: "Finance",
        image: null
    },
    {
        id: "material-integration",
        title: "소재통합시스템 구축",
        period: "2020.03 ~ 2020.11",
        client: "현대자동차",
        role: "개발팀장",
        description: "자동차 소재 관리를 위한 통합 시스템 구축 및 데이터 표준화",
        technologies: ["Java", "Spring Boot", "PostgreSQL", "React"],
        category: "Manufacturing",
        image: "static/images/manufacturing-project.png"
    },
    {
        id: "vaatz-gpos-2019",
        title: "구매생산자재(Vaatz GPOS) 개편 프로젝트",
        period: "2019.09 ~ 2020.06",
        client: "현대자동차",
        role: "개발 PM",
        description: "UI, DB 변경으로 인한 개편 ( Miplatform-> Nexacro, Oracle-> Tibero )",
        technologies: ["Miplatform", "JEUS", "Java", "PL/SQL", "Oracle", "Eclipse"],
        category: "Manufacturing",
        image: null
    },
    {
        id: "tims-system",
        title: "TIMS (기술정보관리시스템)",
        period: "2019.05 ~ 2020.02",
        client: "현대자동차",
        role: "시니어 개발자",
        description: "기술 정보 및 도면 관리를 위한 통합 관리 시스템 개발",
        technologies: ["Java", "Spring", "Oracle", "JSP"],
        category: "Management",
        image: "static/images/management-project.png"
    },
    {
        id: "approval-system-2019",
        title: "전자결재 & 지식제안 관리시스템 구축",
        period: "2019.01 ~ 2019.04",
        client: "현대자동차",
        role: "개발 PM",
        description: "전자결재 & 지식제안 관리시스템 구축",
        technologies: ["Miplatform", "JEUS", "Java", "PL/SQL", "Oracle", "Eclipse"],
        category: "Management",
        image: null
    },
    {
        id: "v-pim-system",
        title: "V-PIM 시스템 개발",
        period: "2018.08 ~ 2019.04",
        client: "현대자동차",
        role: "개발자",
        description: "제품 정보 관리를 위한 PIM 시스템 구축 및 운영",
        technologies: ["Java", "Spring", "MySQL", "JavaScript"],
        category: "Product",
        image: null // Will use SVG
    },
    {
        id: "logistics-pricing",
        title: "물류가격관리시스템",
        period: "2017.11 ~ 2018.07",
        client: "현대자동차",
        role: "개발자",
        description: "물류 비용 산정 및 관리를 위한 시스템 개발",
        technologies: ["Java", "Spring", "Oracle", "jQuery"],
        category: "Logistics",
        image: null // Will use SVG
    },
    {
        id: "production-material",
        title: "생산자재시스템",
        period: "2017.01 ~ 2017.10",
        client: "현대자동차",
        role: "개발자",
        description: "생산에 필요한 자재 관리 및 재고 관리 시스템",
        technologies: ["Java", "Struts", "Oracle", "JavaScript"],
        category: "Manufacturing",
        image: null // Will use SVG
    },
    {
        id: "unit-cost-system",
        title: "원단위시스템",
        period: "2016.03 ~ 2016.12",
        client: "현대자동차",
        role: "개발자",
        description: "제품 원가 계산 및 단위당 비용 관리 시스템",
        technologies: ["Java", "Spring", "Oracle", "JSP"],
        category: "Finance",
        image: null // Will use SVG
    },
    {
        id: "beijing-facility",
        title: "북경시설관리시스템",
        period: "2015.06 ~ 2016.02",
        client: "현대자동차 북경법인",
        role: "개발자",
        description: "북경 공장의 시설물 관리 및 유지보수 시스템",
        technologies: ["Java", "Spring", "MySQL", "JSP"],
        category: "Facility",
        image: null // Will use SVG
    },
    {
        id: "bom-system",
        title: "BOM 시스템 구축",
        period: "2014.09 ~ 2015.05",
        client: "현대자동차",
        role: "개발자",
        description: "부품 구성 정보 관리를 위한 BOM(Bill of Materials) 시스템",
        technologies: ["Java", "Struts", "Oracle", "JavaScript"],
        category: "Product",
        image: null // Will use SVG
    },
    {
        id: "quality-assurance",
        title: "품질보증시스템",
        period: "2014.01 ~ 2014.08",
        client: "현대자동차",
        role: "주니어 개발자",
        description: "제품 품질 관리 및 검사 결과 관리 시스템",
        technologies: ["Java", "JSP", "Oracle", "JavaScript"],
        category: "Quality",
        image: null // Will use SVG
    }
];

// SVG 프로젝트 이미지 생성 (개선된 버전)
function generateProjectSVG(category, title) {
    const categoryConfig = {
        ERP: {
            color: '#4A90E2',
            icon: '📊',
            gradient: '#4A90E2,#357ABD'
        },
        Manufacturing: {
            color: '#F5A623',
            icon: '🏭',
            gradient: '#F5A623,#E09200'
        },
        Management: {
            color: '#7ED321',
            icon: '📁',
            gradient: '#7ED321,#6AB01A'
        },
        Product: {
            color: '#9013FE',
            icon: '📦',
            gradient: '#9013FE,#7510CC'
        },
        Logistics: {
            color: '#FF6B35',
            icon: '🚚',
            gradient: '#FF6B35,#E65528'
        },
        Finance: {
            color: '#50E3C2',
            icon: '💰',
            gradient: '#50E3C2,#3DCAA8'
        },
        Facility: {
            color: '#BD10E0',
            icon: '🏢',
            gradient: '#BD10E0,#9A0DB8'
        },
        Quality: {
            color: '#B8E986',
            icon: '✓',
            gradient: '#B8E986,#A3D76F'
        }
    };

    const config = categoryConfig[category] || {
        color: '#666666',
        icon: '•',
        gradient: '#666666,#555555'
    };

    const [color1, color2] = config.gradient.split(',');

    const svgContent = `<svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad-${category}" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
                    <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
                </linearGradient>
            </defs>
            <rect width="400" height="250" fill="url(#grad-${category})" />
            <circle cx="200" cy="125" r="50" fill="rgba(255,255,255,0.2)" />
            <text x="200" y="145" font-family="Arial, sans-serif" font-size="48" text-anchor="middle" fill="white">${config.icon}</text>
            <text x="200" y="200" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="white" opacity="0.9">${category}</text>
        </svg>`;

    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgContent)}`;
}

// 프로젝트 이미지 설정 (PNG가 없는 경우만 SVG 생성)
projectsData.forEach(project => {
    if (!project.image) {
        project.image = generateProjectSVG(project.category, project.title);
    }
});