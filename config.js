/* ==========================================================
   축제 부스 설정 파일 — 이 파일만 고치면 됩니다
   ========================================================== */
window.FESTIVAL_CONFIG = {

  SCHOOL_NAME: "부천정보산업고등학교",
  DEPT_NAME: "AI영상콘텐츠과",

  /* ① 구글폼 "미리 채워진 링크"를 그대로 붙여넣기 (README 2단계 참고)
        각 질문에 GRADE / RESULT / CONSULT / SCORES / NAME 을 입력해서 만든 링크 */
  FORM_PREFILL_LINK: "https://docs.google.com/forms/d/e/1FAIpQLSemKp1yutiHGf-alzJu5YxXP3ON6EZiZriIhqSucSwaS2zq5A/viewform?usp=pp_url&entry.585387758=GRADE&entry.755214762=RESULT&entry.24397337=CONSULT&entry.824416755=SCORES",

  /* ② Apps Script 웹 앱 URL (README 3단계). 비워두면 이 기기 기록으로만 통계 표시 */
  STATS_URL: "",

  /* 이름 수집 여부 (미성년자 개인정보이므로 꼭 필요할 때만 true) */
  COLLECT_NAME: false,

  /* 학년 선택지 */
  GRADES: ["중1", "중2", "중3", "학부모·기타"],

  /* 결과 유형 — label 값이 구글폼/통계에 그대로 기록됩니다 */
  TRACKS: {
    video: {
      label: "영상제작",
      emoji: "🎬",
      title: "장면을 만드는 크리에이터",
      desc: "머릿속 이야기를 화면으로 옮길 때 가장 신나는 타입이에요. 찍고, 자르고, 붙여서 사람들의 감정을 움직이는 일이 잘 어울려요.",
      learn: ["촬영과 조명", "영상 편집", "모션그래픽"],
      jobs: ["영상 PD", "유튜브 크리에이터", "모션그래픽 디자이너"]
    },
    ai: {
      label: "AI",
      emoji: "🤖",
      title: "AI를 다루는 탐험가",
      desc: "새로운 기술을 직접 써보고 원리를 궁금해하는 타입이에요. AI에게 일을 시키고, 데이터 속에서 답을 찾는 일이 잘 어울려요.",
      learn: ["파이썬 기초", "생성형 AI 활용", "데이터 다루기"],
      jobs: ["AI 개발자", "데이터 분석가", "AI 콘텐츠 기획자"]
    },
    web: {
      label: "웹 프로그래밍",
      emoji: "💻",
      title: "세상에 띄우는 웹 메이커",
      desc: "불편한 걸 보면 ‘이렇게 만들면 되겠다’ 싶은 타입이에요. 아이디어를 실제로 누구나 쓰는 사이트와 서비스로 만드는 일이 잘 어울려요.",
      learn: ["HTML·CSS", "자바스크립트", "웹 서비스 기획"],
      jobs: ["웹 개발자", "프론트엔드 개발자", "UX 디자이너"]
    }
  },

  /* 적성 테스트 질문 — 각 보기의 t 는 video / ai / web 중 하나 */
  QUESTIONS: [
    { q: "유튜브를 켜면 제일 먼저 누르는 영상은?", a: [
      { t: "video", text: "브이로그나 영화 리뷰" },
      { t: "ai",    text: "‘AI가 이런 것까지?’ 신기한 기술 영상" },
      { t: "web",   text: "게임이나 앱을 직접 만드는 영상" } ] },
    { q: "학교 축제를 준비한다면 내가 맡고 싶은 일은?", a: [
      { t: "video", text: "축제 현장 찍어서 하이라이트 영상 만들기" },
      { t: "ai",    text: "AI로 포스터 그림이랑 홍보 문구 뽑기" },
      { t: "web",   text: "부스 위치 알려주는 안내 사이트 만들기" } ] },
    { q: "친구가 “이거 어떻게 했어?” 하고 물어본다면 어떤 거였으면 좋겠어?", a: [
      { t: "video", text: "내가 편집한 영상의 화면 전환 효과" },
      { t: "ai",    text: "AI한테 시켜서 만든 그림이나 노래" },
      { t: "web",   text: "내가 만든 퀴즈 사이트" } ] },
    { q: "수업 시간에 제일 시간이 빨리 가는 순간은?", a: [
      { t: "video", text: "그리고, 꾸미고, 표현하는 활동" },
      { t: "ai",    text: "실험 결과에서 규칙을 찾아낼 때" },
      { t: "web",   text: "문제를 단계별로 차근차근 풀 때" } ] },
    { q: "뭔가 잘 안 풀릴 때 나는?", a: [
      { t: "video", text: "장면이나 그림으로 떠올려 본다" },
      { t: "ai",    text: "자료를 찾아서 비교해 본다" },
      { t: "web",   text: "하나씩 바꿔보면서 직접 고쳐 본다" } ] },
    { q: "폰에서 가장 손이 많이 가는 앱은?", a: [
      { t: "video", text: "카메라랑 영상 편집 앱" },
      { t: "ai",    text: "AI 챗봇" },
      { t: "web",   text: "이것저것 새로운 앱 깔아보기" } ] },
    { q: "딱 하나만 만들 수 있다면?", a: [
      { t: "video", text: "내가 감독한 단편 영화" },
      { t: "ai",    text: "나랑 대화하는 AI 캐릭터" },
      { t: "web",   text: "친구들이 매일 쓰는 웹 서비스" } ] },
    { q: "10년 뒤 내 명함에 적혀 있으면 좋겠는 직업은?", a: [
      { t: "video", text: "영상 감독 · PD" },
      { t: "ai",    text: "AI 개발자 · 데이터 분석가" },
      { t: "web",   text: "웹 개발자 · UX 디자이너" } ] }
  ],

  /* 선배 작품 — works 폴더에 아래 파일 이름 그대로 사진을 넣으세요 (16:9 비율 권장)
     title(제목), author(만든 사람)만 바꾸면 됩니다.
     link: 누르면 열릴 유튜브나 사이트 주소 (없으면 "") */
  WORKS: [
    { title: "영상 작품 제목 1", track: "video", image: "works/5.jpg", author: "1학년", link: "" },
    { title: "영상 작품 제목 2", track: "video", image: "works/6.jpg", author: "2학년", link: "" },
    { title: "영상 작품 제목 3", track: "video", image: "works/7.jpg", author: "2학년", link: "" },
    { title: "영상 작품 제목 4", track: "video", image: "works/8.jpg", author: "3학년", link: "" },

    { title: "웹 작품 제목 1",   track: "web",   image: "works/1.jpg",   author: "2학년", link: "" },
    { title: "웹 작품 제목 2",   track: "web",   image: "works/2.jpg",   author: "2학년", link: "" },
    { title: "웹 작품 제목 3",   track: "web",   image: "works/3.jpg",   author: "3학년", link: "" },
    { title: "웹 작품 제목 4",   track: "web",   image: "works/4.jpg",   author: "3학년", link: "" }
  ]
};
