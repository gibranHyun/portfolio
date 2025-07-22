// 프로젝트 데이터
const projectsData = [
    {
        id: "erp-upgrade",
        title: "ERP 시스템 고도화",
        period: "2021.01 ~ 2021.12",
        client: "현대자동차",
        role: "팀장/시스템 설계",
        description: "기존 ERP 시스템의 성능 개선 및 신규 모듈 개발을 통한 업무 효율성 향상 프로젝트",
        technologies: ["Java", "Spring", "Oracle", "MyBatis"],
        category: "ERP",
        image: "static/images/erp-project.svg"
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
        image: "static/images/manufacturing-project.svg"
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
        image: "static/images/management-project.svg"
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
        image: "static/images/product-project.svg"
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
        image: "static/images/logistics-project.svg"
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
        image: "static/images/manufacturing-project.svg"
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
        image: "static/images/finance-project.svg"
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
        image: "static/images/facility-project.svg"
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
        image: "static/images/product-project.svg"
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
        image: "static/images/quality-project.svg"
    }
];

// SVG 프로젝트 이미지 생성
function generateProjectSVG(category, title) {
    const colors = {
        ERP: '#4A90E2',
        Manufacturing: '#F5A623',
        Management: '#7ED321',
        Product: '#9013FE',
        Logistics: '#FF6B35',
        Finance: '#50E3C2',
        Facility: '#BD10E0',
        Quality: '#B8E986'
    };
    
    const color = colors[category] || '#666666';
    const initial = title.charAt(0);
    
    const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
                    <stop offset="100%" style="stop-color:${color}aa;stop-opacity:1" />
                </linearGradient>
            </defs>
            <rect width="300" height="200" fill="url(#grad)" />
            <circle cx="150" cy="100" r="40" fill="rgba(255,255,255,0.3)" />
            <text x="150" y="110" font-family="Arial, sans-serif" font-size="36" font-weight="bold" text-anchor="middle" fill="white">${initial}</text>
            <text x="150" y="170" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white" opacity="0.9">${category}</text>
        </svg>`;
    
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgContent)}`;
}

// 프로젝트 이미지 설정
projectsData.forEach(project => {
    project.image = generateProjectSVG(project.category, project.title);
});