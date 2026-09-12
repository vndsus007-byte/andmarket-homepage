/* store-picker.js — 공구방 입장 시 매장 선택 모달
   JS가 없어도 CSS :target 으로 열리므로, 여기서는 동작만 개선한다. */
function initStorePicker() {
  const picker = document.getElementById('store-picker');
  if (!picker) return;

  const openers = document.querySelectorAll('[data-picker-open]');
  const closers = picker.querySelectorAll('[data-picker-close]');
  let lastFocused = null;

  const open = () => {
    picker.classList.add('open');
    document.body.classList.add('picker-locked');
    const first = picker.querySelector('.picker-list a');
    if (first) first.focus();
  };

  const close = () => {
    picker.classList.remove('open');
    document.body.classList.remove('picker-locked');
    if (lastFocused) lastFocused.focus();
    // :target 으로 열려 있던 경우를 대비해 해시를 비운다
    if (location.hash === '#store-picker') {
      history.replaceState(null, '', location.pathname + location.search);
    }
  };

  openers.forEach((el) => {
    el.addEventListener('click', (event) => {
      event.preventDefault();
      lastFocused = el;
      open();
    });
  });

  closers.forEach((el) => {
    el.addEventListener('click', (event) => {
      event.preventDefault();
      close();
    });
  });

  // 매장을 고르면 새 탭으로 열리므로 모달은 닫아 둔다
  picker.querySelectorAll('.picker-list a').forEach((link) => {
    link.addEventListener('click', () => setTimeout(close, 120));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && picker.classList.contains('open')) close();
  });

  // 링크를 직접 공유받아 #store-picker 로 진입한 경우
  if (location.hash === '#store-picker') open();
}
