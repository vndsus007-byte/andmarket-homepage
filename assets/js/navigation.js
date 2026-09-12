/* navigation.js — 헤더 / 모바일 메뉴 / 스크롤 내비게이션 */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.menu-button');
  const mobileNav = document.querySelector('.mobile-nav');

  if (menuButton && mobileNav) {
    const setOpen = (open) => {
      mobileNav.classList.toggle('open', open);
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    };
    menuButton.addEventListener('click', () => {
      setOpen(!mobileNav.classList.contains('open'));
    });
    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setOpen(false));
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setOpen(false);
    });
  }

  // 앵커 스무스 스크롤 (고정 헤더 높이만큼 보정)
  // 매장 선택 모달 열기/닫기 링크는 store-picker.js가 처리하므로 제외한다
  const SKIP = '[data-picker-open], [data-picker-close]';
  document.querySelectorAll('a[href^="#"]:not(' + SKIP + ')').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const id = anchor.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      const offset = header ? header.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - offset + 1;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // 스크롤 시 헤더 그림자 + 현재 섹션 표시
  const navLinks = Array.from(document.querySelectorAll('.desktop-nav a[href^="#"]'));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  const onScroll = () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 24);
    if (!sections.length) return;
    const line = window.scrollY + (header ? header.offsetHeight : 0) + 80;
    let current = '';
    sections.forEach((section) => {
      if (line >= section.offsetTop) current = '#' + section.id;
    });
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === current);
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
