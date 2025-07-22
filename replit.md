# Portfolio Website - Node.js Web Application

## Overview

This is a completely static HTML/CSS/JavaScript portfolio website for 박현정, a 20-year experienced Java web developer specializing in automotive industry projects. The site features Korean language interface, responsive design, and uses static files for all functionality including project data and resume download.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### 2025-07-22
- **완전 정적 HTML 변환**: Node.js 서버와 모든 API 의존성 제거
- **25개 실제 프로젝트 데이터**: CSV 파일 기반 2001~2024년 전체 경력 프로젝트 포함
- **고품질 프로젝트 이미지**: 기존 static/images 파일과 Unsplash 이미지로 전문적인 비주얼 구현
- **정적 이력서 다운로드**: Excel 파일을 static/resume/ 폴더에 저장하여 직접 다운로드
- **프로젝트 통계 대시보드**: 총 25개 프로젝트, 23년 경력, 현대자동차 18건 통계 표시
- **배포 최적화**: 서버 없이 순수 정적 파일로 배포 단순화
- **의존성 완전 제거**: package.json, server.js, API 호출 코드 모두 제거

### 2025-07-20
- **완전히 Notion API 의존성 제거**: API 토큰 오류 문제 해결을 위해 Notion 연동 완전 제거
- **PPT 기반 정적 데이터 전환**: 사용자 제공 PowerPoint 파일에서 추출한 실제 프로젝트 데이터로 변환
- **10개 실제 프로젝트 추가**: ERP 고도화, 소재통합시스템, TIMS, V-PIM, 물류가격관리, 생산자재시스템, 원단위시스템, 북경시설관리시스템, BOM 시스템, 품질보증시스템
- **엑셀 이력서 다운로드 기능 구현**: ExcelJS 라이브러리 사용하여 완전한 이력서 생성 (개인정보, 학력, 자격증, 경력사항, 프로젝트 경험, 기술 스킬 시트 포함)
- **서버 안정성 개선**: API 토큰 오류 제거로 프로젝트 이미지 생성 오류 해결
- **Download Resume 버튼 연동**: 클릭 시 실제 엑셀 파일 다운로드 기능 구현

### 2025-07-19
- Enhanced visual design with bold code patterns and typography overlays for professional developer aesthetic
- Replaced bright orange theme with 4 professional color themes (Deep Blue, Forest Green, Warm Purple, Burgundy Red) 
- Added sophisticated glassmorphism effects, gradients, and multi-layer shadows to cards and UI elements
- Integrated Notion API for real project data display (25 projects from user's actual work history)
- Added developer-themed background patterns with Java/Spring code snippets and technical keywords
- Updated profile image with user-provided photo
- Applied Pretendard Medium font for improved Korean typography across entire site
- Implemented intelligent project image system with category-based matching (ERP, logistics, manufacturing, web, HR, etc.)
- Changed active navigation tab colors to warm orange/gold as contrast to profile's deep blue theme
- Added project image hover effects with technology tag overlays
- Fixed project sorting by start date in descending order for chronological display
- Slowed down animation speeds from 0.3s to 0.6s for better user experience
- Updated project categorization with accurate automotive industry classification (소재통합, TIMS, V-PIM, 원단위, 북경시설관리)
- Added project role highlighting with orange gradient badges for better visibility
- Updated personal information in Resume section with authentic user data (name, DOB, certifications, education)

## System Architecture

### Frontend Architecture
- **Framework**: Pure HTML/CSS/JavaScript with responsive design
- **Architecture Pattern**: Single Page Application (SPA) with client-side navigation
- **Rendering**: Client-side rendering with vanilla JavaScript
- **Styling**: Modern CSS with glassmorphism effects and multiple color themes

### Backend Architecture
- **Framework**: None - Complete static HTML/CSS/JavaScript
- **Data Source**: Static JavaScript file with 10 automotive projects
- **File Management**: Direct static file serving
- **Resume Download**: Direct link to Excel file in static/resume/ folder

## Key Components

### Core Files
- **index.html**: Main portfolio website with all sections (완전 정적)
- **static/projects-data.js**: 10개 자동차 프로젝트 데이터
- **static/resume/**: 이력서 Excel 파일 저장소
- **attached_assets/**: 프로필 이미지 및 원본 PPT 데이터

### Styling and UX
- Custom CSS loading screen with gradient background
- Roboto font family for typography
- Orange gradient color scheme (#ff9a56 to #ff6b35)
- Mobile-first responsive design approach

### Loading Strategy
- Progressive loading with custom loading screen
- Script injection pattern to load main Flutter application
- Service worker registration after first frame render

## Data Flow

1. **Initial Load**: Browser loads index.html with loading screen
2. **Script Loading**: `loadMainDartJs()` function injects the compiled Flutter application
3. **Flutter Initialization**: Flutter engine starts and renders the application
4. **Service Worker**: Registers after Flutter's first frame for offline capabilities
5. **Progressive Enhancement**: Application becomes fully interactive

## External Dependencies

### Backend Dependencies
- **Express.js**: Web server framework
- **ExcelJS**: Excel file generation for resume downloads  
- **OpenAI API**: Optional project image generation
- **@notionhq/client**: Legacy dependency (not in use)

### Frontend Dependencies
- **Pretendard Font**: Korean typography optimization
- **Font Awesome**: Icons for UI elements
- **Vanilla JavaScript**: DOM manipulation and interactions

## Deployment Strategy

### Build Process
- Flutter web build compilation (dart to JavaScript)
- Static file generation for web hosting
- Asset optimization and bundling

### Hosting Requirements
- Static web hosting capability
- HTTPS support (required for service workers)
- Support for SPA routing (likely needed for Flutter web navigation)

### Performance Considerations
- Service worker caching for offline access
- Progressive loading to minimize initial load time
- Optimized for mobile and desktop browsers

### SEO and Accessibility
- Meta descriptions in Korean for target audience
- Mobile-optimized viewport settings
- Progressive Web App features for better user experience

## Technical Decisions

### Why Pure Static HTML?
- **Ultimate Simplicity**: No server dependencies or compilation required
- **Maximum Performance**: Instant loading with no API calls
- **Deployment Ease**: Works on any static hosting (GitHub Pages, Netlify, etc.)
- **Zero Maintenance**: No server crashes, API failures, or dependency updates

### Data Management
- **Static PPT data**: Extracted real project information for authenticity
- **No external APIs**: Eliminates authentication and connectivity issues
- **Excel generation**: Professional resume download with comprehensive data
- **Image optimization**: Intelligent project categorization and visual matching

### Design Philosophy
- **Korean-first**: Optimized typography and content for Korean users
- **Professional aesthetic**: Clean, corporate-friendly design with automotive industry focus
- **Theme flexibility**: 4 professional color schemes for personalization
- **Mobile responsive**: Seamless experience across all device sizes