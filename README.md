public/ # 정적 파일
src/
├── test/ # 테스트 코드
├── app/ # Next.js 애플리케이션 관련 파일
│ ├── styles/ # 스타일 정의
│ │ ├── globals.css # 전역 스타일
│ │ └── themes.css # 테마 스타일
│ ├── ui/ # UI 구성 요소
│ │ ├── components/ # UI 컴포넌트
│ │ │ ├── common/ # 공통 컴포넌트
│ │ │ │ ├── Header.tsx # 헤더 컴포넌트
│ │ │ │ └── Footer.tsx # 푸터 컴포넌트
│ │ ├── pages/ # 페이지 컴포넌트 및 Next.js의 라우팅 엔드포인트
│ │ │ ├── _app.tsx # 전역 애플리케이션 설정과 레이아웃
│ │ │ ├── index.tsx # 홈페이지
│ │ │ └── Work.tsx # 작업 페이지
│ ├── utils/ # 유틸리티 함수 모음
│ │ ├── helpers/ # 헬퍼 함수
│ │ ├── constants/ # 상수 정의
│ │ └── lib/ # 라이브러리 코드
│ ├── stores/ # 전역 상태 관리
│ │ └── globalStore.ts # 글로벌 스토어
│ ├── domain/ # 도메인 관련 코드
│ │ ├── work/ # 작업 도메인
│ │ │ ├── stores/ # 작업 도메인 상태 관리
│ │ │ │ ├── workStore.ts # 작업 스토어
│ │ │ │ └── localStores/ # 로컬 상태 관리
│ │ │ │ └── workLocalStore.ts # 작업 로컬 스토어
│ │ │ ├── components/ # 작업 도메인 컴포넌트
│ │ │ │ └── WorkLocal.tsx # 작업 로컬 컴포넌트
│ │ │ ├── models/ # 작업 도메인 모델
│ │ │ │ └── Work.ts # 작업 모델
│ │ │ ├── services/ # 작업 서비스
│ │ │ │ └── WorkService.ts # 작업 서비스 구현
│ │ │ ├── repositories/ # 작업 저장소 인터페이스
│ │ │ │ └── WorkRepository.ts # 작업 저장소 구현
│ │ │ ├── events/ # 작업 이벤트
│ │ │ │ └── WorkCreatedEvent.ts # 작업 생성 이벤트
│ │ │ ├── factories/ # 작업 팩토리
│ │ │ │ └── WorkFactory.ts # 작업 팩토리 구현
│ │ │ ├── hooks/ # 작업 커스텀 React 훅
│ │ │ └── useWorkState.ts # 작업 상태 훅
│ ├── application/ # 애플리케이션 계층
│ │ ├── work/ # 작업 애플리케이션 로직
│ │ │ ├── useCases/ # 작업 유즈 케이스
│ │ │ │ └── CreateWork.ts # 작업 생성 유즈 케이스
│ │ │ ├── services/ # 애플리케이션 서비스
│ │ │ │ └── WorkAppService.ts # 작업 애플리케이션 서비스
│ │ │ ├── mappers/ # 매퍼
│ │ │ └── WorkMapper.ts # 작업 매퍼
│ ├── infrastructure/ # 인프라스트럭처 계층
│ │ ├── repositories/ # 저장소 구현체
│ │ │ └── WorkRepositoryImpl.ts # 작업 저장소 구현체
│ │ ├── api/ # API 호출 구현
│ │ └── WorkAPI.ts # 작업 API
├── types/ # 타입 정의
│ ├── dto/ # 데이터 전송 객체
│ │ └── work/ # 작업 DTO
│ │ └── WorkDTO.ts # 작업 DTO
│ ├── models/ # 데이터 모델 타입 정의
│ │ └── work/ # 작업 모델 타입
│ │ └── WorkType.ts # 작업 타입 정의
│ ├── interfaces/ # 인터페이스 정의
│ │ └── work/ # 작업 인터페이스
│ │ ├── IWorkRepository.ts # 작업 저장소 인터페이스
│ │ └── IWorkService.ts # 작업 서비스 인터페이스
├── middleware/ # 미들웨어
│ └── authMiddleware.ts # 인증 미들웨어
├── config/ # 설정 파일
│ └── appConfig.ts # 애플리케이션 설정
├── styles/ # 전역 스타일 정의
│ ├── globals.css # 전역 CSS 스타일
│ └── themes.css # 테마 CSS 스타일