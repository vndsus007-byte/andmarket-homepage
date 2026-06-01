## 배포 가드레일 (최우선)
- main 브랜치에 직접 git push 금지
- git commit / push 는 반드시 사람의 명시적 승인 후에만 실행
- 이 사이트는 push 시 GitHub Pages로 즉시 라이브 배포됨 — 신중히

# CLAUDE.md

# AND MARKET 프로젝트 운영 및 개선 가이드

## 프로젝트 개요

AND MARKET은 카페 기반 공동구매 픽업 플랫폼 및 상생형 프랜차이즈 브랜드 랜딩 프로젝트이다.

현재 기술 스택:

- GitHub Pages
- Static HTML
- TailwindCSS CDN
- Vanilla JavaScript
- Gabia Domain
- Cloudflare 예정

현재 도메인:

- https://andmarket09.com
- https://앤드마켓공구.com

메인 canonical 도메인은 반드시:

https://andmarket09.com

으로 유지한다.

---

# 핵심 운영 방향

현재 프로젝트는 단순 카페 홈페이지가 아니라 아래 성격을 가진다.

- 지역 기반 공동구매 플랫폼
- 카페 수익 회생 모델
- 픽업 허브
- 커뮤니티 기반 유통 구조
- 프랜차이즈 모집 랜딩

따라서 디자인보다 중요한 것은:

- 신뢰 확보
- 실운영 증거
- 실제 후기
- 실제 운영 데이터
- 지역 커뮤니티 느낌

이다.

---

# 프로젝트 구조 규칙

## 절대 금지

index.html 하나에:

- CSS
- JS
- Animation
- SEO
- 모든 섹션

전부 몰아넣지 않는다.

---

# 권장 구조

```plaintext
/
├── index.html
│
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── animation.css
│   │   └── responsive.css
│   │
│   ├── js/
│   │   ├── app.js
│   │   ├── navigation.js
│   │   ├── animation.js
│   │   └── toast.js
│   │
│   ├── images/
│   │   ├── logo/
│   │   ├── hero/
│   │   ├── stores/
│   │   ├── gallery/
│   │   └── icons/
│   │
│   └── fonts/
│
├── blog/
│
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── README.md
└── CLAUDE.md
```

---

# HTML 규칙

## 유지 원칙

index.html은 최대한 단순 유지.

구성:

```html
<head>
SEO
CSS Link
</head>

<body>

Navigation

Main Sections

Footer

JS Script

</body>
```

---

# CSS 규칙

## style.css

공통 스타일만 작성:

- typography
- layout
- buttons
- cards
- spacing
- color system

---

## animation.css

애니메이션만 작성:

- shimmer
- fade
- float
- drift
- transition

---

## responsive.css

반응형만 작성:

```css
@media (max-width:768px)
```

---

# JS 규칙

## inline onclick 금지

금지 예시:

```html
<button onclick="openMenu()">
```

권장 방식:

```javascript
document
  .getElementById('menu-btn')
  .addEventListener('click', openMenu)
```

---

# app.js 규칙

app.js는 초기화만 담당.

예시:

```javascript
initNavigation()
initAnimation()
initToast()
```

---

# 이미지 규칙

## 원본 이미지 직접 사용 금지

Unsplash 원본 링크 직접 사용 금지.

반드시:

- webp 변환
- 압축
- assets/images 저장

후 사용.

---

# 이미지 폴더 규칙

```plaintext
/images/hero/
/images/gallery/
/images/stores/
/images/products/
```

목적별로 분리.

---

# SEO 규칙

## canonical 유지

반드시:

```html
<link rel="canonical" href="https://andmarket09.com/">
```

사용.

---

# robots.txt

반드시 유지:

```txt
User-agent: *
Allow: /

Sitemap: https://andmarket09.com/sitemap.xml
```

---

# sitemap.xml 유지

모든 주요 페이지 등록.

예시:

```xml
<urlset>
  <url>
    <loc>https://andmarket09.com/</loc>
  </url>
</urlset>
```

---

# OG 이미지 규칙

반드시 별도 제작.

권장 사이즈:

1200x630

파일 위치:

```plaintext
/assets/images/logo/og-image.jpg
```

---

# 도메인 운영 규칙

## 메인 도메인

메인:

https://andmarket09.com

---

## 한글 도메인 역할

https://앤드마켓공구.com

은 광고/유입용.

반드시:

301 Redirect

설정.

---

# GitHub 운영 규칙

## GitHub Pages 유지

현재는 Static 구조 유지.

복잡한 서버 구조 도입 금지.

---

# GitHub Actions 권장

push → auto deploy 구조 유지.

---

# Cloudflare 권장

추천 구성:

Gabia
→ Cloudflare DNS
→ GitHub Pages

---

# 콘텐츠 운영 방향

## 가장 중요한 요소

현재 프로젝트는 디자인보다:

- 실제 운영 사진
- 실제 주문 화면
- 실제 후기
- 실제 픽업 현장
- 실제 회원 활동

추가가 더 중요함.

---

# 반드시 추가할 콘텐츠

## 실제 후기

- 카페 사장 후기
- 회원 후기
- 공동구매 후기

---

## 실제 운영 데이터

- 회원 수
- 재구매율
- 주문량
- 운영 지역

---

## 실제 현장 사진

- 픽업 현장
- 상품 입고
- 공동구매 진행
- 카카오톡 운영

---

# 블로그 전략

반드시 검색 유입형 콘텐츠 운영.

추천 키워드:

- 카페 공동구매
- 카페 추가수익
- 공동구매 창업
- 공실상가 활용
- 무인 픽업점
- 자영업 추가수익
- 지역 공동구매

---

# URL 전략

예시:

```plaintext
/blog/cafe-gongdonggumae
/blog/gongsil-sangga
/blog/cafe-additional-income
```

---

# 기술 방향성

현재 단계:

Landing Page

중기 단계:

Brand + Content Site

장기 단계:

Regional Commerce Platform

---

# 디자인 방향

## 유지해야 하는 분위기

- 따뜻함
- 상생
- 회생
- 지역 기반
- 신뢰감
- 과하지 않은 고급감

---

# 금지 사항

- 과한 애니메이션
- 과한 glassmorphism
- 과한 gradient
- 템플릿 느낌
- 지나친 스타트업 느낌

---

# CTA 방향

현재 핵심 CTA는:

- 카카오톡 상담
- 공동구매 문의
- 창업 상담

위주로 유지.

---

# 현재 최우선 개선 순서

## 1순위

- CSS 분리
- JS 분리
- 이미지 정리

---

## 2순위

- 실제 운영 콘텐츠 추가
- 후기 추가
- 운영 데이터 추가

---

## 3순위

- 블로그 구축
- 지역 페이지 구축
- SEO 강화

---

## 4순위

- 관리자 기능
- 주문 기능
- 회원 기능
- 정산 기능

---

# 최종 목표

AND MARKET은 단순 카페 브랜드가 아니라:

지역 공동구매 기반 플랫폼 + 카페 상생 모델

방향으로 성장한다.