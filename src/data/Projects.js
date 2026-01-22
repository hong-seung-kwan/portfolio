export const Projects = [
    {
        id: 1,
        category: "Project Diary - 개인 프로젝트",
        title: "개인 프로젝트 기록 및 회고 웹",
        descList: [
            "React + Firebase 기반으로 개인 프로젝트와 개발 일지 기록 및 관리하는 웹 서비스",
            "Firebase Authentication을 활용한 이메일 로그인/회원가입 및 테스트 계정 체험 기능 제공",
            "Firestore 데이터 모델링을 통해 프로젝트 / 일지 / 회고/ 트러블슈팅 구조화",
            "FullCalendar + Lazy Loading을 적용해 일정 기반 프로젝트 기록을 시각적으로 관리",
            "Firebase Hosting을 이용한 SPA 배포 및 운영 환경 구성"
        ],
        period: "2025.11 ~ 2025.12",
        tech: ["React", "TypeScript", "Firebase Authentication", "Firestore", "Firebase Hosting", "Vite"],
        deployUrl: "https://projectdiary-1ef71.web.app/",

        readme: `
### 😺 Github  
https://github.com/hong-seung-kwan/ProjectDiary



### 🧠 소개  
- 개인 프로젝트를 기록 및 관리하기 위한 프로젝트 일지 웹 서비스
- Firebase Authentication으로 사용자 인증 및 개인 데이터 분리
- React 기반 SPA 구조로 일지 작성, 수정, 삭제 및 조회 기능
- Firestore를 이용한 프로젝트 일지 데이터 실시간 저장 및 동기화



### 🧩 개인 기여  
- 프로젝트 & 일지 관리: 프로젝트 단위로 일지를 관리할 수 있도록 설계
- 캘린더 기반 UI: 일지를 캘린더 이벤트로 변환하여 날짜별 시각화 및 프로젝트 선택 시 캘린더 이벤트 필터링
- 통계: 전체 일지 수, 트러블 슈팅 횟수, 진행 중 프로젝트 수 집계
- 인증: Firebase Authentication 기반 이메일 로그인 / 회원가입 구현
- 배포: Firebase Hosting을 이용한 배포  



### 🚀 성과  
- React + Firebase 기반 웹 설계 및 구현 경험
- Firestore 실시간 데이터 구조와 비동기 처리 흐름 이해
- Fullcalendar와 같은 라이브리러 성능에 미치는 영향 분석 경험
- Lighthouse를 활용한 웹 성능 측정 및 개선 시도 경험


### 🧰 트러블 슈팅  

**1. FullCalendar 도입 후 성능 점수 저하 문제**  
- 문제: FullCalendar를 메인 페이지에 바로 렌더링하면서 Lighthouse 측정 결과 LCP가 4초 이상으로 측정됨
- 원인: FullCalendar는 내부적으로 많은 DOM과 스타일을 렌더링하는 무거운 라이브러리이자 가장 큰 요소가 캘린더로 잡히며 초기 JS 파싱 + 렌더링 비용 한 번에 발생
- 해결: React.lazy + Suspense를 사용해 초기 화면에는 통계 카드 및 요약 UI 먼저 렌더링 후 캘린더는 지연 로딩
- 배운 점:
  - 성능 최적화는 점수 자체보더 LCP를 구성하는 가장 큰 콘텐츠가 무엇인지 파악하고 어떻게 렌더링 하느냐가 핵심이라는 점을 이해함
  - 대형 UI컴포넌트의 경우 코드 스플리팅, 지연 렌더링, 스켈레톤 UI를 함께 적용하는 방식이 초기 렌더링 부담을 효과적으로 줄일 수 있음을 학습함
  - 단순한 점수 개선에 그치지 않고, LCP의 원인과 구조적 한계를 분석하는 경험을 통해 성능 최적화에 대한 이해도를 높임

**2. 다중 프로젝트 일지 조회 시 느린 로딩**  
- 문제: 사용자 프로젝트 수가 늘어날수록 각 프로젝트 일지를 순차적으로 조회하면서 로딩이 길어짐
- 원인: for 루프 내부에서 awiat getDocs()를 사용해 순차 요청이 발생함
- 해결: Promise.all을 활용해 모든 프로젝트의 일지 컬렉션을 병렬 요청  
- 배운 점:
  - firestore처럼 컬렉션이 분산된 구조에서는 데이터 조회 방식에 따라 성능 차이가 크게 발생할 수 있음을 이해함
  - 데이터 구조 설계와 조회 전략은 분리된 문제가 아니라, 성능을 고려해 함께 설계해야 하는 중요한 요소임을 인지함 

**3. 페이지 이동 후 통계 데이터가 0으로 초기화되는 문제**
- 문제: 첫 로드시에는 홈페이지에 통계가 정상 표시되지만 다른 페이지를 갔다가 돌아오면 0으로 초기화 되는 문제 발생
- 원인: useEffect 내부에서 calendarReady 같은 UI 준비 상태 조건에 영향을 받는데 의존성 배열에 해당 상태가 빠져 재마운트 타이밍에 fetch가 실행 되지 않음
- 해결: calendarReady를 useEffect 의존성에 포함해 준비 완료 시점에 데이터 fetch가 확실히 재실행되도록 수정
- 배운 점: useEffect의 의존성 배열/조건문 조합이 재마운트 시 실행 타이밍에 영향을 준다는 점을 체감하고 상태 초기값이 UI에 노출되지 않도록 흐름을 설계해야 하는 점을 학습함

### ⚙️ 기술 스택  
React, TypeScript, Vite, Firebase, Firestore, Firebase Authentication, Firebase Hosting
`
    },

    {
        id: 2,
        category: "Scheduly - 팀 프로젝트",
        title: "개인 학습 플래너 웹 사이트",
        descList: [
            "Spring Boot + React + MariaDB 기반의 풀스택 프로젝트로 학습 및 개발",
            "GPT API를 사용한 효율적인 개인 학습 플래너 웹 사이트 개발",
            "FullCalendar와 Drag & Drop 기능을 이용해 일정/할일을 직관적으로 관리",
            "Redux 상태 관리를 통해 일정·플랜 데이터의 실시간 동기화 구현",
            "KakaoPay 결제 API를 연동하여 사용자 등급(무료/유료) 기능 추가",
        ],
        period: "2025.07.01 ~ 2025.07.29",
        tech: ["React", "JavaScript", "Java", "HTML", "CSS", "MariaDB", "SpringBoot"],
        img: "/images/Scheduly.png",
        images: [
            "/images/Scheduly/로그인.png",
            "/images/Scheduly/회원가입.png",
            "/images/Scheduly/메인화면.png",
            "/images/Scheduly/수동일정추가.png",
            "/images/Scheduly/gpt api.png",
            "/images/Scheduly/일정조회.png",
            "/images/Scheduly/게시판.png",
            "/images/Scheduly/게시판 등록.png",
            "/images/Scheduly/게시물 상세.png"
        ],

        readme: `
### 😺 Github  
https://github.com/hong-seung-kwan/Scheduly_react  



### 🧠 소개  
- GPT API를 활용하여 개인 맞춤 플랜을 자동 생성하는 웹사이트  
- Spring Boot + React + MariaDB 기반의 풀스택 프로젝트로 학습 및 개발  
- GPT API를 사용한 효율적인 개인 학습 플래너 웹 사이트 개발  
- FullCalendar와 Drag & Drop 기능을 이용해 일정/할일을 직관적으로 관리  
- Redux 상태 관리를 통해 일정·플랜 데이터의 실시간 동기화 구현  
- KakaoPay 결제 API를 연동하여 사용자 등급(무료/유료) 기능 추가  



### 🧩 개인 기여  
- ERD 설계  
- FullCalendar, Drag&Drop 기능을 이용한 일정 관리 화면 구현  
- Redux 상태관리로 일정/플랜 데이터 동기화  
- Axios를 활용한 API 연동 및 데이터 CRUD 기능 구현  
- 사용자별 권한에 따른 UI 노출 및 Spring Security 403 에러 처리  
- 결제 연동(Kakaopay) 및 결제 후 상태 반영  
- GPT API를 활용해 대화형 UI로 일정 생성 기능 구현  



### 🚀 성과  
- 컴포넌트 구조화와 상태 관리를 통해 유지보수성과 확장성 높은 UI 구현 능력 강화  
- 권한 기반 화면 제어 및 예외 처리 경험으로 보안 관점의 클라이언트 설계 능력 향상  
- 외부 결제 API 연동 및 결제 상태 관리 경험  
- 일정/할일 실시간 동기화 기능 구현 경험으로 사용자 경험 개선  
- 협업 과정에서 백엔드와 API 조율 및 오류 대응 능력 향상  



### 🧰 트러블 슈팅  

**1. React와 FullCalendar 이벤트 동기화 문제**  
- 문제: FullCalendar에서 일정 수정 시 사이드 리스트와 Redux 상태 불일치  
- 원인: 캘린더와 리스트가 각각 상태를 관리  
- 해결: Redux를 단일 상태 관리로 설정 → 이벤트 CRUD 시 Redux 먼저 갱신  
- 배운 점: UI 동기화를 위해선 상태 관리의 단일화가 중요함을 이해함 

**2. Spring Security 403 에러**  
- 원인: Security 설정에서 인증/인가 차단됨, Axios 요청 시 Authorization 헤더 누락  
- 해결: Spring Security 설정에서 login, signup을 permitAll() 처리, Axios 호출 시 요청 헤더에 인증 토큰 포함  
- 배운 점:
  - 프론트엔드와 백엔드 간 인증 흐름이 헤더 설정과 Security 정책에 의해 결정됨을 이해함
  - 권한 기반 접근 제어를 고려한 API 설계와 호출 방식의 중요성을 인지함  

**3. 배포 시 Nginx 404 에러**  
- 문제: 배포 후 React 라우팅 접속 시 404 발생  
- 원인: Nginx가 SPA 라우팅을 처리하지 못함  
- 해결: 모든 요청을 index.html로 리다이렉트하도록 구성  
- 배운 점: SPA 구조에서는 서버가 라우팅을 처리하지 않고, 모든 요청을 index.html로 전달한 뒤 클라이언트에서 라우팅을 처리해야 함을 이해함



### ⚙️ 기술 스택  
React, JavaScript, Java, HTML, CSS, MariaDB, SpringBoot
`
    },



    {
        id: 3,
        category: "Wardrobe - 개인 프로젝트",
        title: "쇼핑몰 웹 사이트",
        descList: [
            "Spring MVC, JPA 학습을 위한 쇼핑몰 웹사이트 제작",
            "Spring Boot & JPA를 활용해 상품 CRUD 구현",
            "Thymeleaf 템플릿으로 실시간 데이터 바인딩 처리",
            "카카오 우편번호 API를 연동하여 배송지 입력 기능 구현"
        ],
        period: "2025.05.02 ~ 2025.05.29",
        tech: ["HTML", "CSS", "JavaScript", "Java", "MariaDB", "Spring Tools Suite 4"],
        img: "/images/shoppingmall.png",
        images: [
            "/images/Wardrobe/메인화면.png",
            "/images/Wardrobe/상품 등록.png",
            "/images/Wardrobe/상품 수정.png",
            "/images/Wardrobe/상품검색.png",
            "/images/Wardrobe/상품상세.png",
            "/images/Wardrobe/장바구니.png",
            "/images/Wardrobe/주문창.png",
            "/images/Wardrobe/주문내역.png",
        ],

        readme: `
### 😺 Github  
https://github.com/hong-seung-kwan/springProject



### 🧠 소개  
- Spring MVC와 JPA 학습을 위한 쇼핑몰 웹사이트 제작
- Spring Boot & JPA를 활용해 상품 CRUD 구현  
- Thymeleaf 템플릿을 이용한 실시간 데이터 반영
- Kakao 우편번호 API를 연동하여 배송지 입력 기능 구현



### 🧩 개인 기여  
- MariaDB 기반으로 ERD를 설계하고 데이터 중복 최소화  
- Spring Boot & JPA를 활용해 상품 CRUD 기능 구현 및 Thymeleaf 템플릿으로 실시간 데이터 반영  
- Spring Data JPA를 활용해 주문 상태별·기간별 조회 필터링 기능 개발
- Kakao 우편번호 API를 연동하여 사용자가 빠르고 정확하게 주소를 입력할 수 있는 UI 제공
- Thymeleaf와 Bootstrap을 활용해 UI 설계 및 구현  



### 🚀 성과  
- MVC 패턴 기반 설계를 통해 유지보수성과 확장성 확보  
- JPA를 활용한 효율적인 데이터 처리 및 도메인 설계 경험
- 외부 API 연동 경험  
- 백엔드- 프론트엔드 통합 개발 역량 강화 



### 🧰 트러블 슈팅  

**1. 주문과 주문상품 저장 시 연관관계 문제**  
- 문제: 주문 저장 시 주문은 저장되지만 연관된 주문상품은 저장되지 않는 문제 발생
- 해결: 서비스 계층에서 주문 저장 후 주문상품을 매핑해 함께 저장하도록 로직 수정 후 DTO 변환 시 주문상품 리스트까지 포함
- 배운 점: JPA 연관관계만 믿는게 아니라 서비스 계층에서 저장 순서와 로직을 명확히 관리해야 데이터 일관성을 보장할 수 있음을 이해함

**2. 파일 업로드 시 MultipartFile 처리 문제**  
- 문제: 상품 등록 시 업로드한 이미지가 DB에 저장되지 않음 
- 해결: ProductDTO에 MultipartFile 추가하고, 업로드된 파일을 서버에 저장한 뒤 파일 경로만  매핑하도록 수정함  
- 배운 점: 파일 자체를 DB에 저장하는 방식이 아닌 파일 저장 위치와 메타 정보만 관리하는 설계가 효율적인 파일 관리와 확장성에 유리함을 이해함



### ⚙️ 기술 스택  
JavaScript, Java, HTML, CSS, MariaDB, Spring Data JPA, Spring tools Suite 4
`

    },

    {
        id: 4,
        category: "Flirt - 팀 프로젝트",
        title: "대학생 익명 투표 SNS 플랫폼",
        descList: [
            "대학생들의 긍정적인 커뮤니티 활성화를 위한 익명투표기반 SNS",
            "Firebase Authentication으로 재학생 인증 및 로그인 기능",
            "Firestore를 이용한 실시간 투표 데이터 저장 및 순위 반영",
            "익명 투표 참여 후 상대방과의 익명 채팅 기능"
        ],
        period: "2024.03.26 ~ 2024.06.05",
        tech: ["Dart", "Firebase", "Firebase Authentication", "Flutter", "Android Studio"],
        img: "/images/Flirt.png",
        images: [
            "/images/Flirt/회원가입.png",
            "/images/Flirt/익명투표.png",
            "/images/Flirt/투표끝.png",
            "/images/Flirt/내가 받은 카드.png",
            "/images/Flirt/내가 받은 투표.png",
            "/images/Flirt/내가 받은 투표 누가 했는지.png",
            "/images/Flirt/초성힌트.png",
            "/images/Flirt/채팅하기 누를 때.png",
            "/images/Flirt/랭킹.png",
            "/images/Flirt/익명채팅.png",
            "/images/Flirt/게시물투표.png",
            "/images/Flirt/게시물 투표 생성.png",
            "/images/Flirt/인기 폴스.png",
        ],

        readme: `
### 😺 Github  
https://github.com/hong-seung-kwan/Flirt



### 🧠 소개  
- 대학생들의 긍정적인 커뮤니티 활성화를 위한 익명투표기반 SNS
- Firebase Authentication으로 재학생 인증 및 로그인 기능
- Firestore를 이용한 실시간 투표 데이터 저장 및 순위 반영
- 익명 투표 참여 후 상대방과의 익명 채팅 기능



### 🧩 개인 기여  
- 프로필: 사용자 정보 및 힌트 표시, 친구 추가/목록 기능을 Firestore 실시간 데이터 연동으로 구현
- 랭킹: 투표 결과를 집계하여 상위 3명을 실시간 순위로 표시
- 설정: 알림 설정, 로그아웃, 계정 삭제 등 사용자 편의 중심의 계정 관리 기능
- UI/UX 설계: 사용자 중심의 UI/UX 설계를 통해 직관적인 앱 구조
- 안드로이드 빌드: Android Studio를 활용해 실제 단말기에 테스트 환경 구축  



### 🚀 성과  
- Firestore 기반 실시간 동기화 구현 경험
- Android Studio 빌드 및 단말기 테스트 환경 구축
- 비동기 통신과 UI/UX 설계 경험을 통한 사용자 중심 앱 구현 경험

### ⚙️ 기술 스택  
Android Studio, Flutter, Dart, Firebase, FFirebase Authentication
`
    },



]