## 배포 가드레일 (최우선)
- main 브랜치에 직접 git push 금지
- git commit / push 는 반드시 사람의 명시적 승인 후에만 실행
- 이 사이트는 push 시 즉시 라이브 배포됨 — 신중히
- 작업은 feature/fix 브랜치 → PR → 머지 순서로 진행

---

# CLAUDE.md

# AND MARKET 프로젝트 운영 및 개선 가이드

_최종 갱신: 2026-09-12 (회사소개서 기반 전면 개편 반영)_

## 프로젝트 개요

AND MARKET은 카페 기반 공동구매 픽업 플랫폼 및 상생형 프랜차이즈 브랜드 랜딩 프로젝트이다.
운영 주체는 **주식회사 원스파트너스**이며, 브랜드는 **카페앤드마켓 · 앤드마켓** 두 가지다.

현재 기술 스택:

- **Vercel** (호스팅 · push 시 자동 배포)
- GitHub (코드 저장·버전 관리 용도)
- Static HTML
- Vanilla JavaScript
- Pretendard Variable (CDN 동적 서브셋)
- Gabia Domain → Vercel DNS

> ⚠️ GitHub Pages 아님. Gabia A 레코드는 Vercel IP(`216.198.79.1`)를 가리킨다.
> TailwindCSS CDN도 더 이상 사용하지 않는다 — 자체 CSS만 사용.

현재 도메인:

| 도메인 | 용도 |
|--------|------|
| `https://andmarket09.com` | **메인 (canonical)** |
| `https://www.andmarket09.com` | 동일 사이트 |
| `https://앤드마켓공구.com` | 광고·유입용 (301 Redirect) |
| `https://order.andmarket09.com` | **주문 시스템** (별도 Vercel 프로젝트, 홈페이지 아님) |

메인 canonical 도메인은 반드시 `https://andmarket09.com` 으로 유지한다.

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

# 문구 규칙 (최우선 — 위반 시 현장 분쟁 발생)

홍보물은 회수가 안 된다. 홈페이지에 적히는 순간 고객이 그것을 근거로 매장 계산대에서 요구하고,
다툼은 직원이 받는다. **지금 실제로 되는 것만 적는다.**

## 절대 쓰면 안 되는 말

| 분류 | 금지어 | 이유 |
|------|--------|------|
| 결제 | 선결제 · 온라인 결제 | 사이렌오더는 **현장결제**다 |
| 번호 | 대기번호 · 호출번호 | 번호를 발급하지 않는다 |
| 범위 | 모든 매장 · 전 매장 | 매장별로 켜는 기능 → **「운영 매장에서」** 로 적는다 |
| 무인 | 무인 · 무인 픽업 · 셀프 픽업 · 셀프카페 · 셀프 커피 · 자동 접수 | 접수·픽업은 직원이 처리한다 |
| 혜택 | 도장 · 적립 · 스탬프 · 쿠폰 · 할인 · 사은품 · 혜택 · 멤버십 · 회원카드 · 이웃패스 · 포인트 · 마일리지 | 혜택 제도는 아직 열리지 않았다 |
| 시스템 | POS 연동 · 실시간 연동 · 전 상품 바코드 완비 · 재고 자동 반영 · PB · 자체브랜드 | 과장이다 |

**약속은 「빨라진다 · 정확해진다」까지만.** 이미지는 실제 화면·실제 매장만 쓰고 가상 목업은 만들지 않는다.

## 명칭은 한 가지로

| 자리 | 부르는 이름 | 쓰지 말 것 |
|------|-------------|------------|
| 고객 앱 · 홈페이지 | **사이렌오더** | 모바일오더 · 스마트오더 |
| 고객 앱 · 홈페이지 | **나의 QR** | 회원카드 · 멤버십QR · 이웃패스 |
| 홈페이지 · 매장 | **브랜드상품** | PB상품 · 자체브랜드 |

## 톤

- 초기 단계임을 직접 고백하지 않는다 ("아직 없습니다", "미비합니다" 금지)
- 기회 강조 프레이밍 사용 ("지금이 가장 좋은 자리를 선점하는 타이밍")
- 가맹이 아닌 **함께 만들어가는 파트너십** 구조로 표현

---

# 브랜드·지점명 표기 규칙

| 위치 | 표기 |
|------|------|
| 헤더 로고 옆 (`.brand-text`) | `Cafe'andMarket` — **M은 대문자** |
| 본문 · 푸터 | 한글 `카페앤드마켓` / `앤드마켓` |

## 지점명

`카페` 뒤 아포스트로피는 **전부 삭제**한다. 청과 결합형만 예외로 아포스트로피를 유지한다.

| 형태 | 표기 |
|------|------|
| 카페 결합형 | `카페앤드마켓 동탄여울공원DT지점` · `카페앤드마켓 동탄호반써밋점` · `카페앤드마켓 성남수진점` |
| 청과 결합형 | `188청과/야채'앤드마켓 성남 야탑점` |
| 마켓형 | `앤드마켓 평택서정점` |

> ⚠️ **지점명은 임의로 바꾸지 않는다.** 카카오 채널 심사에서 사업자등록증·서류 명칭과
> 글자 단위로 대조되는 항목이다. 회사소개서나 대화에서 다른 표기가 나와도 사이트 표기를 유지한다.

---

# 매장 구성

## 매장 모델 4종 (회사소개서 2026 기준)

| 배지 | 모델 | 설명 |
|------|------|------|
| TYPE 01 | 카페형 | 커피·음료 중심의 일상 방문 매장 |
| TYPE 02 | 픽업형 | 공동구매 주문 상품 수령 중심 매장 |
| TYPE 03 | 신선식품형 | 과일·야채 판매를 강화한 매장 |
| TYPE 04 | 복합형 | 카페·공구·신선식품 동시 운영 |

## 운영 매장 5곳 · 매장별 카카오톡 오픈채팅방

| 매장 | 모델 | 오픈채팅 |
|------|------|----------|
| 카페앤드마켓 동탄여울공원DT지점 | 복합형 · 드라이브스루 | `https://open.kakao.com/o/gaC9N17h` |
| 카페앤드마켓 동탄호반써밋점 | 카페형 · 복합형 | `https://open.kakao.com/o/gPHqA1Ei` |
| 카페앤드마켓 성남수진점 | 복합형 | `https://open.kakao.com/o/gIQWqDIi` |
| 188청과/야채'앤드마켓 성남 야탑점 | 신선식품형 | `https://open.kakao.com/o/gE7hPndi` |
| 앤드마켓 평택서정점 | 픽업형 | `https://open.kakao.com/o/g0wbQFwi` |

준비중 3곳: 수지 동천점 · 수원 곡반정점 · 광주 탄벌점

**공구방 CTA는 단일 채팅방으로 직결하지 않는다.** 반드시 매장 선택 모달(`#store-picker`)을 거친다.
매장 추가 시 `.picker-list` 항목과 `#stores`의 `.pickup-store-mini` 카드를 **함께** 갱신하고 순서도 맞춘다.

---

# 링크 규칙

| 대상 | 주소 | 상태 |
|------|------|------|
| 카카오톡 채널 앤드마켓공구 | `https://pf.kakao.com/_JjRfX` | 사용 |
| 주문 시스템 (사이렌오더·QR 픽업) | `https://order.andmarket09.com` | 사용 |
| 가맹문의 전화 | `031-375-0717` | 사용 |
| 자사몰 `andmarket.net` | — | ⛔ **수리중 — 페이지 내 모든 링크·언급 삭제됨 (2026-09-12)** |

> 자사몰 복구 시 이 변경을 되돌리지 말고 링크만 다시 추가한다.
> 카카오 링크는 반드시 `https://` 를 쓴다 (http면 카카오톡 인앱 브라우저에서 SSL 차단됨).

---

# 프로젝트 구조 규칙

## 절대 금지

index.html 하나에 CSS · JS · Animation · SEO · 모든 섹션을 전부 몰아넣지 않는다.

## 현재 구조

```plaintext
/
├── index.html
│
├── assets/
│   ├── css/
│   │   ├── style.css        # 베이스 + 컴포넌트 (미디어쿼리 없음)
│   │   ├── animation.css    # 스크롤 진입 모션 + reduced-motion
│   │   └── responsive.css   # 미디어쿼리 전량
│   │
│   ├── js/
│   │   ├── app.js           # 초기화 전담
│   │   ├── navigation.js    # 헤더·모바일 메뉴·앵커 스크롤
│   │   ├── animation.js     # IntersectionObserver 스크롤 노출
│   │   ├── store-picker.js  # 공구방 매장 선택 모달
│   │   ├── toast.js         # 하단 알림
│   │   └── form.js          # 가맹 상담 폼
│   │
│   ├── images/
│   │   ├── logo/ hero/ banners/ stores/ cases/ products/ gallery/ icons/
│   │
│   └── fonts/
│
├── blog/
├── doc/
├── robots.txt
├── sitemap.xml
└── CLAUDE.md
```

---

# CSS 규칙

- **style.css** — typography / layout / buttons / cards / spacing / color system. **미디어쿼리를 넣지 않는다.**
- **animation.css** — 스크롤 진입 효과와 `prefers-reduced-motion` 대응만.
- **responsive.css** — 모든 미디어쿼리. 브레이크포인트는 `1180 / 960 / 640 / 380`.

폰트는 Pretendard Variable(CDN)을 `index.html`의 `<link>`로 로드한다.
**굵기는 400 / 500 / 600 / 700 / 800 다섯 단계만 쓴다.** (650·850·950 같은 값 금지)

---

# JS 규칙

## inline onclick 금지

```html
<!-- 금지 -->
<button onclick="openMenu()">
```

```javascript
// 권장
document.getElementById('menu-btn').addEventListener('click', openMenu)
```

## app.js는 초기화만 담당

```javascript
document.addEventListener('DOMContentLoaded', () => {
  initNavigation()
  initAnimation()
  initStorePicker()
  initToast()
  initContactForm()
})
```

## 주의

- `navigation.js`의 앵커 스무스 스크롤은 `[data-picker-open], [data-picker-close]` 를 **제외**해야 한다 (모달과 이중 핸들러 충돌).
- 스크롤 노출(`.animate-on-scroll`)은 JS 실패 시 콘텐츠가 안 보이므로 `<noscript>` 폴백을 유지한다.
- 매장 선택 모달은 JS 없이도 CSS `:target` 으로 열린다.

---

# 이미지 규칙

## 원본 이미지 직접 사용 금지

Unsplash 등 외부 원본 링크 직접 사용 금지. 반드시 **webp 변환 → 압축 → `assets/images` 저장** 후 사용한다.

변환은 로컬 Pillow로 처리한다(외부 AI 도구 불필요). 매장 카드는 4:3, 와이드 사례 컷은 16:9.
세로 사진을 자를 때는 **간판이 잘리지 않도록** 크롭 기준(y 앵커)을 매장별로 따로 잡는다.

모든 `<img>`에 `alt`, `width`, `height`, 그리고 히어로 외에는 `loading="lazy"` 를 넣는다.

## 폴더

```plaintext
/images/logo/      /images/hero/     /images/banners/
/images/stores/    /images/cases/    /images/products/
```

목적별로 분리. `banners/cafe-andmarket-*.jpg` 는 네이버·카카오 채널 업로드용 원본이므로 삭제하지 않는다.

---

# SEO 규칙

## 필수 유지

```html
<link rel="canonical" href="https://andmarket09.com/">
```

- OG 이미지: `assets/images/banners/brand-storefront-wide.webp` (실사진)
- JSON-LD `Organization` 유지 (법인명·설립일·사업자번호·가맹문의 전화)
- 섹션 추가 시 `sitemap.xml` 도 함께 갱신

## robots.txt

```txt
User-agent: *
Allow: /

Sitemap: https://andmarket09.com/sitemap.xml
```

네이버(Yeti) · 구글 · 다음(Daumoa) · 빙 로봇 허용 규칙을 유지한다.

---

# 회사 정보 (푸터·회사소개 섹션 기준)

| 항목 | 값 |
|------|-----|
| 법인명 | 주식회사 원스파트너스 |
| 대표자 | 노남정 |
| 설립일 | 2019년 12월 20일 |
| 사업자등록번호 | 321-88-01597 |
| 법인등록번호 | 134811-0530619 |
| 가맹문의 | 031-375-0717 |
| 소재지 | 경기도 화성시 동탄구 동탄대로시범길 122, 상가동-2동 1층 109호 |
| 사업의 종류 | 음식점업 · 도매 및 소매업 · 정보서비스업 · 서비스업 |

---

# 가맹 조건 (가맹안내 섹션 기준)

- 기존 매장 매출 **100% 점주 귀속** + 공동구매 픽업 매출 **10% 확정 수익**
- 점별 최소 매출 3,000만원 예상 기준
- 그랜드오픈 집객 프로모션 5백만원 상당 (본사·점주 **250:250 매칭**)
- 프로모션 비용은 본사·점주 5:5 분담
- **간판·냉동고·키오스크 등 물리적 설비 및 인테리어는 가맹점 부담**
- 초기 파트너 한정 가맹비 0원

---

# 검수 방법

배포 전 로컬 서버를 띄우고 Playwright로 확인한다.

```bash
python -m http.server 8777 --bind 127.0.0.1
```

> ⚠️ `file://` 로는 검수할 수 없다. 자산 경로가 루트 절대경로(`/assets/...`)라 전부 404가 난다.

체크 항목:

- 1440×900 / 390×844 **가로 오버플로 0px**
- 콘솔 오류 · 404 **0건**
- `.animate-on-scroll` 미노출 요소 **0개**
  (스크롤 트리거 시 `html{scroll-behavior:auto}` 를 주입해야 한다 — smooth면 관찰자가 안 걸림)
- 참조 자산 누락 · 깨진 앵커 · `img alt` 누락 **0건**
- 금지어 전수 검사 **0건**

---

# 개선 순서

## 1순위 — 완료 (2026-09-12)

- ✅ CSS 분리 (style / animation / responsive)
- ✅ JS 분리 (app 초기화 전담 + 기능별 모듈 6개)
- ✅ 이미지 정리 (실사진 webp 변환, 미사용 구 jpg 삭제)

## 2순위 — 진행 중

- 실제 운영 콘텐츠 추가 (✅ 매장 실사진·매장 사례 5건 반영)
- 후기 추가 (카페 사장 후기 · 회원 후기 · 공동구매 후기) ← **미착수**
- 운영 데이터 추가 (회원 수 · 재구매율 · 주문량 · 운영 지역) ← **미착수**

## 3순위

- 블로그 구축 (`/blog` 비어 있음)
- 지역 페이지 구축
- SEO 강화

추천 키워드: 카페 공동구매 · 카페 추가수익 · 공동구매 창업 · 공실상가 활용 · 자영업 추가수익 · 지역 공동구매

URL 전략 예시:

```plaintext
/blog/cafe-gongdonggumae
/blog/gongsil-sangga
/blog/cafe-additional-income
```

## 4순위

- 관리자 기능 · 주문 기능 · 회원 기능 · 정산 기능

---

# 디자인 방향

## 유지해야 하는 분위기

따뜻함 · 상생 · 회생 · 지역 기반 · 신뢰감 · 과하지 않은 고급감

## 금지 사항

- 과한 애니메이션
- 과한 glassmorphism
- 과한 gradient
- 템플릿 느낌
- 지나친 스타트업 느낌

---

# CTA 방향

현재 핵심 CTA는 다음 위주로 유지한다.

- 카카오톡 공구방 입장 (매장 선택 모달 경유)
- 공동구매 문의 (카카오톡 채널)
- 가맹 상담 (폼 + 전화 031-375-0717)

---

# 최종 목표

AND MARKET은 단순 카페 브랜드가 아니라
**지역 공동구매 기반 플랫폼 + 카페 상생 모델** 방향으로 성장한다.

단계: Landing Page → Brand + Content Site → Regional Commerce Platform
