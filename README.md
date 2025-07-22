# 박현정 - 포트폴리오 웹사이트

20년차 Java 웹 개발자의 전문적인 포트폴리오 웹사이트입니다. Notion API를 통해 실제 프로젝트 경험을 동적으로 표시하는 인터랙티브 플랫폼입니다.

## 🚀 주요 기능

- **실시간 프로젝트 데이터**: Notion API 연동으로 실제 프로젝트 이력 표시
- **AI 기반 시각화**: OpenAI API를 활용한 프로젝트 이미지 자동 생성
- **전문 테마**: 4가지 전문적인 색상 테마 (Deep Blue, Forest Green, Warm Purple, Burgundy Red)
- **반응형 디자인**: 모바일과 데스크톱 환경 모두 지원
- **자동차 업계 특화**: 제조업/ERP 프로젝트 경험에 최적화된 분류 시스템

## 🛠️ 기술 스택

### Frontend
- HTML5/CSS3
- JavaScript (ES6+)
- Flutter Web 기반 SPA
- 반응형 웹 디자인
- Pretendard 폰트

### Backend
- Node.js
- Express.js
- Notion API
- OpenAI API

### 데이터베이스
- Notion (CMS)

## 📁 프로젝트 구조

```
├── index.html              # 메인 포트폴리오 페이지
├── server.js               # Node.js 백엔드 서버
├── color-themes.html       # 색상 테마 선택 페이지
├── package.json           # 프로젝트 의존성
├── attached_assets/       # 이미지 리소스
├── web/                   # Flutter 웹 빌드 파일
├── lib/                   # Dart 소스 코드
└── README.md             # 프로젝트 문서
```

## 🎨 특징

### 시각적 디자인
- 글래스모피즘 효과
- 다층 그림자와 그라데이션
- 개발자 테마 배경 패턴 (Java/Spring 코드 스니펫)
- 호버 효과와 부드러운 애니메이션

### 프로젝트 관리
- 카테고리별 프로젝트 분류 (ERP, 제조, 물류, HR 등)
- 시작일자 기준 내림차순 정렬
- 역할 정보 강조 표시
- 기술 스택 태그 시스템

## 🚀 실행 방법

1. **의존성 설치**
```bash
npm install
```

2. **환경 변수 설정**
```bash
# .env 파일 생성
NOTION_INTEGRATION_SECRET=your_notion_secret
NOTION_PAGE_URL=your_notion_page_url
OPENAI_API_KEY=your_openai_api_key
```

3. **서버 실행**
```bash
node server.js
```

4. **브라우저에서 확인**
```
http://localhost:5000
```

## 📊 프로젝트 데이터

- **총 프로젝트**: 25개
- **주요 업무 분야**: 자동차 제조업 ERP/시스템 개발
- **기술 스택**: Java, Spring Framework, Oracle, MySQL 등
- **경력**: 20년 (1977년생, 정보처리기사, SCJP 자격증 보유)

## 🎯 주요 프로젝트 유형

- **ERP 시스템**: 통합정보시스템 고도화 및 웹표준화
- **제조업 시스템**: 생산/자재 관리, BOM 시스템, 원가 관리
- **물류 시스템**: 항공물류, 스마트 물류관리
- **부품 관리**: TIMS, V-PIM, 소재통합시스템
- **기타**: 인사관리, 전자결재, 시설관리 시스템

## 👤 개발자 정보

- **이름**: 박현정
- **생년월일**: 1977.04.11
- **연락처**: 010-2934-0302
- **이메일**: gibran.hyun@gmail.com
- **학력**: 울산대학교 컴퓨터공학과
- **자격증**: 정보처리기사(2002.10.07), SCJP(2003.01)
- **전문분야**: Java 웹 개발, 시스템 분석/설계

## 📝 라이선스

이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.

## 🔄 업데이트 히스토리

- **2025.07.19**: 초기 포트폴리오 완성
- Notion API 통합 및 실제 프로젝트 데이터 연동
- 4가지 전문 색상 테마 구현
- 자동차 업계 특화 프로젝트 분류 시스템
- AI 기반 프로젝트 이미지 생성 시스템