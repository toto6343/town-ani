# 🌆 Have a Good Day - Town Animation

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

하루의 시간 흐름을 따라 변화하는 아름다운 마을 풍경 애니메이션 웹 페이지입니다. 새벽부터 저녁까지의 변화를 부드러운 애니메이션으로 표현합니다.

---

## 📸 Screenshots

### 🌅 Dawn (새벽)

<img width="1207" alt="Dawn - Good Morning" src="https://github.com/user-attachments/assets/87858a33-5b67-4cc3-86a0-338f5ec850db" />

### ☀️ Morning (아침)

<img width="1220" alt="Morning - Have a Great Day" src="https://github.com/user-attachments/assets/e84d1724-326e-46b3-bf7c-d9af3ce20463" />

### 🌤️ Afternoon (오후)

<img width="1206" alt="Afternoon - Enjoy Your Day" src="https://github.com/user-attachments/assets/24bf53ba-3ee0-4197-9fae-52503b342caa" />

### 🌆 Evening (저녁)

<img width="1199" alt="Evening - Good Evening" src="https://github.com/user-attachments/assets/d2ee0cde-d2f9-48aa-915a-74df157429bb" />

---

## 📋 목차

- [프로젝트 소개](#-프로젝트-소개)
- [주요 기능](#-주요-기능)
- [기술 스택](#-기술-스택)
- [폴더 구조](#-폴더-구조)
- [설치 및 실행](#-설치-및-실행)
- [사용 방법](#-사용-방법)
- [커스터마이징](#-커스터마이징)

---

## 🚀 프로젝트 소개

**Have a Good Day**는 순수 HTML, CSS, JavaScript만으로 구현한 인터랙티브 애니메이션 웹 페이지입니다.

하루의 시간 흐름(새벽 → 아침 → 오후 → 저녁)을 자동으로 표현하며, 각 시간대마다:

- 🌈 배경 색상이 변화합니다
- ☀️ 태양의 위치가 이동합니다
- 🏘️ 마을의 밝기가 조절됩니다
- ☁️ 구름과 사람들이 움직입니다
- 💬 시간에 맞는 인사말이 표시됩니다

---

## ✨ 주요 기능

### 🎨 애니메이션 효과

- **하루 주기 애니메이션** - 20초 주기로 새벽 → 아침 → 오후 → 저녁 반복
- **태양 궤적** - 해가 동쪽에서 서쪽으로 이동
- **배경 그라디언트** - 시간대별 하늘 색상 자동 변경
- **구름 이동** - 서로 다른 속도로 움직이는 2개의 구름
- **사람 움직임** - 남자와 가족이 마을을 지나감
- **회전 요소** - 마을 중앙의 원형 오브젝트 회전
- **반짝이는 별** - 100개의 별이 밤하늘에 깜빡임

### 🎮 인터랙티브 컨트롤

- **⏸️ Pause/Play** - 애니메이션 일시정지 및 재생
- **⚡ Speed Control** - 속도 조절 (0.5x / 1x / 2x)
- **🔄 Reset** - 초기 상태로 리셋

### ⌨️ 키보드 단축키

- `Space` - 일시정지/재생 토글
- `S` - 속도 변경
- `R` - 페이지 리셋

### 📱 반응형 디자인

- 데스크톱, 태블릿, 모바일 완벽 대응
- 유동적인 크기 조절 (`clamp` 함수 사용)
- 모바일에서 버튼 세로 배치

### 🌟 시간대별 메시지

| 시간대       | 시간  | 메시지             | 배경색            |
| ------------ | ----- | ------------------ | ----------------- |
| 🌅 Dawn      | 06:00 | Good Morning!!     | 보라색 그라디언트 |
| ☀️ Morning   | 09:00 | Have a Great Day!! | 하늘색 그라디언트 |
| 🌤️ Afternoon | 15:00 | Enjoy Your Day!!   | 핑크색 그라디언트 |
| 🌆 Evening   | 18:00 | Good Evening!!     | 어두운 남색       |

---

## 🛠 기술 스택

### Frontend

- **HTML5** - 시맨틱 마크업, `loading="lazy"` 최적화
- **CSS3** - Keyframe 애니메이션, 그라디언트, 반응형 디자인
- **Vanilla JavaScript** - 인터랙티브 기능 구현

### Design

- **Google Fonts** - Poiret One, Poppins
- **CSS Animations** - `@keyframes`를 활용한 부드러운 애니메이션
- **Glassmorphism** - 반투명 블러 효과 버튼

### Features

- CSS Variables (Custom Properties)
- Flexbox & Grid Layout
- Media Queries (반응형)
- Backdrop Filter (블러 효과)
- CSS Gradients (배경 색상)

---

## 📁 폴더 구조

```
town-ani-main/
│
├── css/
│   └── style.css           # 메인 스타일시트 (애니메이션 포함)
│
├── img/                    # 이미지 에셋
│   ├── circle.png          # 회전하는 원형 오브젝트
│   ├── cloud1.png          # 구름 1
│   ├── cloud2.png          # 구름 2
│   ├── family.png          # 가족 캐릭터
│   ├── man.png             # 남자 캐릭터
│   ├── sun.png             # 태양
│   ├── town_day.png        # 낮 마을 이미지
│   └── town_night.png      # 밤 마을 이미지
│
├── js/
│   └── ie.js               # Internet Explorer 호환성
│
├── favicon.ico             # 파비콘
├── index.html              # 메인 HTML 파일
└── README.md               # 프로젝트 문서
```

---

## 🚀 설치 및 실행

### 1️⃣ 프로젝트 클론

```bash
git clone https://github.com/toto6343/town-ani.git
cd town-ani
```

### 2️⃣ 로컬 서버 실행

#### 방법 A: Live Server (VS Code) ⭐ 추천

1. VS Code에서 프로젝트 폴더 열기
2. Live Server 확장 프로그램 설치
3. `index.html` 파일 우클릭 → **"Open with Live Server"**

#### 방법 B: Python HTTP Server

```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```

브라우저에서 `http://localhost:8000` 접속

#### 방법 C: Node.js HTTP Server

```bash
npx http-server -p 8000
```

#### 방법 D: 직접 파일 열기

`index.html` 파일을 더블클릭하여 브라우저에서 직접 열기
(일부 기능이 제한될 수 있습니다)

---

## 🎯 사용 방법

### 기본 사용

1. 페이지를 열면 자동으로 애니메이션이 시작됩니다
2. 20초 주기로 하루가 반복됩니다
3. 5초마다 시간대 메시지가 자동으로 변경됩니다

### 컨트롤 버튼

- **⏸️ Pause** - 애니메이션 일시정지
  - 클릭하면 **▶️ Play**로 변경
- **⚡ Speed Up** - 속도 조절
  - 1회 클릭: 2배속 (⚡ 2x Speed)
  - 2회 클릭: 0.5배속 (🐌 0.5x Speed)
  - 3회 클릭: 원래 속도
- **🔄 Reset** - 페이지 새로고침

### 키보드 단축키

```
Space   - 일시정지/재생
S       - 속도 변경
R       - 리셋
```

---

## 🎨 커스터마이징

### 배경 색상 변경

`css/style.css` 파일의 `@keyframes sky` 수정:

```css
@keyframes sky {
  0% {
    background: linear-gradient(to bottom, #your-color1 0%, #your-color2 100%);
  }
  25% {
    background: linear-gradient(to bottom, #your-color3 0%, #your-color4 100%);
  }
  /* ... */
}
```

### 애니메이션 속도 조절

```css
/* 전체 주기 변경 (기본: 20초) */
body {
  animation: sky linear 30s infinite; /* 30초로 변경 */
}

h1 {
  animation: day linear 30s infinite;
}

section .sky .sun {
  animation: sun linear 30s infinite;
}
```

### 구름 속도 변경

```css
section .sky .cloud1 {
  animation: flow linear 15s infinite; /* 기본: 10초 */
}

section .sky .cloud2 {
  animation: flow linear 30s infinite; /* 기본: 20초 */
}
```

### 폰트 변경

Google Fonts에서 원하는 폰트 선택 후 HTML `<head>`에 추가:

```html
<link
  href="https://fonts.googleapis.com/css2?family=YourFont&display=swap"
  rel="stylesheet"
/>
```

CSS에서 폰트 적용:

```css
h1 {
  font-family: "YourFont", sans-serif;
}
```

---

## 🌐 브라우저 지원

| Browser | Version | Support                 |
| ------- | ------- | ----------------------- |
| Chrome  | 90+     | ✅ Full Support         |
| Firefox | 88+     | ✅ Full Support         |
| Safari  | 14+     | ✅ Full Support         |
| Edge    | 90+     | ✅ Full Support         |
| Opera   | 76+     | ✅ Full Support         |
| IE 11   | -       | ⚠️ Limited (ie.js 필요) |

---

## 💡 주요 애니메이션 설명

### 1. 태양 궤적 (`@keyframes sun`)

```css
@keyframes sun {
  0% {
    opacity: 0;
    transform: rotate(-90deg);
  } /* 동쪽 아래 (숨김) */
  25% {
    opacity: 1;
    transform: rotate(-30deg);
  } /* 동쪽 위 */
  50% {
    opacity: 1;
    transform: rotate(30deg);
  } /* 서쪽 위 */
  75% {
    opacity: 0;
    transform: rotate(90deg);
  } /* 서쪽 아래 (숨김) */
  100% {
    opacity: 0;
    transform: rotate(-90deg);
  } /* 원위치 */
}
```

### 2. 하늘 배경 변화 (`@keyframes sky`)

- 0%: 보라색 (새벽)
- 25%: 하늘색 (아침)
- 50%: 핑크색 (오후)
- 75%: 남색 (저녁)

### 3. 낮/밤 전환 (`@keyframes day`)

- 낮 이미지의 투명도를 조절하여 밤 이미지 표시

### 4. 이동 애니메이션 (`@keyframes flow`)

- 구름, 사람들이 왼쪽에서 오른쪽으로 이동

---

## 🔧 성능 최적화

### 적용된 최적화 기법

1. **이미지 지연 로딩** - `loading="lazy"` 속성
2. **Font Preconnect** - Google Fonts 빠른 로딩
3. **CSS `will-change`** - 브라우저 렌더링 최적화 (선택적 사용)
4. **Backdrop Filter** - GPU 가속 블러 효과
5. **`clamp()` 함수** - 유동적 크기 조절로 리플로우 최소화

### 접근성

```css
/* 애니메이션 감소 모드 지원 */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

---

## 📝 라이선스

이 프로젝트는 교육 및 포트폴리오 목적으로 제작되었습니다.

---

## 🌟 Features Highlight

- ✅ **순수 Vanilla JS** - 프레임워크 없이 구현
- ✅ **완전 반응형** - 모든 디바이스 지원
- ✅ **부드러운 애니메이션** - CSS Keyframes 활용
- ✅ **인터랙티브 컨트롤** - 사용자 제어 가능
- ✅ **키보드 단축키** - 편리한 조작
- ✅ **성능 최적화** - 지연 로딩 및 GPU 가속
- ✅ **접근성** - 애니메이션 감소 모드 지원
- ✅ **크로스 브라우저** - 주요 브라우저 완벽 지원

---

## 🎓 학습 포인트

이 프로젝트를 통해 배울 수 있는 것:

1. **CSS Keyframe 애니메이션** - 복잡한 타임라인 구성
2. **Transform 속성** - rotate, translate 활용
3. **Opacity 애니메이션** - 페이드 효과
4. **반응형 디자인** - clamp, media queries
5. **JavaScript DOM 조작** - 이벤트 리스너, 스타일 제어
6. **애니메이션 제어** - playState, duration 조절
7. **성능 최적화** - 이미지 로딩, GPU 가속

---

## 📧 Contact

궁금한 점이나 개선 제안이 있으시면 이슈를 등록해주세요!

---

**Made with ❤️ for Learning Web Animation**
